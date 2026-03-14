"use client";

/**
 * SECTION 02 - Point 02: PROBLEM AGITATION
 * SECTION 03: F-Pattern Layout
 * 
 * Name the exact pain. Not generic. Specific.
 * Visitor must FEEL the cost of inaction before seeing the solution.
 * 
 * F-Pattern Rules:
 * - Left-aligned bold subheadings
 * - Bullet points with first 2-3 words bolded
 * - No paragraph longer than 3 lines
 */

import { AlertCircle, Clock, DollarSign, TrendingDown } from "lucide-react";

export default function ProblemAgitation() {
  return (
    <section className="py-20 md:py-32 bg-secondary-offwhite">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* SECTION 03: F-Pattern - Left-aligned H2 */}
          <h2 className="text-primary-navy mb-4">
            The Problem With Traditional Competitive Intelligence
          </h2>

          {/* SECTION 02: Visitor must feel the cost of inaction */}
          <p className="text-xl text-primary-navy/80 mb-12 leading-relaxed">
            While you wait weeks for manual research, your competitors are already moving.
          </p>

          {/* SECTION 03: Bullet points with first 2-3 words bolded */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-warning-amber/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-warning-amber" />
                </div>
              </div>
              <div>
                <h3 className="text-primary-navy mb-2">
                  <strong className="font-semibold">6-month delays</strong> mean stale insights
                </h3>
                <p className="text-primary-navy/70 leading-relaxed">
                  You're making pricing decisions based on intelligence that's already outdated. Markets move fast—your data shouldn't be stuck in the past.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-warning-amber/10 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-warning-amber" />
                </div>
              </div>
              <div>
                <h3 className="text-primary-navy mb-2">
                  <strong className="font-semibold">Consultant fees</strong> run $5,000-$15,000
                </h3>
                <p className="text-primary-navy/70 leading-relaxed">
                  Traditional competitive analysis is prohibitively expensive for most businesses. You need intelligence, not a mortgage payment.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-warning-amber/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-warning-amber" />
                </div>
              </div>
              <div>
                <h3 className="text-primary-navy mb-2">
                  <strong className="font-semibold">Manual research</strong> takes 40+ hours
                </h3>
                <p className="text-primary-navy/70 leading-relaxed">
                  Your team spends entire work weeks digging through data that could be automated. That's time they're not spending on strategy.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-warning-amber/10 flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-warning-amber" />
                </div>
              </div>
              <div>
                <h3 className="text-primary-navy mb-2">
                  <strong className="font-semibold">Incomplete data</strong> leaves blind spots
                </h3>
                <p className="text-primary-navy/70 leading-relaxed">
                  Manual research misses crucial signals. One missed competitor move could cost you market share you'll never recover.
                </p>
              </div>
            </div>
          </div>

          {/* Psychology: Cost of inaction */}
          <div className="mt-12 p-6 bg-primary-navy/5 border-l-4 border-accent-purple rounded-r-lg">
            <p className="text-primary-navy font-heading text-lg">
              <strong className="font-bold">Bottom line:</strong> Every day without current competitive intelligence is a day you're flying blind while your competitors see clearly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
