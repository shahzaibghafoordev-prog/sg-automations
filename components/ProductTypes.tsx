"use client";

/**
 * PRODUCT TYPES SECTION - NEW!
 * Explains the two types of intelligence:
 * 1. Competitor Intelligence Report
 * 2. Lead Generation List
 * 
 * Features: Side-by-side comparison, use cases, sample previews, smooth animations
 */

import { TrendingUp, Users, CheckCircle2, ArrowRight } from "lucide-react";

interface ProductTypesProps {
  onCTAClick: () => void;
}

export default function ProductTypes({ onCTAClick }: ProductTypesProps) {
  const products = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Competitor Intelligence Report",
      tagline: "Know exactly who's threatening your market share",
      description: "Stop guessing about your competitors. Get complete analysis of their pricing strategy, digital presence, SEO strength, and traffic sources. Delivered with interactive charts showing market sizing and competitive positioning.",
      perfectFor: [
        "Understanding your competitive landscape",
        "Making pricing decisions",
        "Planning market positioning",
        "Strategic planning sessions",
        "Investor presentations",
      ],
      whatYouGet: [
        "9-section comprehensive analysis",
        "2 interactive Chart.js visualizations",
        "Market sizing breakdown (TAM/SAM/SOM)",
        "3-6 competitor deep-dives",
        "Expandable competitor cards",
        "5 immediate action items",
      ],
      sampleData: {
        title: "Sample: Notion Analysis",
        stats: [
          { label: "Competitors Analyzed", value: "4" },
          { label: "Market Size (TAM)", value: "$102B" },
          { label: "Threat Level Insights", value: "3" },
        ],
      },
      ctaText: "See Sample Competitor Report",
      color: "accent-purple",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Lead Generation List",
      tagline: "Fill your pipeline with ready-to-contact leads",
      description: "Get 30+ verified companies in your target industry, scored by fit, with trigger events that tell you exactly when and why to reach out. Includes ready-to-use email templates.",
      perfectFor: [
        "Sales prospecting",
        "Outbound campaigns",
        "Market expansion",
        "Finding new customers",
        "Building target account lists",
      ],
      whatYouGet: [
        "31+ verified companies",
        "Hot/Warm/Cold fit scoring",
        "Trigger events for each lead",
        "Company details (size, niche, location)",
        "2 outreach email templates",
        "CRM-ready CSV export",
      ],
      sampleData: {
        title: "Sample: Marketing Agencies",
        stats: [
          { label: "Total Leads", value: "31" },
          { label: "Hot Leads", value: "8" },
          { label: "Email Templates", value: "2" },
        ],
      },
      ctaText: "See Sample Lead Gen Report",
      color: "success-green",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary-offwhite">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]">
            <h2 className="text-primary-navy mb-4">
              Two Types of Intelligence
            </h2>
            <p className="text-xl text-primary-navy/70 max-w-2xl mx-auto">
              Choose the insight your business needs right now. Or get both.
            </p>
          </div>

          {/* Product Cards - Side by Side */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border-2 border-primary-navy/10 hover:border-accent-purple/40 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 opacity-0 animate-[slideUp_0.6s_ease-out_forwards]"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Header with Icon */}
                <div className={`bg-gradient-to-br from-${product.color}/10 to-${product.color}/5 p-8 border-b border-primary-navy/10`}>
                  <div className={`w-16 h-16 bg-${product.color}/20 rounded-xl flex items-center justify-center text-${product.color} mb-4`}>
                    {product.icon}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-primary-navy mb-2">
                    {product.title}
                  </h3>
                  <p className="text-lg font-heading font-semibold text-primary-navy/70">
                    {product.tagline}
                  </p>
                </div>

                {/* Body */}
                <div className="p-8">
                  {/* Description */}
                  <p className="text-primary-navy/80 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Perfect For */}
                  <div className="mb-6">
                    <h4 className="font-heading font-bold text-primary-navy mb-3 flex items-center gap-2">
                      <span className={`w-2 h-2 bg-${product.color} rounded-full`}></span>
                      Perfect for:
                    </h4>
                    <ul className="space-y-2">
                      {product.perfectFor.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-primary-navy/70">
                          <CheckCircle2 className={`w-4 h-4 text-${product.color} flex-shrink-0 mt-0.5`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What You Get */}
                  <div className="mb-6">
                    <h4 className="font-heading font-bold text-primary-navy mb-3">
                      What You Get:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.whatYouGet.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-primary-navy/70">
                          <span className={`text-${product.color} mt-0.5`}>▸</span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sample Data Preview */}
                  <div className={`bg-${product.color}/5 rounded-lg p-4 mb-6`}>
                    <p className="text-xs font-heading font-semibold text-primary-navy/60 uppercase mb-3">
                      {product.sampleData.title}
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {product.sampleData.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <p className={`text-xl font-heading font-bold text-${product.color}`}>
                            {stat.value}
                          </p>
                          <p className="text-xs text-primary-navy/60 mt-1">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={onCTAClick}
                    className={`w-full py-3 px-6 rounded-lg font-heading font-semibold bg-${product.color} text-white hover:opacity-90 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group`}
                  >
                    {product.ctaText}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="text-center opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]">
            <div className="inline-block bg-white rounded-xl p-6 border-2 border-primary-navy/10 max-w-2xl">
              <p className="text-primary-navy/80 leading-relaxed mb-2">
                <strong className="text-primary-navy">Both delivered as interactive HTML reports in under 10 minutes.</strong>
              </p>
              <p className="text-sm text-primary-navy/60">
                Order separately for $30 each, or save with bundles below ↓
              </p>
            </div>
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
            transform: translateY(30px);
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
