"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2, ChevronDown, LogOut, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useOptionalAuth } from "@/hooks/useOptionalAuth";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/About" },
  { name: "Services", path: "/Services" },
  { name: "Products", path: "/Products" },
  { name: "Contact", path: "/Contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovering, setIsHovering] = useState<string | null>(null);
  const router = useRouter();
  const currentPath = router.asPath;
  const { isLoading, isAuthenticated, user, loginWithRedirect, logout, isAvailable } = useOptionalAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPath]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-xl shadow-2xl border-b border-border/60 py-2"
          : "bg-background/80 backdrop-blur-md shadow-sm py-4"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group relative"
            onMouseEnter={() => setIsHovering("logo")}
            onMouseLeave={() => setIsHovering(null)}
          >
            <div className={cn(
              "w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg",
              isHovering === "logo" && "shadow-xl scale-110"
            )}>
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Chang Groups
              </span>
              <span className="text-xs text-muted-foreground font-medium tracking-wider">
                INNOVATION & EXCELLENCE
              </span>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.path} className="relative">
                <Link
                  href={link.path}
                  className={cn(
                    "px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg relative group",
                    currentPath === link.path
                      ? "text-primary bg-primary/10"
                      : "text-foreground/90 hover:text-primary hover:bg-accent/50"
                  )}
                  onMouseEnter={() => setIsHovering(link.path)}
                  onMouseLeave={() => setIsHovering(null)}
                >
                  {link.name}
                  <span
                    className={cn(
                      "absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 -translate-x-1/2",
                      currentPath === link.path 
                        ? "w-4/5" 
                        : "group-hover:w-4/5"
                    )}
                  />
                </Link>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            {isLoading ? (
              <Button variant="ghost" disabled>
                Loading...
              </Button>
            ) : isAuthenticated ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/50">
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {user?.name || user?.email || 'User'}
                  </span>
                </div>
                <Button 
                  variant="ghost"
                  onClick={() => logout({ logoutParams: { returnTo: typeof window !== "undefined" ? window.location.origin : undefined } })}
                  className="text-foreground/80 hover:text-white font-medium transition-colors"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            ) : isAvailable ? (
              <Button
                variant="ghost"
                onClick={() => loginWithRedirect()}
                className="text-foreground/80 hover:text-white font-medium transition-colors"
              >
                Sign In
              </Button>
            ) : (
              <Button
                variant="ghost"
                disabled
                className="text-foreground/50 font-medium"
                title="Authentication not configured"
              >
                Sign In
              </Button>
            )}
            <Link href="/Contact">
              <Button
                className={cn(
                  "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105",
                  isScrolled && "shadow-md"
                )}
              >
                Get Started
                <ChevronDown className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-3 rounded-xl transition-all duration-300",
              isMobileMenuOpen 
                ? "bg-accent text-foreground" 
                : "bg-transparent hover:bg-accent/50 text-foreground"
            )}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <div
        className={cn(
          "md:hidden bg-background/95 backdrop-blur-xl border-t border-border/60 transition-all duration-500 overflow-hidden",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-6 space-y-2">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              href={link.path}
              className={cn(
                "flex items-center px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 transform",
                currentPath === link.path
                  ? "text-primary bg-primary/10 border-l-4 border-primary shadow-sm"
                  : "text-foreground/90 hover:text-primary hover:bg-accent/50 hover:translate-x-2",
                isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              )}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : "0ms"
              }}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 px-4 space-y-3">
            {isLoading ? (
              <Button variant="outline" className="w-full" disabled>
                Loading...
              </Button>
            ) : isAuthenticated ? (
              <div className="space-y-3">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/50">
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {user?.name || user?.email || 'User'}
                  </span>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full font-medium"
                  onClick={() => logout({ logoutParams: { returnTo: typeof window !== "undefined" ? window.location.origin : undefined } })}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            ) : isAvailable ? (
              <Button 
                variant="outline" 
                className="w-full font-medium"
                onClick={() => loginWithRedirect()}
              >
                Sign In
              </Button>
            ) : (
              <Button 
                variant="outline" 
                className="w-full font-medium" 
                disabled
                title="Authentication not configured"
              >
                Sign In
              </Button>
            )}
            <Link href="/contact" className="block">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-semibold">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;