import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LoginModal({ open, onOpenChange }: LoginModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">Privacy First.</DialogTitle>
          <DialogDescription className="text-center pt-2">
            Please log in to protect your medical data.
          </DialogDescription>
        </DialogHeader>
        <div className="pt-4">
          <Button 
            className="w-full" 
            onClick={() => onOpenChange(false)}
          >
            Log In / Sign Up
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
