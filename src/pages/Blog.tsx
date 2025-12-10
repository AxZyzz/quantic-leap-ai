import { useState, useEffect } from 'react';
import { supabase } from "@/lib/supabase";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { format } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight } from "lucide-react";

interface BlogPost {
    id: string;
    created_at: string;
    title: string;
    slug: string;
    description: string;
    image_url: string | null;
    created_by: string;
}

const Blog = () => {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const { data, error } = await supabase
                .from('blogs')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                throw error;
            }

            setBlogs(data || []);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const isImage = (url: string) => {
        if (!url) return false;
        const extension = url.split('.').pop()?.toLowerCase();
        return ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(extension || '');
    };

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-grow pt-24 pb-12 container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Our Blog
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Latest updates, news, and insights from our team.
                    </p>
                </div>

                {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="space-y-4">
                                <Skeleton className="h-48 w-full rounded-lg" />
                                <Skeleton className="h-6 w-3/4" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-2/3" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog) => (
                            <div key={blog.id} className="flex flex-col border rounded-lg overflow-hidden bg-card hover:shadow-lg transition-shadow duration-300">
                                <Link to={`/blog/${blog.slug}`} className="block h-48 overflow-hidden bg-muted relative group">
                                    {blog.image_url && (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(blog.image_url.split('.').pop()?.toLowerCase() || '')) ? (
                                        <img
                                            src={blog.image_url}
                                            alt={blog.title}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = 'https://placehold.co/600x400?text=Image+Load+Error';
                                            }}
                                        />
                                    ) : blog.image_url && blog.image_url.split('.').pop()?.toLowerCase() === 'pdf' ? (
                                        /* PDF Preview - Show first page in iframe */
                                        <div className="w-full h-full relative overflow-hidden">
                                            <iframe
                                                src={`${blog.image_url}#page=1&view=FitH&toolbar=0&navpanes=0`}
                                                title={`${blog.title} preview`}
                                                className="w-full h-[300px] scale-[0.6] origin-top-left pointer-events-none"
                                                style={{ width: '166%', height: '300px' }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                            <span className="absolute bottom-2 right-2 bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded font-medium">PDF</span>
                                        </div>
                                    ) : blog.image_url && ['ppt', 'pptx'].includes(blog.image_url.split('.').pop()?.toLowerCase() || '') ? (
                                        /* PPT Preview - Use Microsoft Office Online Viewer thumbnail */
                                        <div className="w-full h-full relative overflow-hidden bg-black">
                                            <iframe
                                                src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(blog.image_url)}`}
                                                title={`${blog.title} preview`}
                                                className="w-full h-[300px] scale-[0.6] origin-top-left pointer-events-none"
                                                style={{ width: '166%', height: '300px' }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                            <span className="absolute bottom-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded font-medium">PPT</span>
                                        </div>
                                    ) : blog.image_url ? (
                                        /* Other file types - show icon */
                                        <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground bg-secondary p-4 text-center">
                                            <span className="text-4xl mb-2">📄</span>
                                            <span className="text-xs font-medium uppercase tracking-wider">{blog.image_url.split('.').pop()} File</span>
                                        </div>
                                    ) : (
                                        /* No file */
                                        <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-secondary">
                                            <span>No Image</span>
                                        </div>
                                    )}
                                </Link>

                                <div className="flex-grow p-6 flex flex-col">
                                    <div className="text-xs text-muted-foreground mb-2">
                                        {format(new Date(blog.created_at), 'MMMM d, yyyy')} • {blog.created_by}
                                    </div>

                                    <Link to={`/blog/${blog.slug}`} className="hover:underline">
                                        <h2 className="text-xl font-bold mb-2 line-clamp-2">{blog.title}</h2>
                                    </Link>

                                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">
                                        {blog.description || "No description available."}
                                    </p>

                                    <Button variant="ghost" className="self-start p-0 h-auto hover:bg-transparent hover:text-primary" asChild>
                                        <Link to={`/blog/${blog.slug}`} className="flex items-center gap-2">
                                            Read More <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {!isLoading && blogs.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-muted-foreground">No blog posts found.</p>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Blog;
