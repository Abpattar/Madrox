import { BackgroundBlobs } from "@/app/components/BackgroundBlobs";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";
import { PageTransition } from "@/app/components/PageTransition";
import { motion } from "motion/react";
import { ArrowRight, Briefcase, Code, Heart, LineChart } from "lucide-react";

const positions = [
    {
        title: "Senior Full Stack Engineer",
        type: "Engineering",
        location: "Bangalore / Remote",
        icon: Code,
        desc: "Build the core engines that audit medical bills and protect patients from overcharging.",
    },
    {
        title: "Patient Advocate Manager",
        type: "Operations",
        location: "Mumbai",
        icon: Heart,
        desc: "Lead our team of advocates who negotiate directly with hospitals on behalf of patients.",
    },
    {
        title: "Data Scientist (Healthcare)",
        type: "Data",
        location: "Remote",
        icon: LineChart,
        desc: "Analyze millions of billing records to uncover pricing anomalies and fraud patterns.",
    },
    {
        title: "Product Designer",
        type: "Design",
        location: "Bangalore",
        icon: Briefcase,
        desc: "Craft intuitive experiences that make complex medical financial data easy to understand.",
    },
];

export function Careers() {
    return (
        <PageTransition className="min-h-screen bg-background pb-32 relative overflow-hidden">
            <BackgroundBlobs />
            <Navigation />

            <main className="pt-32 px-6 relative z-10">
                <div className="max-w-7xl mx-auto space-y-20">

                    {/* Hero */}
                    <section className="text-center space-y-6">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
                        >
                            We're Hiring
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-bold tracking-tight"
                        >
                            Join the <span className="text-primary">Revolution</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                        >
                            Help us build the most transparent healthcare system in the world. We're looking for passionate people who want to make a real impact.
                        </motion.p>
                    </section>

                    {/* Job Listings */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {positions.map((job, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white/60 backdrop-blur-md border border-white/40 p-8 rounded-[24px] shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group cursor-pointer"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                                        <job.icon className="w-6 h-6 text-foreground" />
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-white border border-black/5 text-xs font-medium text-muted-foreground">
                                        {job.location}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
                                <p className="text-sm font-medium text-primary mb-4">{job.type}</p>
                                <p className="text-muted-foreground mb-8">{job.desc}</p>

                                <div className="flex items-center text-sm font-bold text-foreground group-hover:translate-x-2 transition-transform">
                                    Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </main>

            <Footer />
        </PageTransition>
    );
}
