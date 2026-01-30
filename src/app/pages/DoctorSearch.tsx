import { Navigation } from "@/app/components/Navigation";
import { FloatingSearchBar } from "@/app/components/FloatingSearchBar";
import { DoctorCard } from "@/app/components/DoctorCard";
import { motion } from "motion/react";
import { BackgroundBlobs } from "@/app/components/BackgroundBlobs";
import { PageTransition } from "@/app/components/PageTransition";
import { Footer } from "@/app/components/Footer";

// Mock doctor data
const mockDoctors = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    distance: 1.2,
    skills: ["Chest Pain", "Diagnostics", "ECG"],
    trustScore: 95,
    verified: true,
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Cardiologist",
    distance: 2.5,
    skills: ["Chest Pain", "Heart Disease", "Preventive Care"],
    trustScore: 92,
    verified: true,
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    specialty: "Internal Medicine",
    distance: 3.1,
    skills: ["Chest Pain", "General Practice", "Diagnostics"],
    trustScore: 88,
    verified: true,
  },
  {
    id: "4",
    name: "Dr. James Wilson",
    specialty: "Cardiologist",
    distance: 4.0,
    skills: ["Heart Disease", "Chest Pain", "Surgery"],
    trustScore: 94,
    verified: true,
  },
  {
    id: "5",
    name: "Dr. Lisa Anderson",
    specialty: "Emergency Medicine",
    distance: 1.8,
    skills: ["Chest Pain", "Trauma", "Acute Care"],
    trustScore: 90,
    verified: true,
  },
  {
    id: "6",
    name: "Dr. David Martinez",
    specialty: "Cardiology",
    distance: 5.3,
    skills: ["Diagnostics", "Chest Pain", "Interventional"],
    trustScore: 91,
    verified: true,
  },
];

export function DoctorSearch() {
  return (
    <PageTransition className="min-h-screen bg-background pb-32 relative overflow-hidden">
      <BackgroundBlobs />
      <Navigation />

      <main className="pt-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-3xl font-semibold text-foreground mb-2">
              Find Doctors Near You
            </h1>
            <p className="text-muted-foreground">
              Showing {mockDoctors.length} specialists matching your symptoms
            </p>
          </motion.div>

          {/* Doctor Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {mockDoctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
              >
                <DoctorCard doctor={doctor} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      <FloatingSearchBar />
      <Footer />
    </PageTransition>
  );
}