"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Zap, FileText, TrendingUp } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ProblemAgitation from "@/components/ProblemAgitation";
import HowItWorks from "@/components/HowItWorks";
import InteractiveDemo from "@/components/InteractiveDemo";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import FounderAbout from "@/components/FounderAbout";
import FinalCTA from "@/components/FinalCTA";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import OrderFlow from "@/components/OrderFlow";

export default function Home() {
  const [showOrderFlow, setShowOrderFlow] = useState(false);

  return (
    <main className="min-h-screen">
      {/* SECTION 02 - Point 01: HERO */}
      <HeroSection onCTAClick={() => setShowOrderFlow(true)} />
      
      {/* SECTION 02 - Point 02: PROBLEM AGITATION */}
      <ProblemAgitation />
      
      {/* SECTION 02 - Point 03: HOW IT WORKS */}
      <HowItWorks />
      
      {/* SECTION 02 - Point 04: INTERACTIVE SAMPLE REPORT */}
      {/* THE MOST IMPORTANT SECTION */}
      <InteractiveDemo />
      
      {/* SECTION 02 - Point 05: SOCIAL PROOF + EVIDENCE */}
      {/* Must come BEFORE pricing */}
      <SocialProof />
      
      {/* SECTION 02 - Point 06: PRICING - FULLY VISIBLE */}
      <Pricing onCTAClick={() => setShowOrderFlow(true)} />
      
      {/* SECTION 02 - Point 07: FOUNDER / ABOUT */}
      <FounderAbout />
      
      {/* SECTION 02 - Point 08: FINAL CTA + OBJECTIONS */}
      <FinalCTA onCTAClick={() => setShowOrderFlow(true)} />
      
      {/* SECTION 07: Sticky mobile CTA always visible */}
      <MobileStickyCTA onClick={() => setShowOrderFlow(true)} />
      
      {/* SECTION 07: Micro-Commitment Order Flow Modal */}
      {showOrderFlow && (
        <OrderFlow onClose={() => setShowOrderFlow(false)} />
      )}
    </main>
  );
}
