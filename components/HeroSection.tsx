"use client";

/**
 * SECTION 02 - Point 01: HERO SECTION
 * SECTION 03: Z-Pattern Layout
 * 
 * 3 seconds to answer: what is it, who is it for, what do I do next
 * 
 * Z-Pattern Flow:
 * [Logo - Top Left]           [Secondary CTA - Top Right]
 * 
 *          [H1 Headline + Subheadline - Center]
 *               [Primary CTA Button - Center]
 * 
 * [Social Proof - Bottom Left]  [Primary CTA - Bottom Right]
 */

interface HeroSectionProps {
  onCTAClick: () => void;
}

export default function HeroSection({ onCTAClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* SECTION 11: Geometric SVG grid overlay at 5% opacity */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Z-PATTERN: TOP ROW */}
        <div className="flex justify-between items-center mb-20">
          {/* Top-Left: Logo */}
          <div className="text-white">
            <h2 className="text-2xl font-heading font-bold tracking-tight">
              SG AUTOMATIONS
            </h2>
          </div>

          {/* Top-Right: Secondary CTA */}
          <a 
            href="#pricing" 
            className="hidden md:block text-white font-heading font-semibold hover:text-accent-purple transition-colors"
          >
            View Pricing →
          </a>
        </div>

        {/* Z-PATTERN: CENTER - Main Content */}
        <div className="max-w-4xl mx-auto text-center pt-12 md:pt-20 pb-16">
          {/* SECTION 08: One specific number visible in hero */}
          <div className="inline-block bg-accent-purple/10 border border-accent-purple/30 rounded-full px-6 py-2 mb-8">
            <p className="text-accent-purple font-heading font-semibold text-sm">
              ⚡ Reports delivered in under 10 minutes
            </p>
          </div>

          {/* H1: What is it, who is it for */}
          <h1 className="text-white mb-6 leading-tight">
            Stop Making Business Decisions
            <br />
            <span className="text-accent-purple">Based on Stale Data</span>
          </h1>

          {/* Subheadline */}
          <p className="text-white/90 text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed">
            AI-powered competitor intelligence and lead generation reports. 
            <span className="font-semibold text-white"> Delivered to your inbox in minutes, not weeks.</span>
          </p>

          {/* SECTION 07: Primary CTA - "Get My Competitor Report" or "See What Your Competitors Are Hiding" */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onCTAClick}
              className="btn-primary text-lg group"
            >
              Get My Competitor Report
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
            
            <button
              onClick={onCTAClick}
              className="btn-secondary text-lg"
            >
              See Sample Report
            </button>
          </div>

          {/* SECTION 07: Sub-CTA Reassurance */}
          <p className="text-white/70 text-sm mt-4 font-body">
            Delivered in minutes. No account needed.
          </p>
        </div>

        {/* Z-PATTERN: BOTTOM ROW */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/10">
          {/* Bottom-Left: Social Proof */}
          <div className="text-white/80 font-body">
            {/* SECTION 08: Specific numbers, not vague claims */}
            <div className="flex items-center gap-6">
              <div>
                <p className="text-2xl font-heading font-bold text-white">47+</p>
                <p className="text-sm">Reports Delivered</p>
              </div>
              <div className="h-12 w-px bg-white/20"></div>
              <div>
                <p className="text-2xl font-heading font-bold text-white">&lt;10min</p>
                <p className="text-sm">Average Delivery</p>
              </div>
              <div className="h-12 w-px bg-white/20"></div>
              <div>
                <p className="text-2xl font-heading font-bold text-white">10M+</p>
                <p className="text-sm">Data Points Analyzed</p>
              </div>
            </div>
          </div>

          {/* Bottom-Right: Micro-CTA */}
          <div className="hidden md:block">
            <button
              onClick={onCTAClick}
              className="text-accent-purple font-heading font-semibold hover:text-white transition-colors flex items-center gap-2"
            >
              Start from $30
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
