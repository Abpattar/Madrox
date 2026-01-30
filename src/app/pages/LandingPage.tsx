import { Navigation } from "@/app/components/Navigation";
import { FloatingSearchBar } from "@/app/components/FloatingSearchBar";
import { motion } from "motion/react";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Heading */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl font-semibold text-foreground tracking-tight">
              Welcome to MADROX
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-normal">
              Your AI advocate for fair healthcare.
            </p>
          </motion.div>

          {/* 3D Animation Placeholder */}
          <motion.div 
            className="mt-16 w-full max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="aspect-video bg-card rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex items-center justify-center border border-border">
              <div className="text-center space-y-3">
                <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <div className="w-10 h-10 bg-primary rounded-full"></div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">3D Medical Animation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <FloatingSearchBar />
    </div>
  );
}