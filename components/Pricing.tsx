"use client";

/**
 * SECTION 02 - Point 06: PRICING - FULLY VISIBLE
 * SECTION 06: Pricing Page Psychology - The Exact Mechanics
 * 
 * CRITICAL: Show all 3 tiers immediately. Never gate.
 * At $30-100, hiding price drops conversion to 2%.
 * 
 * Price Anchoring: Show $100 FIRST (leftmost) → brain anchors high
 * Decoy Effect: Strip $30 tier features → $65 looks like best value
 * Semantic Sizing: "Starter/Professional/Intelligence" (not Basic/Premium)
 * Mobile: Swipeable cards (NOT 3-column table)
 */

import { Check, Star } from "lucide-react";

interface PricingProps {
  onCTAClick: () => void;
}

export default function Pricing({ onCTAClick }: PricingProps) {
  const tiers = [
    // SECTION 06: Show $100 tier FIRST for price anchoring
    {
      name: "Intelligence",
      price: "$100",
      description: "Complete competitive intelligence",
      features: [
        "Full competitor analysis report",
        "Pricing strategy breakdown",
        "Digital presence analysis",
        "Traffic source breakdown",
        "Actionable insights & recommendations",
        "Historical trend data (6 months)",
        "Executive summary PDF export",
        "Priority delivery (5 min avg)",
      ],
      cta: "Get This Report",
      reassurance: "No calls. No waiting.",
      popular: false,
    },
    // SECTION 06: $65 tier with "Most Popular" badge
    {
      name: "Professional",
      price: "$65",
      description: "Best value for growing businesses",
      features: [
        "Full competitor analysis report",
        "Pricing strategy breakdown",
        "Digital presence analysis",
        "Traffic source breakdown",
        "Actionable insights & recommendations",
        "Key metrics comparison",
        // DECOY EFFECT: Missing features that $100 has
        // This creates massive value gap at close price point
      ],
      cta: "Order Intelligence Report",
      reassurance: "Delivered to your inbox in minutes. No calls.",
      popular: true, // Most Popular badge
    },
    // SECTION 06: $30 tier - Decoy (stripped down)
    {
      name: "Starter",
      price: "$30",
      description: "Perfect for quick competitive checks",
      features: [
        "Basic competitor overview",
        "Pricing data snapshot",
        "Digital presence summary",
        "Top 3 insights",
        // DECOY EFFECT: Missing many features from $65
        // Close price but massive value gap → nudges to $65
      ],
      cta: "Start With Starter Report",
      reassurance: "Fraction of the consultant price.",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-secondary-offwhite">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-primary-navy mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-primary-navy/70 max-w-2xl mx-auto">
              No hidden fees. No subscriptions. Pay per report. Choose the depth you need.
            </p>
          </div>

          {/* DESKTOP: 3-Column Grid (Price Anchoring: $100 → $65 → $30) */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`
                  relative bg-white rounded-2xl p-8 border-2 transition-all
                  ${tier.popular 
                    ? 'border-accent-purple shadow-xl scale-105' 
                    : 'border-primary-navy/10 hover:border-accent-purple/30 hover:shadow-lg'
                  }
                `}
              >
                {/* SECTION 06: "Most Popular" badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent-purple text-white px-4 py-1 rounded-full flex items-center gap-2">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-heading font-semibold text-sm">Most Popular</span>
                    </div>
                  </div>
                )}

                {/* Tier Name - SECTION 06: Semantic Sizing */}
                <div className="mb-6">
                  <h3 className="text-2xl font-heading font-bold text-primary-navy mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-primary-navy/60 text-sm">
                    {tier.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-heading font-bold text-primary-navy">
                      {tier.price}
                    </span>
                    <span className="text-primary-navy/60 font-body text-sm">
                      / report
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <Check className={`w-5 h-5 ${tier.popular ? 'text-accent-purple' : 'text-success-green'}`} />
                      </div>
                      <span className="text-primary-navy/80 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button - SECTION 07: +202% conversion from personalized copy */}
                <button
                  onClick={onCTAClick}
                  className={`
                    w-full py-4 px-6 rounded-lg font-heading font-semibold transition-all
                    ${tier.popular
                      ? 'bg-accent-purple text-white hover:bg-accent-purple/90 hover:scale-105'
                      : 'bg-primary-navy text-white hover:bg-primary-navy/90'
                    }
                  `}
                >
                  {tier.cta}
                </button>

                {/* SECTION 07: Sub-CTA Reassurance */}
                <p className="text-primary-navy/50 text-xs text-center mt-3 font-body">
                  {tier.reassurance}
                </p>
              </div>
            ))}
          </div>

          {/* MOBILE: Swipeable Cards (NOT 3-column table) */}
          {/* SECTION 06: Default view = $65 tier, preserves anchoring mechanics */}
          <div className="md:hidden overflow-x-auto pb-8 -mx-6 px-6">
            <div className="flex gap-6 snap-x snap-mandatory">
              {/* Reorder for mobile: Start with $65 (most popular) for default view */}
              {[tiers[1], tiers[0], tiers[2]].map((tier, index) => (
                <div
                  key={index}
                  className={`
                    flex-shrink-0 w-80 snap-center bg-white rounded-2xl p-6 border-2
                    ${tier.popular 
                      ? 'border-accent-purple shadow-xl' 
                      : 'border-primary-navy/10'
                    }
                  `}
                >
                  {tier.popular && (
                    <div className="bg-accent-purple text-white px-4 py-1 rounded-full flex items-center gap-2 w-fit mb-4">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-heading font-semibold text-sm">Most Popular</span>
                    </div>
                  )}

                  <div className="mb-4">
                    <h3 className="text-xl font-heading font-bold text-primary-navy mb-1">
                      {tier.name}
                    </h3>
                    <p className="text-primary-navy/60 text-sm">
                      {tier.description}
                    </p>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-heading font-bold text-primary-navy">
                        {tier.price}
                      </span>
                      <span className="text-primary-navy/60 font-body text-sm">
                        / report
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tier.popular ? 'text-accent-purple' : 'text-success-green'}`} />
                        <span className="text-primary-navy/80 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={onCTAClick}
                    className={`
                      w-full py-3 px-6 rounded-lg font-heading font-semibold text-sm
                      ${tier.popular
                        ? 'bg-accent-purple text-white'
                        : 'bg-primary-navy text-white'
                      }
                    `}
                  >
                    {tier.cta}
                  </button>

                  <p className="text-primary-navy/50 text-xs text-center mt-2 font-body">
                    {tier.reassurance}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Reassurance */}
          <div className="mt-12 text-center">
            <p className="text-primary-navy/60 font-body">
              <strong className="font-semibold text-primary-navy">No subscription.</strong> Pay per report. Cancel anytime. Get exactly what you need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
