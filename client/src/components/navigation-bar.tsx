import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Menu } from "lucide-react";
import { useLocation } from "wouter";
import MobileMenu from "@/components/mobile-menu";

interface NavigationBarProps {
  currentPage?: string;
  showBackButton?: boolean;
}

export default function NavigationBar({ currentPage, showBackButton = false }: NavigationBarProps) {
  const [, navigate] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "Our Story", href: "/our-story" },
    { label: "Gallery", href: "/gallery" },
    { label: "Registry", href: "/registry" },
    { label: "Schedule", href: "/schedule" },
    { label: "RSVP", href: "/schedule#rsvp" }
  ];

  const handleNavigation = (href: string) => {
    navigate(href);
    setIsMobileMenuOpen(false);
  };

  const isCurrentPage = (page: string) => {
    return currentPage === page;
  };

  return (
    <>
      <header className="bg-rose-50/90 backdrop-blur-md py-6 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {showBackButton && (
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="text-[hsl(342,69%,29%)] hover:text-[hsl(342,60%,40%)] flex items-center gap-2"
              >
                <ArrowLeft className="h-5 w-5" />
                Back to Home
              </Button>
            )}
            
            {/* Left Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => navigate("/")}
                className={`font-serif font-medium transition-colors ${
                  isCurrentPage("home") 
                    ? "text-[hsl(342,69%,29%)] border-b-2 border-[hsl(342,69%,29%)]"
                    : "text-[hsl(342,69%,29%)] hover:text-[hsl(342,60%,40%)]"
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => navigate("/our-story")}
                className={`font-serif font-medium transition-colors ${
                  isCurrentPage("our-story") 
                    ? "text-[hsl(342,69%,29%)] border-b-2 border-[hsl(342,69%,29%)]"
                    : "text-[hsl(342,69%,29%)] hover:text-[hsl(342,60%,40%)]"
                }`}
              >
                Our Story
              </button>
              <button 
                onClick={() => navigate("/gallery")}
                className={`font-serif font-medium transition-colors ${
                  isCurrentPage("gallery") 
                    ? "text-[hsl(342,69%,29%)] border-b-2 border-[hsl(342,69%,29%)]"
                    : "text-[hsl(342,69%,29%)] hover:text-[hsl(342,60%,40%)]"
                }`}
              >
                Gallery
              </button>
            </nav>

            {/* Right Navigation */}
            <div className="hidden md:flex space-x-6">
              <button 
                onClick={() => navigate("/registry")}
                className={`font-serif font-medium transition-colors ${
                  isCurrentPage("registry") 
                    ? "text-[hsl(342,69%,29%)] border-b-2 border-[hsl(342,69%,29%)]"
                    : "text-[hsl(342,69%,29%)] hover:text-[hsl(342,60%,40%)]"
                }`}
              >
                Registry
              </button>
              <button 
                onClick={() => navigate("/schedule")}
                className={`font-serif font-medium transition-colors ${
                  isCurrentPage("schedule") 
                    ? "text-[hsl(342,69%,29%)] border-b-2 border-[hsl(342,69%,29%)]"
                    : "text-[hsl(342,69%,29%)] hover:text-[hsl(342,60%,40%)]"
                }`}
              >
                Schedule
              </button>
              <button 
                onClick={() => navigate("/schedule#rsvp")}
                className="text-[hsl(342,69%,29%)] hover:text-[hsl(342,60%,40%)] font-serif font-medium transition-colors"
              >
                RSVP
              </button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-[hsl(342,69%,29%)] hover:text-[hsl(342,60%,40%)]"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>

            {/* Logo/Monogram */}
            <div className="w-12 h-12 bg-[hsl(342,69%,29%)] rounded-full flex items-center justify-center">
              <span className="text-white font-script text-xl font-bold">O&J</span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigationItems={navigationItems}
        onNavigate={handleNavigation}
      />
    </>
  );
}