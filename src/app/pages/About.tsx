import { BackgroundBlobs } from "@/app/components/BackgroundBlobs";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";
import { FloatingSearchBar } from "@/app/components/FloatingSearchBar";
import { PageTransition } from "@/app/components/PageTransition";
import { motion } from "motion/react";
import { Heart, Shield, Users, Target } from "lucide-react";

export function About() {
    return (
        <PageTransition className="min-h-screen bg-background pb-32 relative overflow-hidden">
            <BackgroundBlobs />
            <Navigation />

            <main className="pt-32 px-6 relative z-10">
                <div className="max-w-7xl mx-auto space-y-20">

                    {/* Hero / Mission */}
                    <section className="text-center space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-bold tracking-tight"
                        >
                            We stand for <span className="text-primary block mt-2">Patient Justice.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                        >
                            Medrox was born from a simple truth: Healthcare billing is broken. We are using AI to decode complex bills, expose unfair pricing, and give power back to the patients.
                        </motion.p>
                    </section>

                    {/* Values Grid */}
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Shield, title: "Transparency", desc: "No more hidden fees or confusing codes." },
                            { icon: Users, title: "Community", desc: "Patients helping patients navigate the system." },
                            { icon: Target, title: "Accuracy", desc: "AI-driven audits that don't miss a detail." },
                            { icon: Heart, title: "Empowerment", desc: "Giving you the tools to fight back." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/60 backdrop-blur-md border border-white/40 p-8 rounded-[24px] shadow-sm hover:shadow-lg transition-all group"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-muted-foreground">{item.desc}</p>
                            </motion.div>
                        ))}
                    </section>

                    {/* Story Section */}
                    <motion.section
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row items-center gap-12 bg-white/40 backdrop-blur-md border border-white/40 rounded-[32px] p-8 md:p-12"
                    >
                        <div className="flex-1 space-y-6">
                            <h2 className="text-3xl font-bold">Our Story</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                It started when our founder received a ₹1.5 Lakh bill for a routine checkup. The "facility fees" alone were higher than the treatment cost.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Realizing that millions of Indians face this daily, we gathered a team of doctors, data scientists, and engineers to build Medrox. Today, we've analyzed over ₹50 Crores in medical bills and saved patients an average of 40%.
                            </p>
                        </div>
                        <div className="flex-1 aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors" />
                            <span className="font-bold text-primary text-xl relative z-10">Founding Team Photo Placeholder</span>
                        </div>
                    </motion.section>

                </div>
            </main>

            <FloatingSearchBar />
            <Footer />
        </PageTransition>
    );
}
