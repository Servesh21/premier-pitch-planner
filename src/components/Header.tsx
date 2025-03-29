
import React, { useState } from "react";
import { Menu, X, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Award className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary tracking-tight">
              IT Premier League
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#teams">Teams</NavLink>
            <NavLink href="#fixtures">Fixtures</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4 flex flex-col">
            <MobileNavLink href="#home" onClick={toggleMenu}>Home</MobileNavLink>
            <MobileNavLink href="#teams" onClick={toggleMenu}>Teams</MobileNavLink>
            <MobileNavLink href="#fixtures" onClick={toggleMenu}>Fixtures</MobileNavLink>
          </nav>
        )}
      </div>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-700 hover:text-primary font-medium transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <a
    href={href}
    className="text-gray-700 hover:text-primary font-medium transition-colors block py-2 border-b border-gray-100"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Header;
