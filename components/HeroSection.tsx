"use client";

/**
 * HERO SECTION - Updated with correct statistics and animations
 * Changed: "10M+ Data Points" → "150+ Data Sources Analyzed"
 * Added: Smooth fade-in animations, hover effects, professional polish
 */

interface HeroSectionProps {
  onCTAClick: () => void;
}

export default function HeroSection({ onCTAClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Geometric grid overlay */}
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
        {/* Top Row */}
        <div className="flex justify-between items-center mb-20 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]">
          <div className="text-white">
            <h2 className="text-2xl font-heading font-bold tracking-tight hover:text-accent-purple transition-colors duration-300">
              SG AUTOMATIONS
            </h2>
          </div>
          <a 
            href="#pricing" 
            className="hidden md:block text-white font-heading font-semibold hover:text-accent-purple transition-all duration-300 hover:translate-x-1"
          >
            View Pricing →
          </a>
        </div>

        {/* Center Content */}
        <div className="max-w-4xl mx-auto text-center pt-12 md:pt-20 pb-16">
          <div className="inline-block bg-accent-purple/10 border border-accent-purple/30 rounded-full px-6 py-2 mb-8 opacity-0 animate-[slideDown_0.6s_ease-out_0.2s_forwards] hover:bg-accent-purple/20 transition-all duration-300 hover:scale-105">
            <p className="text-accent-purple font-heading font-semibold text-sm">
              ⚡ Reports delivered in under 10 minutes
            </p>
          </div>

          <h1 className="text-white mb-6 leading-tight opacity-0 animate-[fadeIn_0.8s_ease-out_0.4s_forwards]">
            Stop Making Business Decisions
            <br />
            <span className="text-accent-purple">Based on Stale Data</span>
          </h1>

          <p className="text-white/90 text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]">
            AI-powered competitor intelligence and lead generation reports. 
            <span className="font-semibold text-white"> Delivered to your inbox in minutes, not weeks.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-[fadeIn_0.8s_ease-out_0.8s_forwards]">
            <button
              onClick={onCTAClick}
              className="btn-primary text-lg group transform hover:scale-105 transition-all duration-300"
            >
              Get My Competitor Report
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
            
            <button
              onClick={onCTAClick}
              className="btn-secondary text-lg transform hover:scale-105 transition-all duration-300"
            >
              See Sample Report
            </button>
          </div>

          <p className="text-white/70 text-sm mt-4 font-body opacity-0 animate-[fadeIn_0.8s_ease-out_1s_forwards]">
            Delivered in minutes. No account needed.
          </p>
        </div>

        {/* Bottom Row - UPDATED STATISTICS */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/10 opacity-0 animate-[fadeIn_0.8s_ease-out_1.2s_forwards]">
          <div className="text-white/80 font-body">
            <div className="flex items-center gap-6">
              <div className="group cursor-default">
                <p className="text-2xl font-heading font-bold text-white group-hover:text-accent-purple transition-colors duration-300">47+</p>
                <p className="text-sm">Reports Delivered</p>
              </div>
              <div className="h-12 w-px bg-white/20"></div>
              <div className="group cursor-default">
                <p className="text-2xl font-heading font-bold text-white group-hover:text-accent-purple transition-colors duration-300">&lt;10min</p>
                <p className="text-sm">Average Delivery</p>
              </div>
              <div className="h-12 w-px bg-white/20"></div>
              {/* UPDATED: Changed from "10M+ Data Points" to "150+ Data Sources" */}
              <div className="group cursor-default">
                <p className="text-2xl font-heading font-bold text-white group-hover:text-accent-purple transition-colors duration-300">150+</p>
                <p className="text-sm">Data Sources Analyzed</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <button
              onClick={onCTAClick}
              className="text-accent-purple font-heading font-semibold hover:text-white transition-all duration-300 flex items-center gap-2 hover:translate-x-1"
            >
              Start from $30
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
