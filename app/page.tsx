"use client";

/**
 * MAIN PAGE - Updated with new ProductTypes section
 * NEW: Added ProductTypes component between HowItWorks and InteractiveDemo
 * STRUCTURE:
 * 1. Hero
 * 2. Problem Agitation
 * 3. How It Works
 * 4. Product Types (NEW!) - Explains Competitor Report vs Lead Gen
 * 5. Interactive Demo
 * 6. Social Proof
 * 7. Pricing (Updated with bundles)
 * 8. Founder About
 * 9. Final CTA
 */

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import ProblemAgitation from "@/components/ProblemAgitation";
import HowItWorks from "@/components/HowItWorks";
import ProductTypes from "@/components/ProductTypes";
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
      {/* 1. HERO SECTION */}
      <HeroSection onCTAClick={() => setShowOrderFlow(true)} />
      
      {/* 2. PROBLEM AGITATION */}
      <ProblemAgitation />
      
      {/* 3. HOW IT WORKS */}
      <HowItWorks />
      
      {/* 4. PRODUCT TYPES - NEW! Explains both offerings */}
      <ProductTypes onCTAClick={() => setShowOrderFlow(true)} />
      
      {/* 5. INTERACTIVE DEMO - Now with working tabs! */}
      <InteractiveDemo />
      
      {/* 6. SOCIAL PROOF + EVIDENCE */}
      <SocialProof />
      
      {/* 7. PRICING - Updated with 2 products + 2 bundles */}
      <Pricing onCTAClick={() => setShowOrderFlow(true)} />
      
      {/* 8. FOUNDER / ABOUT */}
      <FounderAbout />
      
      {/* 9. FINAL CTA + OBJECTIONS */}
      <FinalCTA onCTAClick={() => setShowOrderFlow(true)} />
      
      {/* MOBILE STICKY CTA */}
      <MobileStickyCTA onClick={() => setShowOrderFlow(true)} />
      
      {/* ORDER FLOW MODAL */}
      {showOrderFlow && (
        <OrderFlow onClose={() => setShowOrderFlow(false)} />
      )}
    </main>
  );
}
