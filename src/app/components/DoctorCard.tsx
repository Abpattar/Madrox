import { MapPin, CheckCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar";
import { motion } from "motion/react";

interface DoctorCardProps {
  doctor: {
    id: string;
    name: string;
    avatar?: string;
    specialty: string;
    distance: number;
    verified: boolean;
  };
  onClick: () => void;
}

export function DoctorCard({ doctor, onClick }: DoctorCardProps) {
  const initials = doctor.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <motion.div
      layoutId={doctor.id}
      onClick={onClick}
      className="bg-card border border-border cursor-pointer relative overflow-hidden transition-all hover:translate-y-[-4px] hover:shadow-xl rounded-full aspect-square flex flex-col items-center justify-center text-center shadow-lg w-full max-w-[280px] mx-auto p-4 group"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {/* Avatar Section */}
      <motion.div layoutId={`avatar-${doctor.id}`} className="relative mb-3 group-hover:scale-105 transition-transform">
        <Avatar className="w-24 h-24 sm:w-28 sm:h-28 border-[4px] border-background shadow-md">
          <AvatarImage src={doctor.avatar} alt={doctor.name} />
          <AvatarFallback className="bg-primary/5 text-primary text-2xl font-medium">
            {initials}
          </AvatarFallback>
        </Avatar>
        {doctor.verified && (
          <motion.div
            layoutId={`verified-${doctor.id}`}
            className="absolute bottom-1 right-1 bg-background rounded-full p-1 text-primary shadow-sm"
          >
            <CheckCircle className="w-5 h-5 fill-background" />
          </motion.div>
        )}
      </motion.div>

      {/* Info - Simplified for Circle */}
      <div className="flex flex-col items-center gap-1 w-full px-2">
        <motion.h3
          layoutId={`name-${doctor.id}`}
          className="font-bold text-foreground text-lg leading-tight line-clamp-1"
        >
          {doctor.name}
        </motion.h3>
        <motion.p
          layoutId={`specialty-${doctor.id}`}
          className="text-muted-foreground text-sm font-medium line-clamp-1"
        >
          {doctor.specialty}
        </motion.p>
      </div>

      {/* Secret layoutID for distance to keep smooth transition if needed, or just hide in circle if too cluttered */}
      <motion.div
        className="mt-2 text-xs text-muted-foreground/60 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {doctor.distance} km
      </motion.div>
    </motion.div>
  );
}
