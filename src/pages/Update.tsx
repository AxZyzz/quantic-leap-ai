import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import Navbar from "@/components/Navigation";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    PenLine,
    Inbox,
    LogOut,
    Eye,
    RefreshCw,
    User,
    Mail,
    Calendar,
    Building,
    FileText,
    Download,
    Trash2,
    Edit2,
} from "lucide-react";
import * as XLSX from 'xlsx';

// ─── Helpers ────────────────────────────────────────────────

const checkSupabaseConfig = () => {
    const url = import.meta.env.VITE_SUPABASE_URL;
    const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

    if (!url || !key || url.includes('YOUR_SUPABASE_URL') || key.includes('YOUR_SUPABASE_ANON_KEY')) {
        toast.error("Supabase Configuration Missing! Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env");
        return false;
    }
    return true;
};

type FormSubmission = {
    id: string;
    source: string;
    data: Record<string, any>;
    created_at: string;
};

const SOURCE_COLORS: Record<string, string> = {
    'contact-page': 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    'testimonial': 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    'internship': 'bg-amber-500/15 text-amber-400 border-amber-500/30',
};

const getSourceBadge = (source: string) => {
    const className = SOURCE_COLORS[source] || 'bg-muted text-muted-foreground';
    const label = source === 'contact-page' ? 'Contact' : source === 'internship' ? 'Careers' : 'Testimonial';
    return (
        <Badge variant="outline" className={`${className} capitalize font-medium text-xs`}>
            {label}
        </Badge>
    );
};

const extractName = (data: Record<string, any>): string => {
    if (data.fullName) return data.fullName;
    if (data.firstName && data.lastName) return `${data.firstName} ${data.lastName}`;
    if (data.firstName) return data.firstName;
    return '—';
};

const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
};

const FIELD_LABELS: Record<string, string> = {
    firstName: 'First Name',
    lastName: 'Last Name',
    fullName: 'Full Name',
    email: 'Email',
    phone: 'Phone',
    role: 'Role',
    company: 'Company',
    companyName: 'Company Name',
    companySize: 'Company Size',
    website: 'Website',
    annualRevenue: 'Annual Revenue',
    projectBudget: 'Project Budget',
    message: 'Message',
    emailOptIn: 'Email Opt-In',
    rating: 'Rating',
    title: 'Title',
    testimonial: 'Testimonial',
    country: 'Country',
    city: 'City',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    whyJoin: 'Why Join',
    employmentStatus: 'Employment Status',
    university: 'University',
    course: 'Course',
    position: 'Position',
    freelanceWork: 'Freelance Work',
    automationExperience: 'Automation Experience',
    realWorldProblems: 'Real-World Problems',
    realWorldProblemDetails: 'Problem Details',
    howDidYouHear: 'How Did You Hear',
    socialMediaPlatform: 'Social Platform',
    otherSource: 'Other Source',
};

// ─── Excel Export ───────────────────────────────────────────

const flattenSubmission = (sub: FormSubmission) => {
    const row: Record<string, any> = {
        'Source': sub.source === 'contact-page' ? 'Contact' : sub.source === 'internship' ? 'Careers' : 'Testimonial',
        'Submitted At': formatDate(sub.created_at),
    };
    // Flatten JSON data fields using readable labels
    Object.entries(sub.data).forEach(([key, value]) => {
        if (value !== '' && value !== null && value !== undefined) {
            const label = FIELD_LABELS[key] || key.replace(/([A-Z])/g, ' $1').trim();
            row[label] = typeof value === 'boolean' ? (value ? 'Yes' : 'No') : String(value);
        }
    });
    return row;
};

const downloadExcel = (rows: Record<string, any>[], filename: string) => {
    const worksheet = XLSX.utils.json_to_sheet(rows);
    // Auto-size columns
    const colWidths = Object.keys(rows[0] || {}).map(key => ({
        wch: Math.max(key.length, ...rows.map(r => String(r[key] || '').length))
    }));
    worksheet['!cols'] = colWidths;
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Submissions');
    XLSX.writeFile(workbook, `${filename}.xlsx`);
};

const exportSingleSubmission = (sub: FormSubmission) => {
    const row = flattenSubmission(sub);
    const name = extractName(sub.data).replace(/\s+/g, '_') || 'submission';
    downloadExcel([row], `${sub.source}_${name}`);
    toast.success('Exported to Excel');
};

