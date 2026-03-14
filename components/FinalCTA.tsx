"use client";

/**
 * SECTION 02 - Point 08: FINAL CTA + OBJECTIONS
 * SECTION 07: CTA Psychology + Micro-Commitment Order Flow
 * 
 * Repeat CTA with different framing
 * Address last objections
 * Different copy from hero CTA
 */

import { ArrowRight, CheckCircle2 } from "lucide-react";

interface FinalCTAProps {
  onCTAClick: () => void;
}

export default function FinalCTA({ onCTAClick }: FinalCTAProps) {
  return (
    <section className="py-20 md:py-32 bg-primary-navy relative overflow-hidden">
      {/* Background Grid (same as hero) */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-footer" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-footer)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* SECTION 07: Different framing from hero CTA */}
          <h2 className="text-white mb-6">
            Ready to Stop Flying Blind?
          </h2>

          <p className="text-white/90 text-xl mb-8 leading-relaxed">
            Get your first competitive intelligence report in the next 10 minutes. 
            No guesswork. No delays. Just actionable data.
          </p>

          {/* SECTION 07: Different CTA copy - "Start Now - From $30" or "Get My First Report" */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={onCTAClick}
              className="btn-primary text-lg group"
            >
              Get My First Report
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>

          {/* SECTION 07: Sub-CTA Reassurance with pointer to demo */}
          <p className="text-white/70 mb-12">
            Not sure? <a href="#interactive-demo" className="text-accent-purple hover:underline font-semibold">See a real sample above ↑</a>
          </p>

          {/* SECTION 08: Address Final Objections */}
          <div className="border-t border-white/10 pt-12">
            <h3 className="text-2xl font-heading font-bold text-white mb-8">
              Common Questions
            </h3>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-6 h-6 rounded-full bg-success-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-success-green" />
                  </div>
                  <h4 className="font-heading font-semibold text-white">
                    No subscription needed
                  </h4>
                </div>
                <p className="text-white/70 text-sm leading-relaxed pl-9">
                  Pay per report. Get exactly what you need. No recurring charges. No surprises.
                </p>
              </div>

              <div>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-6 h-6 rounded-full bg-success-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-success-green" />
                  </div>
                  <h4 className="font-heading font-semibold text-white">
                    Delivered in minutes, not days
                  </h4>
                </div>
                <p className="text-white/70 text-sm leading-relaxed pl-9">
                  Automated AI pipeline means instant processing. Submit your request, report arrives in under 10 minutes on average.
                </p>
              </div>

              <div>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-6 h-6 rounded-full bg-success-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-success-green" />
                  </div>
                  <h4 className="font-heading font-semibold text-white">
                    No sales calls. No waiting.
                  </h4>
                </div>
                <p className="text-white/70 text-sm leading-relaxed pl-9">
                  Self-service all the way. Submit → Report arrives → Done. No back-and-forth. No demos. No meetings.
                </p>
              </div>
            </div>
          </div>

          {/* Psychology: Final reassurance */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-white/60 text-sm">
              Start from $30. Same infrastructure that processes 10M+ daily requests. Delivered to your inbox in minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
