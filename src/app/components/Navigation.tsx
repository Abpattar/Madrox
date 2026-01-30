import { Link } from "react-router";
import { Activity, UserCircle } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { useState } from "react";
import { LoginModal } from "@/app/components/LoginModal";

export function Navigation() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <Activity className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold text-foreground">Medrox</span>
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/bill-audit"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Scan Bill
            </Link>
            <Link
              to="/doctor-search"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Find Doctors
            </Link>
            <a
              href="#"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Price DB
            </a>
            <a
              href="#"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Community
            </a>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowLoginModal(true)}
            >
              <UserCircle className="w-5 h-5" />
            </Button>
            <Button asChild>
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </div>
      </nav>

      <LoginModal
        open={showLoginModal}
        onOpenChange={setShowLoginModal}
      />
    </>
  );
}
