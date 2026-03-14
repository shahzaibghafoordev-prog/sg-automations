"use client";

/**
 * SECTION 02 - Point 03: HOW IT WORKS
 * SECTION 10: Linear-inspired Bento grid cards + CSS scale-fade animations
 * 
 * StoryBrand Framework: EXACTLY 3 steps. Not 2, not 5, not 7.
 * Steps: Submit company → AI pipeline runs → Report arrives in minutes
 * 
 * Psychology: Removes fear of complexity and implementation anxiety
 */

import { Send, Cpu, Mail } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Send,
      title: "Submit Your Company",
      description: "What company are you analyzing?",
      detail: "Tell us who you want to research. Competitor analysis or lead generation—your choice.",
    },
    {
      number: "02",
      icon: Cpu,
      title: "AI Pipeline Runs",
      description: "Our AI analyzes 150+ data sources in real-time",
      detail: "Automated pipelines process millions of data points across web, social, financial, and technical sources.",
    },
    {
      number: "03",
      icon: Mail,
      title: "Report Arrives in Minutes",
      description: "Interactive HTML report delivered to your inbox",
      detail: "Clean, actionable intelligence you can explore immediately. No waiting. No back-and-forth.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-primary-navy mb-4">
              How It Works
            </h2>
            <p className="text-xl text-primary-navy/70 max-w-2xl mx-auto">
              From question to answer in three simple steps. No complexity. No delays.
            </p>
          </div>

          {/* SECTION 10: Bento Grid Cards with Scale-Fade Animations */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting lines between steps (desktop only) */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-purple via-accent-purple to-accent-purple opacity-20 z-0"></div>

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative z-10">
                  {/* SECTION 10: Bento card with hover animation */}
                  <div className="bento-card h-full">
                    {/* Step Number Circle */}
                    <div className="w-16 h-16 rounded-full bg-accent-purple flex items-center justify-center mb-6 mx-auto">
                      <span className="text-white font-heading font-bold text-2xl">
                        {step.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 mx-auto mb-4 text-accent-purple">
                      <Icon className="w-full h-full" />
                    </div>

                    {/* Content */}
                    <h3 className="text-primary-navy text-center mb-3">
                      {step.title}
                    </h3>
                    
                    {/* SECTION 10: Notion-inspired conversational micro-copy */}
                    <p className="text-accent-purple font-heading font-semibold text-center mb-3 text-sm">
                      {step.description}
                    </p>
                    
                    <p className="text-primary-navy/70 text-center leading-relaxed">
                      {step.detail}
                    </p>
                  </div>

                  {/* Progress Arrow (mobile only) */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center py-4">
                      <div className="text-accent-purple text-3xl">↓</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Psychology: Removes implementation anxiety */}
          <div className="mt-12 text-center">
            <p className="text-primary-navy/60 font-body italic">
              No installation. No training. No integration work. Just answers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
