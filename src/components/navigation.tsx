"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { TypeformModal } from "@/components/typeform-modal";

const navItems = [
  { href: "/team", key: "about", label: "About" },
  { href: "/technology", key: "technology", label: "Technology" },
  { href: "/solutions", key: "solutions", label: "Product" },
  { href: "/resources", key: "resources", label: "Resources" },
];

// Rotating circles component that syncs with logo animation
function RotatingCircles() {
  const [rotation, setRotation] = useState(0);
  const animationRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait for logo unscrambling to complete before starting rotation
    // 15 scrambles @ 80ms + 8 unscrambles @ 120ms = 2160ms
    const logoAnimationDuration = 15 * 80 + 8 * 120; // 2160ms
    const rotationDuration = 10000; // 10 seconds for a full rotation
    
    const startRotation = () => {
      let lastTime = performance.now();

      const animate = (currentTime: number) => {
        const delta = currentTime - lastTime;
        lastTime = currentTime;
        
        // Use CSS transform for better performance (GPU accelerated)
        if (containerRef.current) {
          const progress = ((currentTime % rotationDuration) / rotationDuration) * 360;
          containerRef.current.style.transform = `rotate(${progress}deg)`;
        }
        
        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);
    };

    // Delay rotation start until logo animation completes
    const timeoutId = setTimeout(startRotation, logoAnimationDuration);

    return () => {
      clearTimeout(timeoutId);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Equilateral triangle with circles at precise positions
  // Using pixels for precise positioning
  const radius = 6; // 6px radius from center
  const circleSize = 5; // 5px diameter
  
  // Calculate positions for equilateral triangle
  // Top circle: 0, -radius
  // Bottom left: -radius * cos(30°), radius * sin(30°)
  // Bottom right: radius * cos(30°), radius * sin(30°)
  const cos30 = Math.cos(Math.PI / 6); // ≈ 0.866
  const sin30 = Math.sin(Math.PI / 6); // 0.5
  
  const topCircle = { x: 0, y: -radius };
  const bottomLeft = { x: -radius * cos30, y: radius * sin30 };
  const bottomRight = { x: radius * cos30, y: radius * sin30 };

  return (
    <div 
      ref={containerRef}
      className="relative flex items-center justify-center"
      style={{ 
        width: `${(radius + circleSize / 2) * 2}px`,
        height: `${(radius + circleSize / 2) * 2}px`,
        willChange: 'transform',
        transformOrigin: 'center center'
      }}
    >
      <div 
        className="absolute rounded-full bg-white"
        style={{
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          left: `calc(50% + ${topCircle.x}px)`,
          top: `calc(50% + ${topCircle.y}px)`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div 
        className="absolute rounded-full bg-white"
        style={{
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          left: `calc(50% + ${bottomLeft.x}px)`,
          top: `calc(50% + ${bottomLeft.y}px)`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div 
        className="absolute rounded-full bg-white"
        style={{
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          left: `calc(50% + ${bottomRight.x}px)`,
          top: `calc(50% + ${bottomRight.y}px)`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
}

// Scrambled logo component with signal transmission effect
function ScrambledLogo() {
  const targetText = "HOLOGRAM";
  const [displayText, setDisplayText] = useState(targetText); // Initialize with targetText for SSR consistency
  const [isUnscrambling, setIsUnscrambling] = useState(false);
  const [mounted, setMounted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const unscrambleIndexRef = useRef(0);

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

  // Mark component as mounted on client side
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return; // Don't start animation until after hydration

    // Initial scramble phase - show random characters
    let scrambleCount = 0;
    const maxScrambles = 15; // Number of scrambles before starting to unscramble

    const scrambleInterval = setInterval(() => {
      if (scrambleCount < maxScrambles) {
        // Generate random scrambled text
        const scrambled = targetText
          .split("")
          .map(() => chars[Math.floor(Math.random() * chars.length)])
          .join("");
        setDisplayText(scrambled);
        scrambleCount++;
      } else {
        clearInterval(scrambleInterval);
        setIsUnscrambling(true);
        unscrambleIndexRef.current = 0;
      }
    }, 100); // Slightly slower for better performance

    return () => {
      if (scrambleInterval) clearInterval(scrambleInterval);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [mounted]);

  useEffect(() => {
    if (!isUnscrambling || !mounted) return; // Don't start unscrambling until after hydration

    // Unscramble phase - reveal correct letters one by one
    const unscrambleInterval = setInterval(() => {
      if (unscrambleIndexRef.current < targetText.length) {
        const revealed = targetText
          .split("")
          .map((char, index) => {
            if (index <= unscrambleIndexRef.current) {
              return char;
            }
            // Still show random char for unrevealed positions
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");
        setDisplayText(revealed);
        unscrambleIndexRef.current++;
      } else {
        clearInterval(unscrambleInterval);
        setDisplayText(targetText);
      }
    }, 150); // Slightly slower for better performance

    intervalRef.current = unscrambleInterval;

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isUnscrambling, mounted]);

  return (
    <span 
      className="text-2xl font-bold tracking-wide uppercase text-foreground transition-all duration-200"
      style={{ willChange: 'contents' }}
    >
      {displayText}
    </span>
  );
}

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [technologyOpen, setTechnologyOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [isTypeformOpen, setIsTypeformOpen] = useState(false);
  
  // Timeout refs for delayed closing
  const resourcesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const technologyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const productTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  // Helper function to handle delayed close
  const handleDelayedClose = (
    setOpen: (value: boolean) => void,
    timeoutRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>,
    delay: number = 200
  ) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
      timeoutRef.current = null;
    }, delay);
  };
  
  // Helper function to cancel delayed close
  const cancelDelayedClose = (timeoutRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };
  
  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (resourcesTimeoutRef.current) clearTimeout(resourcesTimeoutRef.current);
      if (technologyTimeoutRef.current) clearTimeout(technologyTimeoutRef.current);
      if (productTimeoutRef.current) clearTimeout(productTimeoutRef.current);
    };
  }, []);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const technologyRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setResourcesOpen(false);
      }
      if (technologyRef.current && !technologyRef.current.contains(event.target as Node)) {
        setTechnologyOpen(false);
      }
    };

    if (resourcesOpen || technologyOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [resourcesOpen, technologyOpen]);

  return (
    <>
      <TypeformModal open={isTypeformOpen} onOpenChange={setIsTypeformOpen} />
      <nav className="sticky top-0 z-50 border-b border-border/20 bg-[hsl(260_45%_8%)]/90 backdrop-blur-xl shadow-lg shadow-black/30 safe-area-inset-top" style={{ willChange: 'transform' }}>
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between relative">
                <Link href="/" className="group flex items-center gap-3 z-10">
                  <RotatingCircles />
                  <ScrambledLogo />
                </Link>
          <div className="hidden lg:flex lg:gap-x-10 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const isResources = item.key === "resources";
              const isTechnology = item.key === "technology";
              const isProduct = item.key === "solutions";
              
              if (isResources) {
                return (
                  <div 
                    key={item.href} 
                    ref={resourcesRef} 
                    className="relative"
                    onMouseLeave={() => handleDelayedClose(setResourcesOpen, resourcesTimeoutRef, 200)}
                  >
                    <button
                      onClick={() => setResourcesOpen(!resourcesOpen)}
                      onMouseEnter={() => {
                        cancelDelayedClose(resourcesTimeoutRef);
                        setResourcesOpen(true);
                      }}
                      className={cn(
                        "relative text-[15px] font-semibold antialiased tracking-[-0.015em] transition-all duration-200 px-1 py-2 flex items-center gap-1.5 uppercase",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground/90 hover:text-foreground"
                      )}
                      style={{ 
                        textRendering: 'optimizeLegibility', 
                        WebkitFontSmoothing: 'antialiased', 
                        MozOsxFontSmoothing: 'grayscale',
                        fontWeight: 600,
                        letterSpacing: '-0.015em'
                      }}
                    >
                      {item.label}
                      <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200 opacity-70", resourcesOpen && "rotate-180")} />
                    </button>
                    {resourcesOpen && (
                      <div 
                        className="absolute top-full left-0 mt-1 w-48 bg-surface-dark/98 backdrop-blur-xl border border-border/20 rounded-lg shadow-lg shadow-black/20 py-2 z-50"
                        onMouseEnter={() => {
                          cancelDelayedClose(resourcesTimeoutRef);
                          setResourcesOpen(true);
                        }}
                        onMouseLeave={() => handleDelayedClose(setResourcesOpen, resourcesTimeoutRef, 200)}
                      >
                        <Link
                          href="/faq"
                          className="block px-4 py-2.5 text-base font-semibold antialiased tracking-[-0.01em] text-muted-foreground/90 hover:text-foreground hover:bg-white/5 transition-all duration-200"
                          style={{ 
                            textRendering: 'optimizeLegibility', 
                            WebkitFontSmoothing: 'antialiased', 
                            MozOsxFontSmoothing: 'grayscale',
                            fontWeight: 600,
                            letterSpacing: '-0.01em'
                          }}
                        >
                          FAQ
                        </Link>
                        <a
                          href="https://uor-foundation.github.io/hologram-archive/book/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2.5 text-base font-semibold antialiased tracking-[-0.01em] text-muted-foreground/90 hover:text-foreground hover:bg-white/5 transition-all duration-200"
                          style={{ 
                            textRendering: 'optimizeLegibility', 
                            WebkitFontSmoothing: 'antialiased', 
                            MozOsxFontSmoothing: 'grayscale',
                            fontWeight: 600,
                            letterSpacing: '-0.01em'
                          }}
                        >
                          Whitepaper
                        </a>
                        <div className="block px-4 py-2.5 text-base font-medium antialiased tracking-[-0.01em] text-muted-foreground/60 cursor-not-allowed" style={{ 
                          textRendering: 'optimizeLegibility', 
                          WebkitFontSmoothing: 'antialiased', 
                          MozOsxFontSmoothing: 'grayscale',
                          fontWeight: 600,
                          letterSpacing: '-0.01em'
                        }}>
                          Docs <span className="text-xs">(Coming Soon)</span>
                        </div>
                        <Link
                          href="/contact"
                          className="block px-4 py-2.5 text-base font-semibold antialiased tracking-[-0.01em] text-muted-foreground/90 hover:text-foreground hover:bg-white/5 transition-all duration-200"
                          style={{ 
                            textRendering: 'optimizeLegibility', 
                            WebkitFontSmoothing: 'antialiased', 
                            MozOsxFontSmoothing: 'grayscale',
                            fontWeight: 600,
                            letterSpacing: '-0.01em'
                          }}
                        >
                          Contact us
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }
              
              if (isTechnology) {
                return (
                  <div 
                    key={item.href} 
                    ref={technologyRef} 
                    className="relative"
                    onMouseLeave={() => handleDelayedClose(setTechnologyOpen, technologyTimeoutRef, 200)}
                  >
                    <button
                      onClick={() => setTechnologyOpen(!technologyOpen)}
                      onMouseEnter={() => {
                        cancelDelayedClose(technologyTimeoutRef);
                        setTechnologyOpen(true);
                      }}
                      className={cn(
                        "relative text-[15px] font-semibold antialiased tracking-[-0.015em] transition-all duration-200 px-1 py-2 flex items-center gap-1.5 uppercase",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground/90 hover:text-foreground"
                      )}
                      style={{ 
                        textRendering: 'optimizeLegibility', 
                        WebkitFontSmoothing: 'antialiased', 
                        MozOsxFontSmoothing: 'grayscale',
                        fontWeight: 600,
                        letterSpacing: '-0.015em'
                      }}
                    >
                      {item.label}
                      <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", technologyOpen && "rotate-180")} />
                    </button>
                    {technologyOpen && (
                      <div 
                        className="absolute top-full left-0 mt-1 w-48 bg-surface-dark/98 backdrop-blur-xl border border-border/20 rounded-lg shadow-lg shadow-black/20 py-2 z-50"
                        onMouseEnter={() => {
                          cancelDelayedClose(technologyTimeoutRef);
                          setTechnologyOpen(true);
                        }}
                        onMouseLeave={() => handleDelayedClose(setTechnologyOpen, technologyTimeoutRef, 200)}
                      >
                        <Link
                          href="/research"
                          className="block px-4 py-2.5 text-base font-semibold antialiased tracking-[-0.01em] text-muted-foreground/90 hover:text-foreground hover:bg-white/5 transition-all duration-200"
                          style={{ 
                            textRendering: 'optimizeLegibility', 
                            WebkitFontSmoothing: 'antialiased', 
                            MozOsxFontSmoothing: 'grayscale',
                            fontWeight: 600,
                            letterSpacing: '-0.01em'
                          }}
                        >
                          Theory (<span
                            className="gradient-text-animated"
                            style={{
                              backgroundImage: 'linear-gradient(97deg, #3388EE, #8844CC 42%, #CC44AA 74%, #EE4433)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                            }}
                          >
                            Atlas
                          </span>)
                        </Link>
                        <Link
                          href="/how"
                          className="block px-4 py-2.5 text-base font-semibold antialiased tracking-[-0.01em] text-muted-foreground/90 hover:text-foreground hover:bg-white/5 transition-all duration-200"
                          style={{ 
                            textRendering: 'optimizeLegibility', 
                            WebkitFontSmoothing: 'antialiased', 
                            MozOsxFontSmoothing: 'grayscale',
                            fontWeight: 600,
                            letterSpacing: '-0.01em'
                          }}
                        >
                          How it works
                        </Link>
                        <Link
                          href="/benchmarks"
                          className="block px-4 py-2.5 text-base font-semibold antialiased tracking-[-0.01em] text-muted-foreground/90 hover:text-foreground hover:bg-white/5 transition-all duration-200"
                          style={{ 
                            textRendering: 'optimizeLegibility', 
                            WebkitFontSmoothing: 'antialiased', 
                            MozOsxFontSmoothing: 'grayscale',
                            fontWeight: 600,
                            letterSpacing: '-0.01em'
                          }}
                        >
                          Benchmarks
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }
              
              if (isProduct) {
                return (
                  <div 
                    key={item.href} 
                    ref={productRef} 
                    className="relative"
                    onMouseLeave={() => handleDelayedClose(setProductOpen, productTimeoutRef, 200)}
                  >
                    <button
                      onClick={() => setProductOpen(!productOpen)}
                      onMouseEnter={() => {
                        cancelDelayedClose(productTimeoutRef);
                        setProductOpen(true);
                      }}
                      className={cn(
                        "relative text-[15px] font-semibold antialiased tracking-[-0.015em] transition-all duration-200 px-1 py-2 flex items-center gap-1.5 uppercase",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground/90 hover:text-foreground"
                      )}
                      style={{ 
                        textRendering: 'optimizeLegibility', 
                        WebkitFontSmoothing: 'antialiased', 
                        MozOsxFontSmoothing: 'grayscale',
                        fontWeight: 600,
                        letterSpacing: '-0.015em'
                      }}
                    >
                      {item.label}
                      <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", productOpen && "rotate-180")} />
                    </button>
                    {productOpen && (
                      <div 
                        className="absolute top-full left-0 mt-1 w-48 bg-surface-dark/98 backdrop-blur-xl border border-border/20 rounded-lg shadow-lg shadow-black/20 py-2 z-50"
                        onMouseEnter={() => {
                          cancelDelayedClose(productTimeoutRef);
                          setProductOpen(true);
                        }}
                        onMouseLeave={() => handleDelayedClose(setProductOpen, productTimeoutRef, 200)}
                      >
                        <Link
                          href="/ai-inference"
                          className="block px-4 py-2.5 text-base font-semibold antialiased tracking-[-0.01em] text-foreground hover:bg-surface-dark/50 transition-colors"
                          onClick={() => setProductOpen(false)}
                          style={{ 
                            textRendering: 'optimizeLegibility', 
                            WebkitFontSmoothing: 'antialiased', 
                            MozOsxFontSmoothing: 'grayscale',
                            fontWeight: 600,
                            letterSpacing: '-0.01em'
                          }}
                        >
                          AI Inference (<span 
                            className="gradient-text-animated"
                            style={{
                              backgroundImage: 'linear-gradient(97deg, #3388EE, #8844CC 42%, #CC44AA 74%, #EE4433)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                            }}
                          >
                            vGPU
                          </span>)
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative text-[15px] font-semibold antialiased tracking-[-0.015em] transition-all duration-200 px-1 py-2 uppercase",
                    isActive
                      ? "text-white"
                      : "text-muted-foreground/90 hover:text-foreground"
                  )}
                  style={{ 
                    textRendering: 'optimizeLegibility', 
                    WebkitFontSmoothing: 'antialiased', 
                    MozOsxFontSmoothing: 'grayscale',
                    fontWeight: 600,
                    letterSpacing: '-0.015em'
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-x-4 z-10">
            <Button 
              size="default"
              asChild
              className="hidden sm:flex font-semibold antialiased text-[15px] tracking-[-0.01em] bg-black border-2 border-purple-500 text-white hover:bg-black/90 hover:border-purple-400 transition-all duration-200 px-5"
              style={{ 
                textRendering: 'optimizeLegibility', 
                WebkitFontSmoothing: 'antialiased', 
                MozOsxFontSmoothing: 'grayscale',
                fontWeight: 600,
                letterSpacing: '-0.01em'
              }}
            >
              <a href="https://form.typeform.com/to/vnJ47vOK" target="_blank" rel="noopener noreferrer">
                Get Early Access
              </a>
            </Button>
            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2.5 min-h-[44px] min-w-[44px] text-muted-foreground hover:text-foreground hover:bg-white/10 active:bg-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan/50 touch-manipulation"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-200 ease-in-out",
          mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        )}
        style={{ willChange: mobileMenuOpen ? 'max-height, opacity' : 'auto' }}
      >
        <div className="border-t border-border/20 bg-surface-dark/98 backdrop-blur-xl px-4 py-4 sm:py-5 space-y-1 safe-area-inset-bottom">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const isResources = item.key === "resources";
            const isTechnology = item.key === "technology";
            const isProduct = item.key === "solutions";
            
            if (isResources) {
              return (
                <div key={item.href}>
                  <div className="block rounded-lg px-4 py-3 text-sm font-semibold antialiased tracking-[-0.015em] uppercase text-muted-foreground/90" style={{ 
                    textRendering: 'optimizeLegibility', 
                    WebkitFontSmoothing: 'antialiased', 
                    MozOsxFontSmoothing: 'grayscale',
                    fontWeight: 600,
                    letterSpacing: '-0.015em'
                  }}>
                    {item.label}
                  </div>
                  <div className="pl-4 space-y-1">
                    <Link
                      href="/faq"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-lg px-4 py-3 min-h-[44px] flex items-center text-base font-semibold antialiased tracking-[-0.01em] text-muted-foreground/90 hover:text-foreground hover:bg-white/5 active:bg-white/10 transition-all duration-200 touch-manipulation"
                      style={{ 
                        textRendering: 'optimizeLegibility', 
                        WebkitFontSmoothing: 'antialiased', 
                        MozOsxFontSmoothing: 'grayscale',
                        fontWeight: 600,
                        letterSpacing: '-0.01em'
                      }}
                    >
                      FAQ
                    </Link>
                    <a
                      href="https://uor-foundation.github.io/hologram-archive/book/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-lg px-4 py-3 min-h-[44px] flex items-center text-base font-semibold antialiased tracking-[-0.01em] text-muted-foreground/90 hover:text-foreground hover:bg-white/5 active:bg-white/10 transition-all duration-200 touch-manipulation"
                      style={{ 
                        textRendering: 'optimizeLegibility', 
                        WebkitFontSmoothing: 'antialiased', 
                        MozOsxFontSmoothing: 'grayscale',
                        fontWeight: 600,
                        letterSpacing: '-0.01em'
                      }}
                    >
                      Whitepaper
                    </a>
                    <div className="block rounded-lg px-4 py-3 min-h-[44px] flex items-center text-base font-medium antialiased tracking-[-0.01em] text-muted-foreground/60" style={{ 
                      textRendering: 'optimizeLegibility', 
                      WebkitFontSmoothing: 'antialiased', 
                      MozOsxFontSmoothing: 'grayscale',
                      fontWeight: 500,
                      letterSpacing: '-0.01em'
                    }}>
                      Docs <span className="text-xs ml-1">(Coming Soon)</span>
                    </div>
                    <Link
                      href="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-lg px-4 py-3 min-h-[44px] flex items-center text-base font-semibold antialiased tracking-[-0.01em] text-muted-foreground/90 hover:text-foreground hover:bg-white/5 active:bg-white/10 transition-all duration-200 touch-manipulation"
                      style={{ 
                        textRendering: 'optimizeLegibility', 
                        WebkitFontSmoothing: 'antialiased', 
                        MozOsxFontSmoothing: 'grayscale',
                        fontWeight: 600,
                        letterSpacing: '-0.01em'
                      }}
                    >
                      Contact us
                    </Link>
                  </div>
                </div>
              );
            }
            
            if (isTechnology) {
              return (
                <div key={item.href}>
                  <div className="block rounded-lg px-4 py-3 text-sm font-semibold antialiased tracking-[-0.015em] uppercase text-muted-foreground/90" style={{ 
                    textRendering: 'optimizeLegibility', 
                    WebkitFontSmoothing: 'antialiased', 
                    MozOsxFontSmoothing: 'grayscale',
                    fontWeight: 600,
                    letterSpacing: '-0.015em'
                  }}>
                    {item.label}
                  </div>
                  <div className="pl-4 space-y-1">
                    <Link
                      href="/research"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-lg px-4 py-3 min-h-[44px] flex items-center text-base font-semibold antialiased tracking-[-0.01em] text-muted-foreground/90 hover:text-foreground hover:bg-white/5 active:bg-white/10 transition-all duration-200 touch-manipulation"
                      style={{ 
                        textRendering: 'optimizeLegibility', 
                        WebkitFontSmoothing: 'antialiased', 
                        MozOsxFontSmoothing: 'grayscale',
                        fontWeight: 600,
                        letterSpacing: '-0.01em'
                      }}
                    >
                      Theory (<span
                        className="gradient-text-animated"
                        style={{
                          backgroundImage: 'linear-gradient(97deg, #3388EE, #8844CC 42%, #CC44AA 74%, #EE4433)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        Atlas
                      </span>)
                    </Link>
                    <Link
                      href="/how"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-lg px-4 py-3 min-h-[44px] flex items-center text-base font-semibold antialiased tracking-[-0.01em] text-muted-foreground/90 hover:text-foreground hover:bg-white/5 active:bg-white/10 transition-all duration-200 touch-manipulation"
                      style={{ 
                        textRendering: 'optimizeLegibility', 
                        WebkitFontSmoothing: 'antialiased', 
                        MozOsxFontSmoothing: 'grayscale',
                        fontWeight: 600,
                        letterSpacing: '-0.01em'
                      }}
                    >
                      How it works
                    </Link>
                    <Link
                      href="/benchmarks"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-lg px-4 py-3 min-h-[44px] flex items-center text-base font-semibold antialiased tracking-[-0.01em] text-muted-foreground/90 hover:text-foreground hover:bg-white/5 active:bg-white/10 transition-all duration-200 touch-manipulation"
                      style={{ 
                        textRendering: 'optimizeLegibility', 
                        WebkitFontSmoothing: 'antialiased', 
                        MozOsxFontSmoothing: 'grayscale',
                        fontWeight: 600,
                        letterSpacing: '-0.01em'
                      }}
                    >
                      Benchmarks
                    </Link>
                  </div>
                </div>
              );
            }
            
            if (isProduct) {
              return (
                <div key={item.href}>
                  <div className="block rounded-lg px-4 py-3 text-sm font-semibold antialiased tracking-[-0.015em] uppercase text-muted-foreground/90" style={{ 
                    textRendering: 'optimizeLegibility', 
                    WebkitFontSmoothing: 'antialiased', 
                    MozOsxFontSmoothing: 'grayscale',
                    fontWeight: 600,
                    letterSpacing: '-0.015em'
                  }}>
                    {item.label}
                  </div>
                  <div className="pl-4 space-y-1">
                    <Link
                      href="/ai-inference"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-lg px-4 py-3 min-h-[44px] flex items-center text-base font-semibold antialiased tracking-[-0.01em] text-muted-foreground/90 hover:text-foreground hover:bg-white/5 active:bg-white/10 transition-all duration-200 touch-manipulation"
                      style={{ 
                        textRendering: 'optimizeLegibility', 
                        WebkitFontSmoothing: 'antialiased', 
                        MozOsxFontSmoothing: 'grayscale',
                        fontWeight: 600,
                        letterSpacing: '-0.01em'
                      }}
                    >
                      AI Inference (<span 
                        className="gradient-text-animated"
                        style={{
                          backgroundImage: 'linear-gradient(97deg, #3388EE, #8844CC 42%, #CC44AA 74%, #EE4433)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        vGPU
                      </span>)
                    </Link>
                  </div>
                </div>
              );
            }
            
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block rounded-lg px-4 py-3 min-h-[44px] flex items-center text-sm font-semibold antialiased tracking-[-0.015em] uppercase transition-all duration-200 touch-manipulation",
                  isActive
                    ? "text-foreground bg-cyan/10 border-l-2 border-cyan"
                    : "text-muted-foreground/90 hover:text-foreground hover:bg-white/5 active:bg-white/10"
                )}
                style={{ 
                  textRendering: 'optimizeLegibility', 
                  WebkitFontSmoothing: 'antialiased', 
                  MozOsxFontSmoothing: 'grayscale',
                  fontWeight: 600,
                  letterSpacing: '-0.015em'
                }}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href="https://form.typeform.com/to/vnJ47vOK"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg px-4 py-3 min-h-[44px] flex items-center text-[15px] font-semibold antialiased tracking-[-0.01em] bg-black border-2 border-purple-500 text-white hover:bg-black/90 hover:border-purple-400 transition-all duration-200 sm:hidden touch-manipulation"
            onClick={() => setMobileMenuOpen(false)}
            style={{ 
              textRendering: 'optimizeLegibility', 
              WebkitFontSmoothing: 'antialiased', 
              MozOsxFontSmoothing: 'grayscale',
              fontWeight: 600,
              letterSpacing: '-0.01em'
            }}
          >
            Get Early Access
          </a>
        </div>
      </div>
    </nav>
    </>
  );
}
