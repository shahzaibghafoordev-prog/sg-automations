"use client";

/**
 * SECTION 02 - Point 04: INTERACTIVE SAMPLE REPORT
 * **THE MOST IMPORTANT SECTION**
 * 
 * Research Finding: 86% of top-converting demos use interactive HTML
 * 
 * IKEA Effect Psychology:
 * Visitor invests cognitive labor (clicking through report)
 * → Psychological ownership forms
 * → Leaving triggers loss aversion
 * → Conversion happens
 */

import { useState } from "react";
import { BarChart3, Users, TrendingUp, DollarSign, Globe, Zap, ChevronRight } from "lucide-react";

export default function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "competitive", label: "Competitive Position", icon: TrendingUp },
    { id: "pricing", label: "Pricing Analysis", icon: DollarSign },
    { id: "digital", label: "Digital Presence", icon: Globe },
    { id: "insights", label: "Key Insights", icon: Zap },
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary-offwhite">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-primary-navy mb-4">
              See Exactly What You'll Receive
            </h2>
            <p className="text-xl text-primary-navy/70 max-w-2xl mx-auto mb-8">
              This is a real sample report. Click through the tabs to explore the actual deliverable.
            </p>
            
            {/* "Try the demo" CTA */}
            <div className="inline-block bg-accent-purple/10 border border-accent-purple/30 rounded-full px-6 py-2">
              <p className="text-accent-purple font-heading font-semibold text-sm">
                👆 Interactive Demo - Try clicking the tabs below
              </p>
            </div>
          </div>

          {/* INTERACTIVE REPORT DEMO */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-primary-navy/10">
            {/* Report Header */}
            <div className="bg-primary-navy text-white p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">
                    Competitor Intelligence Report
                  </h3>
                  <p className="text-white/70 font-body">
                    Target: TechCorp Industries | Generated: March 9, 2026
                  </p>
                </div>
                <div className="text-right">
                  <div className="inline-block bg-success-green/20 border border-success-green/40 rounded-full px-4 py-1">
                    <p className="text-success-green font-heading font-semibold text-sm">
                      ✓ Complete
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Tabs - CLICKABLE */}
            <div className="border-b border-primary-navy/10 bg-secondary-offwhite px-6">
              <div className="flex gap-2 overflow-x-auto pb-px -mb-px">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`
                        flex items-center gap-2 px-4 py-3 font-heading font-semibold text-sm
                        border-b-2 transition-all whitespace-nowrap
                        ${isActive 
                          ? 'border-accent-purple text-accent-purple bg-white' 
                          : 'border-transparent text-primary-navy/60 hover:text-primary-navy hover:bg-white/50'
                        }
                      `}
                    >
                      <Icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tab Content - Changes based on selection */}
            <div className="p-8">
              {activeTab === "overview" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-heading font-bold text-primary-navy">
                    Executive Summary
                  </h4>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-secondary-offwhite p-4 rounded-lg">
                      <p className="text-sm text-primary-navy/60 mb-1">Market Position</p>
                      <p className="text-2xl font-heading font-bold text-primary-navy">#3</p>
                      <p className="text-xs text-primary-navy/50">in B2B SaaS</p>
                    </div>
                    <div className="bg-secondary-offwhite p-4 rounded-lg">
                      <p className="text-sm text-primary-navy/60 mb-1">Est. Revenue</p>
                      <p className="text-2xl font-heading font-bold text-primary-navy">$12.4M</p>
                      <p className="text-xs text-success-green">+34% YoY</p>
                    </div>
                    <div className="bg-secondary-offwhite p-4 rounded-lg">
                      <p className="text-sm text-primary-navy/60 mb-1">Digital Reach</p>
                      <p className="text-2xl font-heading font-bold text-primary-navy">2.1M</p>
                      <p className="text-xs text-primary-navy/50">monthly visitors</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-success-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="w-4 h-4 text-success-green" />
                      </div>
                      <p className="text-primary-navy/80"><strong className="font-semibold text-primary-navy">Primary strength:</strong> Strong SEO presence with 47K+ backlinks from authoritative domains</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-success-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="w-4 h-4 text-success-green" />
                      </div>
                      <p className="text-primary-navy/80"><strong className="font-semibold text-primary-navy">Pricing strategy:</strong> Mid-market positioning at $199/mo, undercutting enterprise alternatives by 40%</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-warning-amber/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="w-4 h-4 text-warning-amber" />
                      </div>
                      <p className="text-primary-navy/80"><strong className="font-semibold text-primary-navy">Vulnerability:</strong> Customer support response time averages 8.2 hours (industry avg: 4.1hrs)</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "competitive" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-heading font-bold text-primary-navy">
                    Competitive Positioning
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-accent-purple pl-4">
                      <p className="font-heading font-semibold text-primary-navy mb-2">
                        Direct Competitors (3 identified)
                      </p>
                      <ul className="space-y-2 text-primary-navy/70">
                        <li>• CompetitorA - Market leader, 34% share, premium pricing</li>
                        <li>• CompetitorB - Fast-growing challenger, aggressive content marketing</li>
                        <li>• CompetitorC - Enterprise focus, slower but more features</li>
                      </ul>
                    </div>

                    <div className="bg-secondary-offwhite p-6 rounded-lg">
                      <p className="font-heading font-semibold text-primary-navy mb-4">
                        Feature Comparison Matrix
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-primary-navy/70">API Access</span>
                          <span className="text-success-green font-semibold">✓ Available</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-primary-navy/70">Real-time Updates</span>
                          <span className="text-success-green font-semibold">✓ Available</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-primary-navy/70">White-label Reports</span>
                          <span className="text-primary-navy/40 font-semibold">✗ Not Available</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-primary-navy/70">Custom Integrations</span>
                          <span className="text-warning-amber font-semibold">⚠ Enterprise Only</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "pricing" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-heading font-bold text-primary-navy">
                    Pricing Intelligence
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-secondary-offwhite p-4 rounded-lg">
                        <p className="text-sm text-primary-navy/60 mb-2">Current Pricing</p>
                        <p className="text-3xl font-heading font-bold text-primary-navy mb-1">$199/mo</p>
                        <p className="text-sm text-primary-navy/70">Standard Plan</p>
                      </div>
                      
                      <div className="bg-secondary-offwhite p-4 rounded-lg">
                        <p className="text-sm text-primary-navy/60 mb-2">Recommended Counter</p>
                        <p className="text-3xl font-heading font-bold text-accent-purple mb-1">$179/mo</p>
                        <p className="text-sm text-primary-navy/70">10% undercut, 23% margin maintained</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="font-heading font-semibold text-primary-navy">Key Insights:</p>
                      <ul className="space-y-2 text-primary-navy/70 text-sm">
                        <li>• Last price change: 6 months ago (+15% increase)</li>
                        <li>• Competitor runs quarterly 20% off promotions</li>
                        <li>• Annual plans discounted 16% vs monthly</li>
                        <li>• Enterprise tier pricing not publicly listed</li>
                        <li>• Free trial: 14 days, no credit card required</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "digital" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-heading font-bold text-primary-navy">
                    Digital Presence Analysis
                  </h4>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-secondary-offwhite p-4 rounded-lg">
                      <p className="text-sm text-primary-navy/60 mb-1">Monthly Traffic</p>
                      <p className="text-2xl font-heading font-bold text-primary-navy">2.1M</p>
                      <p className="text-xs text-success-green">+12% vs last month</p>
                    </div>
                    <div className="bg-secondary-offwhite p-4 rounded-lg">
                      <p className="text-sm text-primary-navy/60 mb-1">Domain Authority</p>
                      <p className="text-2xl font-heading font-bold text-primary-navy">68/100</p>
                      <p className="text-xs text-primary-navy/50">Industry avg: 54</p>
                    </div>
                    <div className="bg-secondary-offwhite p-4 rounded-lg">
                      <p className="text-sm text-primary-navy/60 mb-1">Backlinks</p>
                      <p className="text-2xl font-heading font-bold text-primary-navy">47.2K</p>
                      <p className="text-xs text-success-green">High quality</p>
                    </div>
                  </div>

                  <div className="bg-primary-navy/5 p-6 rounded-lg">
                    <p className="font-heading font-semibold text-primary-navy mb-3">
                      Top Traffic Sources
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-primary-navy/70">Organic Search</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 h-2 bg-secondary-offwhite rounded-full overflow-hidden">
                            <div className="h-full bg-accent-purple" style={{ width: '62%' }}></div>
                          </div>
                          <span className="text-primary-navy font-semibold text-sm w-12 text-right">62%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-primary-navy/70">Direct</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 h-2 bg-secondary-offwhite rounded-full overflow-hidden">
                            <div className="h-full bg-accent-purple" style={{ width: '21%' }}></div>
                          </div>
                          <span className="text-primary-navy font-semibold text-sm w-12 text-right">21%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-primary-navy/70">Referral</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 h-2 bg-secondary-offwhite rounded-full overflow-hidden">
                            <div className="h-full bg-accent-purple" style={{ width: '17%' }}></div>
                          </div>
                          <span className="text-primary-navy font-semibold text-sm w-12 text-right">17%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "insights" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-heading font-bold text-primary-navy">
                    Actionable Insights
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-success-green pl-4 py-2">
                      <p className="font-heading font-semibold text-primary-navy mb-2">
                        🎯 Opportunity: Content Gap
                      </p>
                      <p className="text-primary-navy/70 text-sm mb-2">
                        Competitor ranks for 247 keywords you don't. Top opportunity: "enterprise workflow automation" (8.2K monthly searches, low competition)
                      </p>
                      <p className="text-accent-purple font-semibold text-sm">
                        → Recommended Action: Create pillar content targeting this keyword cluster
                      </p>
                    </div>

                    <div className="border-l-4 border-warning-amber pl-4 py-2">
                      <p className="font-heading font-semibold text-primary-navy mb-2">
                        ⚠️ Threat: Pricing Pressure
                      </p>
                      <p className="text-primary-navy/70 text-sm mb-2">
                        New competitor launched 2 months ago at $149/mo (25% below market rate). Gaining 340 customers/month.
                      </p>
                      <p className="text-accent-purple font-semibold text-sm">
                        → Recommended Action: Introduce mid-tier plan or enhance value proposition
                      </p>
                    </div>

                    <div className="border-l-4 border-success-green pl-4 py-2">
                      <p className="font-heading font-semibold text-primary-navy mb-2">
                        🎯 Opportunity: Partnership Channel
                      </p>
                      <p className="text-primary-navy/70 text-sm mb-2">
                        Competitor receiving 18% of traffic from integration partners. Your current integration strategy: underdeveloped.
                      </p>
                      <p className="text-accent-purple font-semibold text-sm">
                        → Recommended Action: Build Zapier/Make integrations, launch partner program
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Post-Demo CTA */}
          <div className="mt-8 text-center">
            <p className="text-primary-navy/60 font-body mb-4">
              This is the level of detail you'll receive in every report.
            </p>
            <p className="text-accent-purple font-heading font-semibold">
              Ready to get yours? Reports start at just $30.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
