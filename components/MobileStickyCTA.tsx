"use client";

/**
 * SECTION 02 - Point 08: FINAL CTA + OBJECTIONS
 * SECTION 12: Sticky bottom CTA on mobile at all times
 * 
 * Always visible at bottom of screen on mobile
 * Smooth slide-up animation
 */

import { ArrowRight } from "lucide-react";

interface MobileStickyCTAProps {
  onClick: () => void;
}

export default function MobileStickyCTA({ onClick }: MobileStickyCTAProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-primary-navy via-primary-navy to-transparent">
      <button
        onClick={onClick}
        className="w-full bg-accent-purple text-white font-heading font-semibold py-4 px-6 rounded-lg shadow-2xl flex items-center justify-center gap-2 hover:bg-accent-purple/90 transition-all active:scale-95"
      >
        <span>Get Started - From $30</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}
