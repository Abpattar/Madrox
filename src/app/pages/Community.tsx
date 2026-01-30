import { BackgroundBlobs } from "@/app/components/BackgroundBlobs";
import { FloatingSearchBar } from "@/app/components/FloatingSearchBar";
import { Navigation } from "@/app/components/Navigation";
import { Button } from "@/app/components/ui/button";
import { MessageSquare, Heart, Share2 } from "lucide-react";
import { motion } from "motion/react";
import { PageTransition } from "@/app/components/PageTransition";
import { Footer } from "@/app/components/Footer";

const stories = [
    {
        id: 1,
        author: "Sarah M.",
        avatar: "SM",
        title: "Saved ₹2.5 Lakhs on my ER bill!",
        content: "I didn't know I could dispute the 'facility fee'. Thanks to Madrox, I generated a letter and they dropped the charge immediately.",
        tags: ["Success Story", "ER Bill"],
        likes: 124,
        comments: 45,
        color: "bg-blue-500",
    },
    {
        id: 2,
        author: "David K.",
        avatar: "DK",
        title: "Guide: How to negotiate MRI costs",
        content: "Never pay the sticker price. The difference between Hospital and Clinic rates in NCR is huge. Saved ₹12k just by switching...",
        tags: ["Advice", "MRI"],
        likes: 89,
        comments: 12,
        color: "bg-emerald-500",
    },
    {
        id: 3,
        author: "Elena R.",
        avatar: "ER",
        title: "Insurance denied my claim. Help?",
        content: "They are saying it was 'not medically necessary' even though my doctor ordered it. Has anyone dealt with Star Health on this?",
        tags: ["Question", "Insurance"],
        likes: 56,
        comments: 34,
        color: "bg-amber-500",
    },
    {
        id: 4,
        author: "Marcus J.",
        avatar: "MJ",
        title: "The 'Cash Price' Loophole",
        content: "I found out that paying cash was actually 40% cheaper than using my high-deductible insurance plan.",
        tags: ["Tip", "Savings"],
        likes: 230,
        comments: 67,
        color: "bg-purple-500",
    },
];

export function Community() {
    return (
        <PageTransition className="min-h-screen bg-background pb-32 relative overflow-hidden">
            <BackgroundBlobs />
            <Navigation />

            <main className="pt-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto space-y-12">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center space-y-6 py-12"
                    >
                        <motion.span
                            whileHover={{ scale: 1.05 }}
                            className="inline-block px-4 py-1.5 rounded-full bg-white/40 border border-white/50 text-primary text-sm font-medium backdrop-blur-sm cursor-default"
                        >
                            Community Hub
                        </motion.span>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            Patient <span className="text-secondary">Stories</span> & Advice
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Join 10,000+ patients helping each other navigate the healthcare system.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex justify-center gap-4"
                        >
                            <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                                Share Your Story
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-full px-8 bg-white/40 border-primary/20 hover:bg-white/60 hover:scale-105 transition-transform">
                                Browse Topics
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Featured/Masonry Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {stories.map((story, i) => (
                            <motion.div
                                key={story.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                whileHover={{ y: -8, scale: 1.01, transition: { duration: 0.2 } }}
                                className="bg-white/60 backdrop-blur-md border border-white/40 rounded-[24px] p-6 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all cursor-pointer group"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${story.color}`}>
                                        {story.avatar}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-sm">{story.author}</div>
                                        <div className="text-xs text-muted-foreground">2 hours ago</div>
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                                    {story.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                    {story.content}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {story.tags.map(tag => (
                                        <span key={tag} className="px-2 py-1 rounded-md bg-white/50 text-xs font-medium text-foreground/80 border border-white/40 group-hover:bg-primary/5 transition-colors">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between text-muted-foreground text-sm pt-4 border-t border-white/40">
                                    <div className="flex items-center gap-4">
                                        <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                                            <Heart className="w-4 h-4" /> {story.likes}
                                        </button>
                                        <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                                            <MessageSquare className="w-4 h-4" /> {story.comments}
                                        </button>
                                    </div>
                                    <button className="hover:text-primary transition-colors">
                                        <Share2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
            <FloatingSearchBar />
            <Footer />
        </PageTransition>
    );
}
