"use client";

/**
 * PRICING SECTION - Complete Overhaul
 * NEW STRUCTURE:
 * - Section 1: Individual Products ($30 each) - Competitor Report + Lead Gen List
 * - Section 2: Bundles (Save Money) - Intelligence Package ($50) + Premium Suite ($100)
 * 
 * Features: Smooth animations, hover effects, save badges, modern card design
 */

import { Check, Star, Sparkles, TrendingUp, Users } from "lucide-react";

interface PricingProps {
  onCTAClick: () => void;
}

export default function Pricing({ onCTAClick }: PricingProps) {
  const individualProducts = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      name: "Competitor Intelligence Report",
      price: "$30",
      description: "Complete analysis of your competitive landscape",
      features: [
        "Full 9-section competitor analysis",
        "Strategic summary with biggest threats",
        "Market sizing (TAM/SAM/SOM) with charts",
        "Competitive landscape breakdown",
        "Digital footprint matrix (SEO, traffic)",
        "Detailed competitor profiles (3-6 companies)",
        "Pricing strategy comparison",
        "5 actionable moves you can execute this week",
        "Interactive HTML report with Chart.js visualizations",
        "Delivered in <10 minutes",
      ],
      cta: "Order Competitor Report",
      badge: null,
    },
    {
      icon: <Users className="w-6 h-6" />,
      name: "Lead Generation List",
      price: "$30",
      description: "30+ verified leads ready to contact",
      features: [
        "31+ verified companies in your target industry",
        "Hot/Warm/Cold fit scoring",
        "Company details (size, niche, location)",
        "Trigger events for personalized outreach",
        "Decision-maker role identification",
        "2 ready-to-use outreach email templates",
        "Featured top 5 hot leads with full details",
        "Sortable lead table (CRM-ready)",
        "Interactive HTML report + CSV export",
        "Delivered in <10 minutes",
      ],
      cta: "Order Lead Gen List",
      badge: null,
    },
  ];

  const bundles = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      name: "Intelligence Package",
      price: "$50",
      originalPrice: "$60",
      savings: "SAVE $10",
      description: "Get both reports for complete market intelligence",
      features: [
        "Competitor Intelligence Report (normally $30)",
        "Lead Generation List (normally $30)",
        "Same industry/market analysis",
        "Complete market intelligence bundle",
        "Both delivered together in <15 minutes",
      ],
      cta: "Get Intelligence Package",
      badge: "Best Value",
      popular: true,
    },
    {
      icon: <Star className="w-6 h-6 fill-current" />,
      name: "Premium Intelligence Suite",
      price: "$100",
      originalPrice: null,
      savings: "BEST VALUE",
      description: "Complete market domination package",
      features: [
        "2x Competitor Intelligence Reports (any 2 competitors)",
        "1x Lead Generation List (your industry)",
        "Priority delivery (<10 min)",
        "Email support for questions",
        "1 free minor revision per report",
        "Perfect for entering new markets",
      ],
      cta: "Get Premium Suite",
      badge: "Most Popular",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-secondary-offwhite">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]">
            <h2 className="text-primary-navy mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-primary-navy/70 max-w-2xl mx-auto">
              No hidden fees. No subscriptions. Pay per report. Choose what you need.
            </p>
          </div>

          {/* SECTION 1: Individual Products */}
          <div className="mb-20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-heading font-bold text-primary-navy mb-2">
                Individual Products
              </h3>
              <p className="text-primary-navy/60">$30 each - Order separately or bundle and save</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {individualProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border-2 border-primary-navy/10 hover:border-accent-purple/40 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 opacity-0 animate-[slideUp_0.6s_ease-out_forwards]"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 bg-accent-purple/10 rounded-lg flex items-center justify-center text-accent-purple mb-4">
                    {product.icon}
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-heading font-bold text-primary-navy mb-2">
                    {product.name}
                  </h3>
                  <p className="text-primary-navy/60 text-sm mb-4">
                    {product.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-heading font-bold text-primary-navy">
                        {product.price}
                      </span>
                      <span className="text-primary-navy/60 font-body text-sm">
                        / report
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-success-green flex-shrink-0 mt-0.5" />
                        <span className="text-primary-navy/80 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={onCTAClick}
                    className="w-full py-3 px-6 rounded-lg font-heading font-semibold bg-primary-navy text-white hover:bg-primary-navy/90 transition-all duration-300 hover:scale-105"
                  >
                    {product.cta} - $30
                  </button>

                  <p className="text-primary-navy/50 text-xs text-center mt-3">
                    Delivered in minutes. No subscription.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 2: Bundles (Save Money) */}
          <div className="relative">
            {/* Separator */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-primary-navy/10"></div>
              <div className="px-4 py-2 bg-accent-purple/10 rounded-full">
                <p className="text-accent-purple font-heading font-semibold text-sm">
                  💰 Bundle & Save
                </p>
              </div>
              <div className="flex-1 h-px bg-primary-navy/10"></div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-heading font-bold text-primary-navy mb-2">
                Bundles
              </h3>
              <p className="text-primary-navy/60">Get more intelligence, save money</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {bundles.map((bundle, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 transform hover:-translate-y-1 opacity-0 animate-[slideUp_0.6s_ease-out_forwards] ${
                    bundle.popular
                      ? 'border-accent-purple shadow-xl scale-105'
                      : 'border-primary-navy/10 hover:border-accent-purple/40 hover:shadow-xl'
                  }`}
                  style={{ animationDelay: `${0.4 + index * 0.2}s` }}
                >
                  {/* Badge */}
                  {bundle.badge && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className={`px-4 py-1 rounded-full flex items-center gap-2 ${
                        bundle.popular
                          ? 'bg-accent-purple text-white'
                          : 'bg-success-green text-white'
                      }`}>
                        {bundle.popular && <Star className="w-4 h-4 fill-current" />}
                        <span className="font-heading font-semibold text-sm">{bundle.badge}</span>
                      </div>
                    </div>
                  )}

                  {/* Savings Badge */}
                  <div className="inline-block px-3 py-1 bg-success-green/10 text-success-green rounded-full text-xs font-heading font-bold mb-4">
                    {bundle.savings}
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    bundle.popular
                      ? 'bg-accent-purple/10 text-accent-purple'
                      : 'bg-primary-navy/10 text-primary-navy'
                  }`}>
                    {bundle.icon}
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-heading font-bold text-primary-navy mb-2">
                    {bundle.name}
                  </h3>
                  <p className="text-primary-navy/60 text-sm mb-4">
                    {bundle.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      {bundle.originalPrice && (
                        <span className="text-xl font-heading text-primary-navy/40 line-through">
                          {bundle.originalPrice}
                        </span>
                      )}
                      <span className="text-4xl font-heading font-bold text-primary-navy">
                        {bundle.price}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {bundle.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          bundle.popular ? 'text-accent-purple' : 'text-success-green'
                        }`} />
                        <span className="text-primary-navy/80 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={onCTAClick}
                    className={`w-full py-3 px-6 rounded-lg font-heading font-semibold transition-all duration-300 hover:scale-105 ${
                      bundle.popular
                        ? 'bg-accent-purple text-white hover:bg-accent-purple/90'
                        : 'bg-primary-navy text-white hover:bg-primary-navy/90'
                    }`}
                  >
                    {bundle.cta}
                  </button>

                  <p className="text-primary-navy/50 text-xs text-center mt-3">
                    Best value for comprehensive intelligence
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Reassurance - Updated */}
          <div className="mt-12 text-center opacity-0 animate-[fadeIn_0.8s_ease-out_1s_forwards]">
            <p className="text-primary-navy/60 font-body">
              <strong className="font-semibold text-primary-navy">No subscription.</strong> Pay per report. Get exactly what you need, when you need it.
            </p>
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

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
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
