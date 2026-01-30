import { Navigation } from "@/app/components/Navigation";
import { FloatingSearchBar } from "@/app/components/FloatingSearchBar";
import { BackgroundBlobs } from "@/app/components/BackgroundBlobs";
import { Button } from "@/app/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Activity, Users } from "lucide-react";


export function LandingPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundBlobs />
      <Navigation />

      <main className="relative pt-32 pb-24 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Left Column: Hero Text */}
            <motion.div
              className="flex-1 space-y-8 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="space-y-4">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                  AI-Powered Healthcare Advocacy
                </span>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight">
                  Democratizing <br />
                  <span className="bg-grad-main bg-clip-text text-transparent">Fair Healthcare</span>
                </h1>
                <p className="text-xl text-muted-foreground font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Stop overpaying for medical bills. Our AI analyzes, audits, and generates dispute letters to save you money in seconds.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow">
                  Audit My Bill
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full bg-white/50 border-primary/20 hover:bg-white/80 backdrop-blur-sm">
                  Find a Doctor
                </Button>
              </div>

              <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-secondary" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-secondary" />
                  <span>95% Accuracy</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-secondary" />
                  <span>10k+ Users</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Visual/3D Placeholder */}
            <motion.div
              className="flex-1 w-full max-w-xl lg:max-w-none"
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              <div className="relative">
                {/* Glass Card Container */}
                <div className="aspect-square md:aspect-[4/3] bg-white/40 backdrop-blur-xl border border-white/50 rounded-[32px] shadow-[0_32px_64px_-16px_rgba(169,38,85,0.15)] flex items-center justify-center p-8 relative z-20 overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 pointer-events-none" />

                  {/* Mock UI Content */}
                  <div className="w-full space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/60 rounded-2xl shadow-sm border border-white/50">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Activity className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold">Medical Bill Audit</div>
                          <div className="text-xs text-muted-foreground">Processing...</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-primary">$1,250.00</div>
                        <div className="text-xs text-secondary">Potential Savings: $450</div>
                      </div>
                    </div>

                    <div className="space-y-2 pl-4 border-l-2 border-primary/20">
                      <div className="h-2 w-3/4 bg-primary/10 rounded-full" />
                      <div className="h-2 w-1/2 bg-primary/10 rounded-full" />
                      <div className="h-2 w-5/6 bg-primary/10 rounded-full" />
                    </div>

                    <div className="p-4 bg-secondary/10 rounded-2xl border border-secondary/20">
                      <div className="text-sm font-medium text-secondary-foreground mb-1">AI Insight</div>
                      <p className="text-xs text-muted-foreground">Duplicate charge detected for "Metabolic Panel". Recommended action: Dispute.</p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements behind card */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <FloatingSearchBar />
    </div>
  );
}