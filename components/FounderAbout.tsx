"use client";

/**
 * SECTION 02 - Point 07: FOUNDER / ABOUT
 * SECTION 08: Trust Signals - Engineering Credibility From Zero Reviews
 * 
 * NIH-cited study: Smiling founder photos = +16.6% higher success probability
 * A professional founder photo is NON-NEGOTIABLE
 * An avatar or missing photo actively damages conversion
 */

import { Github, Linkedin, ExternalLink } from "lucide-react";

export default function FounderAbout() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-primary-navy mb-4">
              Built By Engineers Who Understand Scale
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8 items-start">
            {/* SECTION 08: Founder Photo */}
            <div className="md:col-span-2">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/founder-photo.jpg" 
                    alt="Shahzaib Ghafoor - Founder & Chief Engineer at SG Automations"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Verification Badge */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-success-green text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-heading font-semibold text-xs">Verified Founder</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Bio */}
            <div className="md:col-span-3">
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-primary-navy mb-2">
                    Hi, I'm Shahzaib Ghafoor
                  </h3>
                  <p className="text-accent-purple font-heading font-semibold">
                    Founder & Chief Engineer
                  </p>
                </div>

                <p className="text-primary-navy/80 leading-relaxed">
                  Before building SG Automations, I spent years building AI pipelines that process{" "}
                  <strong className="font-semibold text-primary-navy">10M+ daily requests</strong> for 
                  enterprise clients. I got tired of watching businesses make critical decisions based on 
                  stale competitive data—information that could be automated and delivered in minutes, 
                  not weeks.
                </p>

                <p className="text-primary-navy/80 leading-relaxed">
                  SG Automations is that automation. The same infrastructure that powers real-time data 
                  pipelines at scale, now delivering competitive intelligence reports at a fraction of 
                  traditional consultant costs. No manual research. No delays. Just{" "}
                  <strong className="font-semibold text-primary-navy">automated, verifiable intelligence</strong>.
                </p>

                <div className="pt-4 border-t border-primary-navy/10">
                  <p className="text-sm text-primary-navy/60 mb-3 font-heading font-semibold">
                    Technical Background:
                  </p>
                  <ul className="space-y-2 text-sm text-primary-navy/70">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-purple mt-0.5">→</span>
                      <span>Built AI pipelines processing 10M+ daily requests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-purple mt-0.5">→</span>
                      <span>Specialized in real-time data aggregation and analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-purple mt-0.5">→</span>
                      <span>Background in distributed systems and automation</span>
                    </li>
                  </ul>
                </div>

                <div className="flex gap-4 pt-4">
                  
                    href="https://github.com/shahzaibghafoordev-prog"
                    className="inline-flex items-center gap-2 text-primary-navy hover:text-accent-purple transition-colors font-heading font-semibold text-sm"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  
                    href="https://www.linkedin.com/in/shahzaib-ghafoor-5671613a3"
                    className="inline-flex items-center gap-2 text-primary-navy hover:text-accent-purple transition-colors font-heading font-semibold text-sm"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 08: Geographic Bias Mitigation */}
          <div className="mt-12 p-6 bg-primary-navy/5 rounded-xl">
            <p className="text-primary-navy/70 text-center leading-relaxed">
              <strong className="font-semibold text-primary-navy">Location transparency:</strong>{" "}
              Based in Lahore, Pakistan. Technical infrastructure runs on globally distributed systems. 
              Verifiable credentials and real technical work override any geographic assumptions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
