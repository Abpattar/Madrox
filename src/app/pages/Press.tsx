import { BackgroundBlobs } from "@/app/components/BackgroundBlobs";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";
import { PageTransition } from "@/app/components/PageTransition";
import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";
import { ArrowUpRight, Download } from "lucide-react";

const news = [
    {
        source: "Times of India",
        date: "Jan 15, 2024",
        title: "Medrox AI exposes ₹50 Crore in hospital overcharges across Bangalore",
        snippet: "The startup's new report claims that 40% of private hospital bills contain errors or inflated 'facility fees'.",
    },
    {
        source: "YourStory",
        date: "Dec 10, 2023",
        title: "Startup Spotlight: How Medrox is empowering patients with billing transparency",
        snippet: "Founder interview discussing the vision of a patient-first healthcare economy.",
    },
    {
        source: "Economic Times",
        date: "Nov 22, 2023",
        title: "Healthcare costs rising? This app helps you audit your bills in seconds",
        snippet: "A review of the top 5 health tech apps of 2023.",
    },
];

export function Press() {
    return (
        <PageTransition className="min-h-screen bg-background pb-32 relative overflow-hidden">
            <BackgroundBlobs />
            <Navigation />

            <main className="pt-32 px-6 relative z-10">
                <div className="max-w-5xl mx-auto space-y-20">

                    {/* Hero */}
                    <section className="space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-bold tracking-tight"
                        >
                            Newsroom
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-muted-foreground max-w-2xl leading-relaxed"
                        >
                            Latest updates, press releases, and media coverage of Medrox.
                        </motion.p>
                    </section>

                    {/* Press Kit Download */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="p-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-[24px] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Media Kit</h3>
                            <p className="text-gray-400">Download logos, brand assets, and founder bios.</p>
                        </div>
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full">
                            <Download className="w-4 h-4 mr-2" /> Download Assets
                        </Button>
                    </motion.div>

                    {/* News Feed */}
                    <div className="space-y-8">
                        {news.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group border-b border-black/10 pb-8 last:border-0 hover:bg-white/40 p-6 -mx-6 rounded-2xl transition-colors cursor-pointer"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-sm font-bold text-primary">{item.source}</span>
                                    <span className="text-sm text-muted-foreground">{item.date}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                                    {item.title}
                                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                                <p className="text-muted-foreground">{item.snippet}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </main>

            <Footer />
        </PageTransition>
    );
}
