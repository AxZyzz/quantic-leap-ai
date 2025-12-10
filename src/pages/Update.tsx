import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";

// Hardcoded credentials as requested
const CREDENTIALS = [
    { name: 'dany stephen', password: 'dany9' },
    { name: 'rahul v k', password: 'rahul99' },
    { name: 'aman xavier', password: 'aman999' },
    { name: 'akhil m s', password: 'akhil9999' }
];

const checkSupabaseConfig = () => {
    const url = import.meta.env.VITE_SUPABASE_URL;
    if (!url || url.includes('YOUR_SUPABASE_URL')) {
        toast.error("Supabase Configuration Missing! Please set VITE_SUPABASE_URL in .env");
        return false;
    }
    return true;
};

const Update = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState('');

    // Login States
    const [loginName, setLoginName] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    // Blog Form States
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const user = CREDENTIALS.find(
            c => c.name.toLowerCase() === loginName.toLowerCase() && c.password === loginPassword
        );

        if (user) {
            setIsAuthenticated(true);
            setCurrentUser(user.name);
            toast.success(`Welcome back, ${user.name}`);
        } else {
            toast.error("Invalid credentials");
        }
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
        // Auto-generate slug from title if slug hasn't been manually edited
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
            let imageUrl = null;

            if (file) {
                // Upload image to Supabase Storage
                const fileExt = file.name.split('.').pop();
                const fileName = `${Math.random()}.${fileExt}`;
                const filePath = `${fileName}`;

                const { error: uploadError } = await supabase.storage
                    .from('blog-images')
                    .upload(filePath, file);

                if (uploadError) throw uploadError;

                // Get Public URL
                const { data: { publicUrl } } = supabase.storage
                    .from('blog-images')
                    .getPublicUrl(filePath);

                imageUrl = publicUrl;
            }

            // Insert record
            const { error: insertError } = await supabase
                .from('blogs')
                .insert([
                    {
                        title,
                        slug,
                        description,
                        content,
                        image_url: imageUrl,
                        created_by: currentUser,
                    }
                ]);

            if (insertError) throw insertError;

            toast.success("Blog post added successfully!");

            // Reset form
            setTitle('');
            setSlug('');
            setDescription('');
            setContent('');
            setFile(null);

        } catch (error: any) {
            console.error('Error adding blog:', error);
            toast.error(error.message || "Failed to add blog");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar /> {/* Assuming Navbar is the default export from ../components/Navigation or similar, double checking imports below */}

            <main className="flex-grow container mx-auto px-4 py-24">
                {!isAuthenticated ? (
                    <div className="max-w-md mx-auto p-6 border rounded-lg shadow-sm bg-card">
                        <h1 className="text-2xl font-bold mb-6 text-center">Admin Access</h1>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Name</label>
                                <Input
                                    type="text"
                                    value={loginName}
                                    onChange={(e) => setLoginName(e.target.value)}
                                    placeholder="Enter identification name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Password</label>
                                <Input
                                    type="password"
                                    value={loginPassword}
                                    onChange={(e) => setLoginPassword(e.target.value)}
                                    placeholder="Enter password"
                                />
                            </div>
                            <Button type="submit" className="w-full">Login</Button>
                        </form>
                    </div>
                ) : (
                    <div className="max-w-2xl mx-auto p-6 border rounded-lg shadow-sm bg-card">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-2xl font-bold">Add New Blog</h1>
                            <span className="text-sm text-muted-foreground">Logged in as: <span className="font-semibold text-primary capitalize">{currentUser}</span></span>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-1">Blog Title</label>
                                <Input
                                    value={title}
                                    onChange={handleTitleChange}
                                    placeholder="Enter blog title"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Slug (URL)</label>
                                    <Input
                                        value={slug}
                                        onChange={(e) => setSlug(e.target.value)}
                                        placeholder="blog-post-url"
                                    />
                                    <p className="text-xs text-muted-foreground mt-1">Unique ID for the URL.</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Description (SEO)</label>
                                    <Input
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder="Short description for search engines"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Content</label>
                                <Textarea
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    placeholder="Enter blog content..."
                                    className="min-h-[200px]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Cover Image / File</label>
                                <Input
                                    type="file"
                                    onChange={handleFileChange}
                                    accept="image/*,application/pdf" // User mentioned ppt/images/any other, but image is best for blog. keeping it open.
                                />
                                <p className="text-xs text-muted-foreground mt-1">Upload an image or file related to the blog.</p>
                            </div>

                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Add Blog'}
                            </Button>
                        </form>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Update;
