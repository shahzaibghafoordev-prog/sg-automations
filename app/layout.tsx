import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SG Automations - AI-Powered Competitor Intelligence Reports",
  description: "Get detailed competitor analysis and lead generation reports in minutes. Automated AI pipeline delivers actionable intelligence for $30-100.",
  // SECTION 12: Performance optimization
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* SECTION 05: Font loading with font-display: swap to prevent FOIT */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