const exportAllSubmissions = (subs: FormSubmission[], filter: string) => {
    if (subs.length === 0) {
        toast.error('No submissions to export');
        return;
    }
    const rows = subs.map(flattenSubmission);
    const label = filter === 'all' ? 'all_submissions' : filter.replace('-', '_');
    downloadExcel(rows, `${label}_${new Date().toISOString().slice(0, 10)}`);
    toast.success(`Exported ${subs.length} submission${subs.length !== 1 ? 's' : ''} to Excel`);
};

// ─── Component ──────────────────────────────────────────────

const Update = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState('');
    const [isCheckingSession, setIsCheckingSession] = useState(true);

    // Login States
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    // Blog Form States
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [externalLink, setExternalLink] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Blog Management States
    const [activeTab, setActiveTab] = useState('manage');
    const [existingBlogs, setExistingBlogs] = useState<any[]>([]);
    const [isLoadingBlogs, setIsLoadingBlogs] = useState(false);
    const [editingBlogId, setEditingBlogId] = useState<string | null>(null);
    const [currentImageUrl, setCurrentImageUrl] = useState<string | null>(null);

    // Submissions States
    const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
    const [isLoadingSubmissions, setIsLoadingSubmissions] = useState(false);
    const [sourceFilter, setSourceFilter] = useState('all');
    const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);
    const [detailOpen, setDetailOpen] = useState(false);

    // ─── Force login every visit ──────────────────────────────

    useEffect(() => {
        const forceLogout = async () => {
            // Always sign out first so admin must re-enter password
            await supabase.auth.signOut();
            setIsAuthenticated(false);
            setCurrentUser('');
            setIsCheckingSession(false);
        };
        forceLogout();

        // Listen for auth state changes (e.g. after login)
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            if (session?.user) {
                setIsAuthenticated(true);
                setCurrentUser(session.user.email || 'Admin');
            } else {
                setIsAuthenticated(false);
                setCurrentUser('');
            }
        });

        // Sign out when leaving the admin page
        return () => {
            subscription.unsubscribe();
            supabase.auth.signOut();
        };
    }, []);

    // ─── Login ──────────────────────────────────────────────

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!checkSupabaseConfig()) return;

        setIsLoggingIn(true);
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: loginEmail.trim(),
                password: loginPassword.trim(),
            });

            if (error) {
                toast.error(error.message || "Invalid credentials");
                return;
            }

            if (data.user) {
                setIsAuthenticated(true);
                setCurrentUser(data.user.email || 'Admin');
                toast.success(`Welcome back, ${data.user.email}`);
            }
        } catch (err) {
            console.error("Login error:", err);
            toast.error("An error occurred during login");
        } finally {
            setIsLoggingIn(false);
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setIsAuthenticated(false);
        setCurrentUser('');
        setLoginEmail('');
        setLoginPassword('');
        toast.info("Logged out");
    };

    // ─── Blog ───────────────────────────────────────────────

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
        const generatedSlug = newTitle
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)+/g, '');
        setSlug(generatedSlug);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!checkSupabaseConfig()) return;

        if (!title || !content || !slug) {
            toast.error("Title, Slug, and Content are required");
            return;
        }

        setIsSubmitting(true);

        try {
            let imageUrl = currentImageUrl;

            if (file) {
                // Upload image to Supabase Storage
                const fileExt = file.name.split('.').pop();
                const fileName = `${Math.random()}.${fileExt}`;
                const filePath = `${fileName}`;

                const { error: uploadError } = await supabase.storage
                    .from('blog-images')
                    .upload(filePath, file);

                if (uploadError) throw uploadError;

                const { data: { publicUrl } } = supabase.storage
                    .from('blog-images')
                    .getPublicUrl(filePath);

                imageUrl = publicUrl;
            }

            const payload = {
                title,
                slug,
                description,
                content,
                image_url: imageUrl,
                external_link: externalLink || null,
                created_by: currentUser,
            };

            if (editingBlogId) {
                const { error: updateError } = await supabase
                    .from('blogs')
                    .update(payload)
                    .eq('id', editingBlogId);

                if (updateError) throw updateError;
                toast.success("Blog post updated successfully!");
            } else {
                const { error: insertError } = await supabase
                    .from('blogs')
                    .insert([payload]);

                if (insertError) throw insertError;
                toast.success("Blog post added successfully!");
            }

            // Reset form
            cancelEdit();
            fetchBlogs();
            setActiveTab('manage');

        } catch (error: any) {
            console.error('Error saving blog:', error);
            toast.error(error.message || "Failed to save blog");
        } finally {
            setIsSubmitting(false);
        }
    };

    const fetchBlogs = async () => {
        setIsLoadingBlogs(true);
        try {
            const { data, error } = await supabase
                .from('blogs')
                .select('id, title, slug, created_at, description, content, external_link, image_url')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setExistingBlogs(data || []);
        } catch (err: any) {
            toast.error(err.message || "Failed to load blogs");
        } finally {
            setIsLoadingBlogs(false);
        }
    };

    const handleEdit = (blog: any) => {
        setEditingBlogId(blog.id);
        setTitle(blog.title);
        setSlug(blog.slug);
        setDescription(blog.description || '');
        setContent(blog.content || '');
        setExternalLink(blog.external_link || '');
        setCurrentImageUrl(blog.image_url || null);
        setFile(null);
        setActiveTab('editor');
    };

    const cancelEdit = () => {
        setEditingBlogId(null);
        setTitle('');
        setSlug('');
        setDescription('');
        setContent('');
        setExternalLink('');
        setCurrentImageUrl(null);
        setFile(null);
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this blog post? This action cannot be undone.")) return;
        try {
            const { error } = await supabase.from('blogs').delete().eq('id', id);
            if (error) throw error;
            toast.success("Blog deleted successfully");
            fetchBlogs();
        } catch (err: any) {
            toast.error(err.message || "Failed to delete blog");
        }
    };

    // ─── Submissions ────────────────────────────────────────

    const fetchSubmissions = async () => {
        if (!checkSupabaseConfig()) return;

        setIsLoadingSubmissions(true);
        try {
            let query = supabase
                .from('form_submissions')
                .select('*')
                .order('created_at', { ascending: false });

            if (sourceFilter !== 'all') {
                query = query.eq('source', sourceFilter);
            }

            const { data, error } = await query;

            if (error) {
                throw error;
            }

            setSubmissions(data || []);
        } catch (err: any) {
            console.error("Error fetching submissions:", err);
            toast.error(err.message || "Failed to load submissions");
        } finally {
            setIsLoadingSubmissions(false);
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            fetchSubmissions();
            fetchBlogs();
        }
    }, [isAuthenticated, sourceFilter]);

    const openDetail = (submission: FormSubmission) => {
        setSelectedSubmission(submission);
        setDetailOpen(true);
    };

    // ─── Render ─────────────────────────────────────────────

    return (
        <div className="min-h-screen flex flex-col">
            <SEO title="Admin Panel | A2B AI Technologies" noindex={true} />
            <Navbar />

            <main className="flex-grow container mx-auto px-4 py-24">
                {isCheckingSession ? (
                    /* ── Checking Session ── */
                    <div className="flex items-center justify-center py-32">
                        <RefreshCw className="h-6 w-6 animate-spin text-muted-foreground" />
                    </div>
                ) : !isAuthenticated ? (
                    /* ── Login Screen ── */
                    <div className="max-w-md mx-auto">
                        <div className="p-8 border border-white/10 rounded-2xl shadow-2xl bg-card/80 backdrop-blur-sm">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 mb-4">
                                    <User className="h-7 w-7 text-accent" />
                                </div>
                                <h1 className="text-2xl font-bold">Admin Panel</h1>
                                <p className="text-sm text-muted-foreground mt-1">Enter your credentials to continue</p>
                            </div>
                            <form onSubmit={handleLogin} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1.5 text-muted-foreground">Email</label>
                                    <Input
                                        type="email"
                                        value={loginEmail}
                                        onChange={(e) => setLoginEmail(e.target.value)}
                                        placeholder="admin@example.com"
                                        className="h-11"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1.5 text-muted-foreground">Password</label>
                                    <Input
                                        type="password"
                                        value={loginPassword}
                                        onChange={(e) => setLoginPassword(e.target.value)}
                                        placeholder="Enter password"
                                        className="h-11"
                                    />
                                </div>
                                <Button type="submit" className="w-full h-11 mt-2" disabled={isLoggingIn}>
                                    {isLoggingIn ? 'Verifying...' : 'Login'}
                                </Button>
                            </form>
                        </div>
                    </div>
                ) : (
                    /* ── Admin Dashboard ── */
                    <div className="max-w-5xl mx-auto">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h1 className="text-3xl font-bold">Admin Panel</h1>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Logged in as <span className="font-semibold text-accent capitalize">{currentUser}</span>
                                </p>
                            </div>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={handleLogout}
                                className="gap-2 border-white/10 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30"
                            >
                                <LogOut className="h-4 w-4" />
                                Logout
                            </Button>
                        </div>

                        {/* Tabs */}
                        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                            <TabsList className="w-full justify-start bg-muted/50 border border-white/5 p-1 rounded-xl mb-6">
                                <TabsTrigger
                                    value="manage"
                                    className="gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-lg px-6"
                                >
                                    <FileText className="h-4 w-4" />
                                    Manage Blogs
                                </TabsTrigger>
                                <TabsTrigger
                                    value="editor"
                                    className="gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-lg px-6"
                                >
                                    <PenLine className="h-4 w-4" />
                                    {editingBlogId ? 'Edit Blog' : 'Create Blog'}
                                </TabsTrigger>
                                <TabsTrigger
                                    value="submissions"
                                    className="gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-lg px-6"
                                >
                                    <Inbox className="h-4 w-4" />
                                    Submissions
                                    {submissions.length > 0 && (
                                        <Badge variant="secondary" className="ml-1 text-xs px-1.5 py-0 h-5 min-w-[20px] justify-center">
                                            {submissions.length}
                                        </Badge>
                                    )}
                                </TabsTrigger>
                            </TabsList>

                            {/* ── Tab: Manage Blogs ── */}
                            <TabsContent value="manage">
                                <div className="p-6 border border-white/10 rounded-2xl bg-card/50 backdrop-blur-sm">
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-xl font-semibold flex items-center gap-2">
                                            <FileText className="h-5 w-5 text-accent" />
                                            Manage Blogs
                                        </h2>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={fetchBlogs}
                                            disabled={isLoadingBlogs}
                                            className="gap-1.5 border-white/10"
                                        >
                                            <RefreshCw className={`h-3.5 w-3.5 ${isLoadingBlogs ? 'animate-spin' : ''}`} />
                                            Refresh
                                        </Button>
                                    </div>

                                    {isLoadingBlogs ? (
                                        <div className="flex items-center justify-center py-20">
                                            <RefreshCw className="h-6 w-6 animate-spin text-muted-foreground" />
                                        </div>
                                    ) : existingBlogs.length === 0 ? (
                                        <div className="text-center py-20">
                                            <FileText className="h-12 w-12 text-muted-foreground/30 mx-auto mb-3" />
                                            <p className="text-muted-foreground">No blogs found</p>
                                            <Button variant="outline" className="mt-4" onClick={() => setActiveTab('editor')}>
                                                Create your first blog
                                            </Button>
                                        </div>
                                    ) : (
                                        <div className="border border-white/5 rounded-xl overflow-hidden">
                                            <Table>
                                                <TableHeader>
                                                    <TableRow className="border-white/5 hover:bg-transparent">
                                                        <TableHead className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Title</TableHead>
                                                        <TableHead className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Date</TableHead>
                                                        <TableHead className="text-xs uppercase tracking-wider text-muted-foreground font-semibold text-right">Actions</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {existingBlogs.map((blog) => (
                                                        <TableRow key={blog.id} className="border-white/5">
                                                            <TableCell className="font-medium">
                                                                <div className="flex items-center gap-3">
                                                                    {blog.image_url ? (
                                                                        <img src={blog.image_url} alt={`${blog.title} thumbnail`} className="w-10 h-10 rounded object-cover bg-muted" />
                                                                    ) : (
                                                                        <div className="w-10 h-10 rounded bg-muted flex items-center justify-center">
                                                                            <FileText className="h-4 w-4 text-muted-foreground" />
                                                                        </div>
                                                                    )}
                                                                    <div>
                                                                        <div className="line-clamp-1">{blog.title}</div>
                                                                        <div className="text-xs text-muted-foreground">/{blog.slug}</div>
                                                                    </div>
                                                                </div>
                                                            </TableCell>
                                                            <TableCell className="text-muted-foreground text-sm">
                                                                {formatDate(blog.created_at)}
                                                            </TableCell>
                                                            <TableCell className="text-right">
                                                                <div className="flex items-center justify-end gap-2">
                                                                    <Button
                                                                        variant="ghost"
                                                                        size="sm"
                                                                        className="h-8 px-2 text-muted-foreground hover:text-accent"
                                                                        onClick={() => handleEdit(blog)}
                                                                    >
                                                                        <Edit2 className="h-4 w-4" />
                                                                    </Button>
                                                                    <Button
                                                                        variant="ghost"
                                                                        size="sm"
                                                                        className="h-8 px-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                                                                        onClick={() => handleDelete(blog.id)}
                                                                    >
                                                                        <Trash2 className="h-4 w-4" />
                                                                    </Button>
                                                                </div>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </div>
                                    )}
                                </div>
                            </TabsContent>

                            {/* ── Tab: Blog Editor ── */}
                            <TabsContent value="editor">
                                <div className="p-6 border border-white/10 rounded-2xl bg-card/50 backdrop-blur-sm">
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-xl font-semibold flex items-center gap-2">
                                            <PenLine className="h-5 w-5 text-accent" />
                                            {editingBlogId ? 'Edit Blog Post' : 'New Blog Post'}
                                        </h2>
                                        {editingBlogId && (
                                            <Button variant="outline" size="sm" onClick={cancelEdit} className="border-white/10">
                                                Cancel Edit
                                            </Button>
                                        )}
                                    </div>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium mb-1.5 text-muted-foreground">Blog Title</label>
                                            <Input
                                                value={title}
                                                onChange={handleTitleChange}
                                                placeholder="Enter blog title"
                                                className="h-11"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium mb-1.5 text-muted-foreground">Slug (URL)</label>
                                                <Input
                                                    value={slug}
                                                    onChange={(e) => setSlug(e.target.value)}
                                                    placeholder="blog-post-url"
                                                    className="h-11"
                                                />
                                                <p className="text-xs text-muted-foreground mt-1">Unique ID for the URL.</p>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-1.5 text-muted-foreground">Description (SEO)</label>
                                                <Input
                                                    value={description}
                                                    onChange={(e) => setDescription(e.target.value)}
                                                    placeholder="Short description for search engines"
                                                    className="h-11"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-1.5 text-muted-foreground">Content</label>
                                            <Textarea
                                                value={content}
                                                onChange={(e) => setContent(e.target.value)}
                                                placeholder="Enter blog content..."
                                                className="min-h-[200px]"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium mb-1.5 text-muted-foreground">Cover Image / File</label>
                                                <Input
                                                    type="file"
                                                    onChange={handleFileChange}
                                                    accept="image/*,application/pdf"
                                                />
                                                <p className="text-xs text-muted-foreground mt-1">Upload an image (WebP/PNG/JPG) for the preview card.</p>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-1.5 text-muted-foreground">External Document Link (Optional)</label>
                                                <Input
                                                    type="url"
                                                    value={externalLink}
                                                    onChange={(e) => setExternalLink(e.target.value)}
                                                    placeholder="https://dropbox.com/..."
                                                    className="h-11"
                                                />
                                                <p className="text-xs text-muted-foreground mt-1">Link to Google Drive or Dropbox for large PDFs.</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 pt-2">
                                            <Button type="submit" className="flex-1 h-11" disabled={isSubmitting}>
                                                {isSubmitting ? 'Saving...' : editingBlogId ? 'Update Blog' : 'Publish Blog'}
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </TabsContent>

                            {/* ── Tab: Submissions ── */}
                            <TabsContent value="submissions">
                                <div className="p-6 border border-white/10 rounded-2xl bg-card/50 backdrop-blur-sm">
                                    {/* Toolbar */}
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                                        <h2 className="text-xl font-semibold flex items-center gap-2">
                                            <Inbox className="h-5 w-5 text-accent" />
                                            Form Submissions
                                        </h2>
                                        <div className="flex items-center gap-3">
                                            <Select value={sourceFilter} onValueChange={setSourceFilter}>
                                                <SelectTrigger className="w-[160px] h-9">
                                                    <SelectValue placeholder="Filter by source" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="all">All Sources</SelectItem>
                                                    <SelectItem value="contact-page">Contact</SelectItem>
                                                    <SelectItem value="testimonial">Testimonial</SelectItem>
                                                    <SelectItem value="internship">Careers</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={fetchSubmissions}
                                                disabled={isLoadingSubmissions}
                                                className="gap-1.5 border-white/10"
                                            >
                                                <RefreshCw className={`h-3.5 w-3.5 ${isLoadingSubmissions ? 'animate-spin' : ''}`} />
                                                Refresh
                                            </Button>
                                            {submissions.length > 0 && (
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => exportAllSubmissions(submissions, sourceFilter)}
                                                    className="gap-1.5 border-white/10 hover:border-emerald-500/30 hover:text-emerald-400"
                                                >
                                                    <Download className="h-3.5 w-3.5" />
                                                    Export
                                                </Button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Table */}
                                    {isLoadingSubmissions ? (
                                        <div className="flex items-center justify-center py-20">
                                            <RefreshCw className="h-6 w-6 animate-spin text-muted-foreground" />
                                        </div>
                                    ) : submissions.length === 0 ? (
                                        <div className="text-center py-20">
                                            <Inbox className="h-12 w-12 text-muted-foreground/30 mx-auto mb-3" />
                                            <p className="text-muted-foreground">No submissions found</p>
                                            <p className="text-sm text-muted-foreground/60 mt-1">
                                                {sourceFilter !== 'all' ? 'Try changing the filter' : 'Submissions will appear here when users fill out forms'}
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="border border-white/5 rounded-xl overflow-hidden">
                                            <Table>
                                                <TableHeader>
                                                    <TableRow className="border-white/5 hover:bg-transparent">
                                                        <TableHead className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Source</TableHead>
                                                        <TableHead className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Name</TableHead>
                                                        <TableHead className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Email</TableHead>
                                                        <TableHead className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Date</TableHead>
                                                        <TableHead className="text-xs uppercase tracking-wider text-muted-foreground font-semibold text-right">Actions</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {submissions.map((sub) => (
                                                        <TableRow
                                                            key={sub.id}
                                                            className="border-white/5 cursor-pointer hover:bg-accent/5 transition-colors"
                                                            onClick={() => openDetail(sub)}
                                                        >
                                                            <TableCell>{getSourceBadge(sub.source)}</TableCell>
                                                            <TableCell className="font-medium">{extractName(sub.data)}</TableCell>
                                                            <TableCell className="text-muted-foreground">{sub.data.email || '—'}</TableCell>
                                                            <TableCell className="text-muted-foreground text-sm">{formatDate(sub.created_at)}</TableCell>
                                                            <TableCell className="text-right">
                                                                <Button
                                                                    variant="ghost"
                                                                    size="sm"
                                                                    className="gap-1.5 text-muted-foreground hover:text-accent"
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        openDetail(sub);
                                                                    }}
                                                                >
                                                                    <Eye className="h-3.5 w-3.5" />
                                                                    View
                                                                </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </div>
                                    )}

                                    {/* Count */}
                                    {submissions.length > 0 && (
                                        <p className="text-xs text-muted-foreground mt-4">
                                            Showing {submissions.length} submission{submissions.length !== 1 ? 's' : ''}
                                        </p>
                                    )}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                )}
            </main>

            {/* ── Detail Dialog ── */}
            <Dialog open={detailOpen} onOpenChange={setDetailOpen}>
                <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto border-white/10 bg-card">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-3">
                            <FileText className="h-5 w-5 text-accent" />
                            Submission Details
                        </DialogTitle>
                    </DialogHeader>
                    {selectedSubmission && (
                        <div className="space-y-5 mt-2">
                            {/* Meta */}
                            <div className="flex items-center justify-between pb-4 border-b border-white/10">
                                <div className="flex items-center gap-3">
                                    {getSourceBadge(selectedSubmission.source)}
                                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                                        <Calendar className="h-3 w-3" />
                                        {formatDate(selectedSubmission.created_at)}
                                    </span>
                                </div>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => exportSingleSubmission(selectedSubmission)}
                                    className="gap-1.5 border-white/10 hover:border-emerald-500/30 hover:text-emerald-400"
                                >
                                    <Download className="h-3.5 w-3.5" />
                                    Export
                                </Button>
                            </div>

                            {/* Fields */}
                            <div className="space-y-3">
                                {Object.entries(selectedSubmission.data)
                                    .filter(([, value]) => value !== '' && value !== null && value !== undefined)
                                    .map(([key, value]) => (
                                        <div key={key} className="group">
                                            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                                                {FIELD_LABELS[key] || key.replace(/([A-Z])/g, ' $1').trim()}
                                            </p>
                                            <p className="text-sm text-foreground bg-muted/30 rounded-lg px-3 py-2 break-words">
                                                {typeof value === 'boolean' ? (value ? 'Yes' : 'No') : String(value)}
                                            </p>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Update;
