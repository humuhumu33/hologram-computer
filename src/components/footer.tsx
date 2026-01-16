"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import footerData from "@/content/en/footer.json";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

// Static 3-dot icon matching navigation logo (without animation)
function StaticCircles() {
  const radius = 6; // 6px radius from center
  const circleSize = 5; // 5px diameter
  const cos30 = Math.cos(Math.PI / 6); // ≈ 0.866
  const sin30 = Math.sin(Math.PI / 6); // 0.5
  
  const topCircle = { x: 0, y: -radius };
  const bottomLeft = { x: -radius * cos30, y: radius * sin30 };
  const bottomRight = { x: radius * cos30, y: radius * sin30 };
  
  return (
    <div 
      className="relative flex items-center justify-center"
      style={{ 
        width: `${(radius + circleSize / 2) * 2}px`,
        height: `${(radius + circleSize / 2) * 2}px`,
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

export function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer className="relative z-10 border-t border-border/20 bg-[hsl(260_45%_8%)]/90 backdrop-blur-xl shadow-lg shadow-black/30 safe-area-inset-bottom">
      <div className="mx-auto max-w-7xl px-4 pt-6 pb-4 sm:px-6 sm:pt-8 sm:pb-6 lg:px-8 lg:pt-12 lg:pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-16">
          {/* Logo and tagline */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="group flex items-center gap-3">
              {/* Static 3-dot icon matching navigation logo */}
              <div className="flex items-center justify-center transition-all group-hover:scale-105">
                <StaticCircles />
              </div>
              <span 
                className="text-2xl font-bold tracking-wide uppercase text-foreground transition-all duration-200 antialiased"
                style={{ 
                  textRendering: 'optimizeLegibility', 
                  WebkitFontSmoothing: 'antialiased', 
                  MozOsxFontSmoothing: 'grayscale',
                  willChange: 'contents'
                }}
              >
                HOLOGRAM
              </span>
            </Link>
            <p 
              className="text-base sm:text-lg leading-relaxed text-muted-foreground/90 max-w-md"
              style={{ 
                textRendering: 'optimizeLegibility', 
                WebkitFontSmoothing: 'antialiased', 
                MozOsxFontSmoothing: 'grayscale',
                letterSpacing: '-0.005em'
              }}
            >
              Accelerate your AI, scientific and application workloads with geometric virtual compute.
              <br />
              Unbound by hardware.
            </p>
          </div>

          {/* Links sections */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:col-span-2 lg:gap-12">
            {footerData.sections.map((section: FooterSection) => (
              <div key={section.title}>
                <h3 
                  className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground mb-6 antialiased"
                  style={{ 
                    textRendering: 'optimizeLegibility', 
                    WebkitFontSmoothing: 'antialiased', 
                    MozOsxFontSmoothing: 'grayscale',
                    fontWeight: 600,
                    letterSpacing: '0.15em'
                  }}
                >
                  {section.title}
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  {section.links.map((link: FooterLink) => (
                    <li key={link.href}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm sm:text-base font-medium text-muted-foreground/90 hover:text-foreground transition-colors duration-200 antialiased touch-manipulation min-h-[44px] flex items-center"
                          style={{ 
                            textRendering: 'optimizeLegibility', 
                            WebkitFontSmoothing: 'antialiased', 
                            MozOsxFontSmoothing: 'grayscale',
                            fontWeight: 500,
                            letterSpacing: '-0.01em'
                          }}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm sm:text-base font-medium text-muted-foreground/90 hover:text-foreground transition-colors duration-200 antialiased touch-manipulation min-h-[44px] flex items-center"
                          style={{ 
                            textRendering: 'optimizeLegibility', 
                            WebkitFontSmoothing: 'antialiased', 
                            MozOsxFontSmoothing: 'grayscale',
                            fontWeight: 500,
                            letterSpacing: '-0.01em'
                          }}
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Social links and copyright */}
        <div className="mt-4 pt-4 border-t border-border/30">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {footerData.social && footerData.social.length > 0 && (
              <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8">
                {footerData.social.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm sm:text-base font-medium text-muted-foreground/90 hover:text-foreground transition-colors duration-200 antialiased touch-manipulation min-h-[44px] flex items-center"
                    style={{ 
                      textRendering: 'optimizeLegibility', 
                      WebkitFontSmoothing: 'antialiased', 
                      MozOsxFontSmoothing: 'grayscale',
                      fontWeight: 500,
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
            <p 
              className={`text-sm leading-tight text-muted-foreground/90 antialiased ${footerData.social && footerData.social.length > 0 ? 'text-center sm:text-left' : 'text-center w-full'}`}
              style={{ 
                textRendering: 'optimizeLegibility', 
                WebkitFontSmoothing: 'antialiased', 
                MozOsxFontSmoothing: 'grayscale',
                fontWeight: 400,
                letterSpacing: '-0.005em'
              }}
            >
              © {new Date().getFullYear()} Hologram Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
