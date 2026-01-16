"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface TypeformModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TypeformModal({ open, onOpenChange }: TypeformModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      // Scroll to top to ensure modal is visible
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    // Load Typeform embed script if not already loaded
    const existingScript = document.querySelector('script[src*="embed.typeform.com"]');
    
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "//embed.typeform.com/next/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [open]);

  if (!open || !mounted) return null;

  const modalContent = (
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999,
        overflow: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={() => onOpenChange(false)}
    >
      <div 
        className="relative bg-white rounded-lg overflow-hidden flex flex-col shadow-2xl"
        style={{
          width: '100%',
          maxWidth: '800px',
          height: '90vh',
          maxHeight: '90vh',
          minHeight: '600px',
          margin: 'auto',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 z-[100] p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Close"
          style={{ zIndex: 1000 }}
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>
        <div 
          className="w-full h-full flex-1"
          style={{ minHeight: '600px' }}
        >
          <div
            data-tf-live="01KECGAFMMYT36N37SYRV0PE4P"
            className="w-full h-full"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
