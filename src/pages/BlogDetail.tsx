import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from "@/lib/supabase";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { format } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Download } from "lucide-react";
import { Helmet } from "react-helmet";

interface BlogPost {
    id: string;
    created_at: string;
    title: string;
    slug: string;
    description: string;
    content: string;
    image_url: string | null;
    created_by: string;
}

const BlogDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const [blog, setBlog] = useState<BlogPost | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (slug) {
            fetchBlog(slug);
        }
    }, [slug]);

    const fetchBlog = async (slugParam: string) => {
        setIsLoading(true);
        setError(false);
        try {
            const { data, error: fetchError } = await supabase
                .from('blogs')
                .select('*')
                .eq('slug', slugParam)
                .single();

            if (fetchError) {
                throw fetchError;
            }

            setBlog(data);
        } catch (err) {
            console.error('Error fetching blog:', err);
            setError(true);
        } finally {
            setIsLoading(false);
        }
    };

    // Determine file type from URL extension
    const getFileType = (url: string) => {
        if (!url) return 'unknown';
        const extension = url.split('.').pop()?.toLowerCase();
        if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(extension || '')) return 'image';
        if (['pdf'].includes(extension || '')) return 'pdf';
        if (['ppt', 'pptx'].includes(extension || '')) return 'ppt';
        return 'file';
    };

    // Render different media types appropriately
    const renderMedia = (url: string, title: string) => {
        const type = getFileType(url);

        // Images - render as normal img tag
        if (type === 'image') {
            return (
                <div className="mb-10 rounded-xl overflow-hidden shadow-sm bg-muted">
                    <img
                        src={url}
                        alt={title}
                        className="w-full h-auto object-cover"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                        }}
                    />
                </div>
            );
        }

        // PDFs and PPTs - Use Google Docs Viewer for clean slide-by-slide view with arrows
        if (type === 'pdf' || type === 'ppt') {
            const encodedUrl = encodeURIComponent(url);
            // Google Docs Viewer provides a clean interface with page navigation arrows
            const viewerUrl = `https://docs.google.com/gview?embedded=true&url=${encodedUrl}`;

            return (
                <div className="mb-10 w-full rounded-xl overflow-hidden shadow-lg border bg-black">
                    <div className="aspect-[16/10] w-full relative">
                        <iframe
                            src={viewerUrl}
                            title={title}
                            className="absolute inset-0 w-full h-full"
                            allowFullScreen
                        />
                    </div>
                    <div className="bg-secondary/50 px-4 py-2 flex items-center justify-between text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                            <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-medium uppercase">
                                {url.split('.').pop()}
                            </span>
                            Use arrows inside viewer to navigate pages
                        </span>
                        <Button asChild variant="ghost" size="sm" className="h-7">
                            <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                                <Download className="h-3 w-3" /> Download
                            </a>
                        </Button>
                    </div>
                </div>
            );
        }

        // Fallback for other file types - show download button
        return (
            <div className="mb-10 p-8 border rounded-xl bg-secondary/50 flex flex-col items-center justify-center text-center gap-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="h-8 w-8 text-primary" />
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Attachment Available</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                        This post contains a file attachment ({url.split('.').pop()?.toUpperCase()}).
                    </p>
                </div>
                <Button asChild variant="outline" className="mt-2">
                    <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Download className="h-4 w-4" /> Download / View File
                    </a>
                </Button>
            </div>
        );
    };

    // Error state - blog not found
    if (error) {
        return (
            <div className="min-h-screen flex flex-col bg-background">
                <Navbar />
                <main className="flex-grow flex flex-col items-center justify-center pt-24 pb-12 container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
                    <p className="text-muted-foreground mb-8">The requested blog post could not be found.</p>
                    <Button asChild>
                        <Link to="/blog">Back to Blog</Link>
                    </Button>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-background">
            {/* SEO Meta Tags */}
            {blog && (
                <Helmet>
                    <title>{blog.title} | Quantile Leap AI</title>
                    <meta name="description" content={blog.description} />
                    <meta property="og:title" content={blog.title} />
                    <meta property="og:description" content={blog.description} />
                    {blog.image_url && <meta property="og:image" content={blog.image_url} />}
                </Helmet>
            )}

            <Navbar />

            <main className="flex-grow pt-24 pb-12 container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Back Button */}
                    <Button variant="ghost" asChild className="mb-8 pl-0 hover:bg-transparent hover:text-primary">
                        <Link to="/blog" className="flex items-center gap-2">
                            <ArrowLeft className="h-4 w-4" /> Back to Blog
                        </Link>
                    </Button>

                    {/* Loading State */}
                    {isLoading ? (
                        <div className="space-y-8">
                            <Skeleton className="h-10 w-3/4" />
                            <Skeleton className="h-[400px] w-full rounded-lg" />
                            <div className="space-y-4">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-2/3" />
                            </div>
                        </div>
                    ) : blog ? (
                        <article className="animate-in fade-in duration-500">
                            {/* Title */}
                            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{blog.title}</h1>

                            {/* Author and Date */}
                            <div className="flex items-center gap-4 mb-8 text-sm text-muted-foreground border-b pb-8">
                                <span className="font-semibold text-foreground capitalize">{blog.created_by}</span>
                                <span>•</span>
                                <time dateTime={blog.created_at}>{format(new Date(blog.created_at), 'MMMM d, yyyy')}</time>
                            </div>

                            {/* Media - Image, PDF, PPT, or other file */}
                            {blog.image_url && renderMedia(blog.image_url, blog.title)}

                            {/* Content */}
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                {blog.content.split('\n').map((paragraph, index) => (
                                    <p key={index} className="mb-6 leading-relaxed text-muted-foreground">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </article>
                    ) : null}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default BlogDetail;
