import { MapPin, CheckCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Progress } from "@/app/components/ui/progress";

interface DoctorCardProps {
  doctor: {
    id: string;
    name: string;
    avatar?: string;
    specialty: string;
    distance: number;
    skills: string[];
    trustScore: number;
    verified: boolean;
  };
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  const initials = doctor.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="bg-card rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-border p-6 space-y-4 transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      {/* Header: Avatar, Name, Verification */}
      <div className="flex items-start gap-4">
        <Avatar className="w-14 h-14">
          <AvatarImage src={doctor.avatar} alt={doctor.name} />
          <AvatarFallback className="bg-primary/10 text-primary">
            {initials}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-foreground truncate">
              {doctor.name}
            </h3>
            {doctor.verified && (
              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
            )}
          </div>
          <p className="text-sm text-muted-foreground mt-0.5">
            {doctor.specialty}
          </p>
        </div>
      </div>

      {/* Distance */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="w-4 h-4" />
        <span>{doctor.distance} km away</span>
      </div>

      {/* Skill Tags */}
      <div className="flex flex-wrap gap-2">
        {doctor.skills.map((skill) => (
          <Badge 
            key={skill} 
            variant="secondary"
            className="rounded-full px-3 py-1"
          >
            {skill}
          </Badge>
        ))}
      </div>

      {/* Trust Score */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Trust Score</span>
          <span className="font-semibold text-primary">{doctor.trustScore}%</span>
        </div>
        <Progress value={doctor.trustScore} className="h-2" />
      </div>

      {/* View Profile Button */}
      <Button className="w-full mt-2">
        View Profile
      </Button>
    </div>
  );
}
