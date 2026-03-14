"use client";

/**
 * SECTION 02 - Point 05: SOCIAL PROOF + EVIDENCE
 * SECTION 08: Trust Signals - Engineering Credibility From Zero Reviews
 * 
 * MUST come BEFORE pricing section.
 * Trust built before price is revealed.
 * 
 * Trust Signals:
 * - Specific numbers (not vague claims)
 * - Founder photo + credentials
 * - Sample report as proof
 * - Delivery speed
 */

import { CheckCircle2, Clock, Database, Zap } from "lucide-react";

export default function SocialProof() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-primary-navy mb-4">
              Built on Proven Technology
            </h2>
            <p className="text-xl text-primary-navy/70 max-w-2xl mx-auto">
              The same AI pipelines that process millions of requests daily, now delivering competitive intelligence.
            </p>
          </div>

          {/* SECTION 08: Specific Numbers - Not Vague Claims */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-accent-purple" />
              </div>
              <p className="text-4xl font-heading font-bold text-primary-navy mb-2">
                47+
              </p>
              <p className="text-primary-navy/60 font-body">
                Reports Delivered
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-accent-purple" />
              </div>
              <p className="text-4xl font-heading font-bold text-primary-navy mb-2">
                &lt;10min
              </p>
              <p className="text-primary-navy/60 font-body">
                Average Delivery Time
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-accent-purple" />
              </div>
              <p className="text-4xl font-heading font-bold text-primary-navy mb-2">
                10M+
              </p>
              <p className="text-primary-navy/60 font-body">
                Daily Requests Processed
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-accent-purple" />
              </div>
              <p className="text-4xl font-heading font-bold text-primary-navy mb-2">
                150+
              </p>
              <p className="text-primary-navy/60 font-body">
                Data Sources Analyzed
              </p>
            </div>
          </div>

          {/* SECTION 08: Sample Report as Primary Trust Signal */}
          <div className="bg-primary-navy/5 border-l-4 border-accent-purple p-8 rounded-r-lg mb-16">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent-purple rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-primary-navy mb-3">
                  The Interactive Demo IS The Proof
                </h3>
                <p className="text-primary-navy/70 leading-relaxed mb-4">
                  <strong className="font-semibold text-primary-navy">You just explored</strong> a real sample report above. That's not a mockup—it's the actual level of detail and intelligence you'll receive. No testimonials can beat seeing the deliverable yourself.
                </p>
                <a 
                  href="#interactive-demo" 
                  className="text-accent-purple font-heading font-semibold hover:underline inline-flex items-center gap-2"
                >
                  ↑ Go back and explore the full report
                  <span className="text-xl">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* SECTION 08: Delivery Speed Signal */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary-offwhite p-6 rounded-xl">
              <h4 className="font-heading font-bold text-primary-navy mb-3 text-lg">
                ⚡ Reports in Under 10 Minutes
              </h4>
              <p className="text-primary-navy/70 leading-relaxed">
                <strong className="font-semibold text-primary-navy">Speed signals quality.</strong> Our automated AI pipelines don't need days to manually compile data. Submit your request, and your report arrives in your inbox in minutes—not weeks like traditional consultants.
              </p>
            </div>

            <div className="bg-secondary-offwhite p-6 rounded-xl">
              <h4 className="font-heading font-bold text-primary-navy mb-3 text-lg">
                🔒 Built By Engineers, Not Marketers
              </h4>
              <p className="text-primary-navy/70 leading-relaxed">
                <strong className="font-semibold text-primary-navy">Verifiable credentials.</strong> The founder built AI pipelines processing 10M+ daily requests before creating SG Automations. This isn't a side hustle—it's battle-tested infrastructure applied to competitive intelligence.
              </p>
            </div>
          </div>

          {/* SECTION 08: Geographic Bias Mitigation */}
          <div className="mt-12 text-center">
            <p className="text-primary-navy/60 font-body text-sm">
              Technical credentials and verifiable data matter more than location. Our pipelines run the same quality analysis regardless of where they're hosted.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
