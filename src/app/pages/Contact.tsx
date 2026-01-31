import { BackgroundBlobs } from "@/app/components/BackgroundBlobs";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";
import { PageTransition } from "@/app/components/PageTransition";
import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
    return (
        <PageTransition className="min-h-screen bg-background pb-32 relative overflow-hidden">
            <BackgroundBlobs />
            <Navigation />

            <main className="pt-32 px-6 relative z-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Left: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-12"
                    >
                        <div className="space-y-6">
                            <h1 className="text-5xl font-bold tracking-tight">Get in touch</h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Have questions about your bill? Want to partner with us? We'd love to hear from you.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">Email</h3>
                                    <p className="text-muted-foreground">support@medrox.ai</p>
                                    <p className="text-muted-foreground">partnerships@medrox.ai</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">Phone</h3>
                                    <p className="text-muted-foreground">+91 98765 43210</p>
                                    <p className="text-sm text-muted-foreground/60">(Mon-Fri, 9am - 6pm IST)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">Office</h3>
                                    <p className="text-muted-foreground">123 Innovation Drive, Tech City</p>
                                    <p className="text-muted-foreground">Bangalore, Karnataka 560001</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/60 backdrop-blur-xl border border-white/40 p-8 md:p-10 rounded-[32px] shadow-lg shadow-primary/5"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2">
                                <label className="text-sm font-bold ml-1">Name</label>
                                <Input placeholder="John Doe" className="bg-white/50 border-white/40 h-12 rounded-xl focus:bg-white transition-all" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold ml-1">Email</label>
                                <Input type="email" placeholder="john@example.com" className="bg-white/50 border-white/40 h-12 rounded-xl focus:bg-white transition-all" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold ml-1">Message</label>
                                <textarea
                                    placeholder="How can we help?"
                                    className="w-full bg-white/50 border border-white/40 rounded-xl p-4 min-h-[150px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                                />
                            </div>

                            <Button size="lg" className="w-full h-14 rounded-full text-lg shadow-lg hover:shadow-primary/25 transition-all">
                                Send Message <Send className="w-5 h-5 ml-2" />
                            </Button>
                        </form>
                    </motion.div>

                </div>
            </main>

            <Footer />
        </PageTransition>
    );
}
