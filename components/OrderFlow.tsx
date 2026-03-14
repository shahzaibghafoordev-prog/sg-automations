"use client";

/**
 * SECTION 07: CTA Psychology + Micro-Commitment Order Flow
 * 
 * Micro-Commitment Order Flow: +14% conversion vs single-step
 * 
 * Step 1: Select report type → Low-stakes choice, feels like customization
 * Step 2: Enter company name + industry → Investment of information
 * Step 3: Enter email address → Small commitment, system knows them now
 * Step 4: Payment → 3 prior commitments made, stopping = loss, not caution
 */

import { useState } from "react";
import { X, ChevronRight, ChevronLeft, Check } from "lucide-react";

interface OrderFlowProps {
  onClose: () => void;
}

export default function OrderFlow({ onClose }: OrderFlowProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    reportType: "",
    companyName: "",
    industry: "",
    email: "",
    tier: "professional", // Default to $65 tier (most popular)
  });

  const totalSteps = 4;

  // SECTION 06: Pricing tiers for step 4
  const pricingTiers = [
    { id: "starter", name: "Starter", price: 30, description: "Quick competitive check" },
    { id: "professional", name: "Professional", price: 65, description: "Best value - Most Popular" },
    { id: "intelligence", name: "Intelligence", price: 100, description: "Complete analysis" },
  ];

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.reportType !== "";
      case 2:
        return formData.companyName !== "" && formData.industry !== "";
      case 3:
        return formData.email !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
      case 4:
        return formData.tier !== "";
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (canProceed() && step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    // User doesn't have Stripe, so just show confirmation
    alert(`Order submitted!\n\nReport Type: ${formData.reportType}\nCompany: ${formData.companyName}\nIndustry: ${formData.industry}\nEmail: ${formData.email}\nTier: ${formData.tier}\n\nIn production, this would process payment and generate report.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-primary-navy/10 p-6 flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-2xl font-heading font-bold text-primary-navy">
              Get Your Report
            </h3>
            <p className="text-primary-navy/60 text-sm mt-1">
              Step {step} of {totalSteps}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-primary-navy/60 hover:text-primary-navy transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 pt-4">
          <div className="w-full h-2 bg-secondary-offwhite rounded-full overflow-hidden">
            <div
              className="h-full bg-accent-purple transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* STEP 1: Report Type Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-heading font-bold text-primary-navy mb-2">
                  What type of report do you need?
                </h4>
                <p className="text-primary-navy/60">
                  Choose the intelligence that matters most to you right now.
                </p>
              </div>

              <div className="grid gap-4">
                <button
                  onClick={() => setFormData({ ...formData, reportType: "competitor" })}
                  className={`
                    p-6 rounded-xl border-2 text-left transition-all
                    ${formData.reportType === "competitor"
                      ? "border-accent-purple bg-accent-purple/5"
                      : "border-primary-navy/10 hover:border-accent-purple/30"
                    }
                  `}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h5 className="font-heading font-bold text-primary-navy mb-2">
                        🎯 Competitor Analysis
                      </h5>
                      <p className="text-primary-navy/70 text-sm">
                        Deep dive into a specific competitor. Pricing, positioning, digital presence, and strategic insights.
                      </p>
                    </div>
                    {formData.reportType === "competitor" && (
                      <div className="flex-shrink-0 ml-4">
                        <div className="w-6 h-6 rounded-full bg-accent-purple flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                </button>

                <button
                  onClick={() => setFormData({ ...formData, reportType: "lead-gen" })}
                  className={`
                    p-6 rounded-xl border-2 text-left transition-all
                    ${formData.reportType === "lead-gen"
                      ? "border-accent-purple bg-accent-purple/5"
                      : "border-primary-navy/10 hover:border-accent-purple/30"
                    }
                  `}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h5 className="font-heading font-bold text-primary-navy mb-2">
                        📊 Lead Generation Intelligence
                      </h5>
                      <p className="text-primary-navy/70 text-sm">
                        Identify potential customers. Company profiles, decision-makers, tech stack, and contact opportunities.
                      </p>
                    </div>
                    {formData.reportType === "lead-gen" && (
                      <div className="flex-shrink-0 ml-4">
                        <div className="w-6 h-6 rounded-full bg-accent-purple flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Company Details */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-heading font-bold text-primary-navy mb-2">
                  What company are you analyzing?
                </h4>
                <p className="text-primary-navy/60">
                  Tell us who you want intelligence on.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-heading font-semibold text-primary-navy mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g., TechCorp Industries"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-heading font-semibold text-primary-navy mb-2">
                    Industry
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="input-field"
                  >
                    <option value="">Select industry...</option>
                    <option value="saas">B2B SaaS</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="fintech">FinTech</option>
                    <option value="healthcare">Healthcare Tech</option>
                    <option value="consulting">Consulting</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Email */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-heading font-bold text-primary-navy mb-2">
                  Where should we send your report?
                </h4>
                <p className="text-primary-navy/60">
                  Your report will be delivered to this email in under 10 minutes.
                </p>
              </div>

              <div>
                <label className="block text-sm font-heading font-semibold text-primary-navy mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@company.com"
                  className="input-field"
                />
                <p className="text-primary-navy/50 text-xs mt-2">
                  We'll only use this to deliver your report. No spam. No marketing emails.
                </p>
              </div>

              {/* Show summary of what they've entered */}
              <div className="bg-secondary-offwhite p-4 rounded-lg">
                <p className="text-sm font-heading font-semibold text-primary-navy mb-2">
                  Report Summary:
                </p>
                <ul className="space-y-1 text-sm text-primary-navy/70">
                  <li>• Type: {formData.reportType === "competitor" ? "Competitor Analysis" : "Lead Generation"}</li>
                  <li>• Company: {formData.companyName}</li>
                  <li>• Industry: {formData.industry}</li>
                </ul>
              </div>
            </div>
          )}

          {/* STEP 4: Payment/Tier Selection */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-heading font-bold text-primary-navy mb-2">
                  Choose your report depth
                </h4>
                <p className="text-primary-navy/60">
                  Select the level of detail you need.
                </p>
              </div>

              <div className="space-y-3">
                {pricingTiers.map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setFormData({ ...formData, tier: tier.id })}
                    className={`
                      w-full p-4 rounded-xl border-2 text-left transition-all
                      ${formData.tier === tier.id
                        ? "border-accent-purple bg-accent-purple/5"
                        : "border-primary-navy/10 hover:border-accent-purple/30"
                      }
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h5 className="font-heading font-bold text-primary-navy">
                            {tier.name}
                          </h5>
                          {tier.id === "professional" && (
                            <span className="text-xs bg-accent-purple text-white px-2 py-0.5 rounded-full font-heading font-semibold">
                              Most Popular
                            </span>
                          )}
                        </div>
                        <p className="text-primary-navy/70 text-sm">
                          {tier.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-heading font-bold text-primary-navy">
                          ${tier.price}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Note about payment */}
              <div className="bg-warning-amber/10 border border-warning-amber/30 rounded-lg p-4">
                <p className="text-sm text-primary-navy/80">
                  <strong className="font-semibold text-primary-navy">Note:</strong> Payment integration not available in Pakistan. This is a demo of the order flow. In production, this would connect to a payment processor.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer - Navigation */}
        <div className="sticky bottom-0 bg-white border-t border-primary-navy/10 p-6 flex items-center justify-between">
          {step > 1 ? (
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-primary-navy/60 hover:text-primary-navy font-heading font-semibold transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </button>
          ) : (
            <div></div>
          )}

          {step < totalSteps ? (
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className={`
                flex items-center gap-2 font-heading font-semibold px-6 py-3 rounded-lg transition-all
                ${canProceed()
                  ? "bg-accent-purple text-white hover:bg-accent-purple/90"
                  : "bg-primary-navy/10 text-primary-navy/40 cursor-not-allowed"
                }
              `}
            >
              Continue
              <ChevronRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!canProceed()}
              className={`
                flex items-center gap-2 font-heading font-semibold px-6 py-3 rounded-lg transition-all
                ${canProceed()
                  ? "bg-accent-purple text-white hover:bg-accent-purple/90"
                  : "bg-primary-navy/10 text-primary-navy/40 cursor-not-allowed"
                }
              `}
            >
              Complete Order
              <Check className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
