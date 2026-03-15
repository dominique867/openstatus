import { HowItWorks } from "@/components/marketing/how-it-works";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OpenStatus - Open-source Uptime Monitoring & Status Pages",
  description:
    "The open-source status page and uptime monitoring platform. Monitor your services from 28 global regions and keep your users informed.",
};

export default function MarketingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 py-16 text-center md:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-cal text-4xl tracking-tight md:text-5xl lg:text-6xl">
            Ship your status page before your SOC 2 auditor asks for it
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            The open-source status page trusted by growing teams. Communicate
            incidents, prove compliance readiness, and monitor uptime from 28
            global regions.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://app.openstatus.dev"
              className="inline-flex h-11 items-center justify-center rounded-md bg-foreground px-8 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Get Started
            </Link>
            <Link
              href="https://openstatus.dev/github"
              className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-background px-8 text-sm font-medium transition-colors hover:bg-muted"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="font-cal text-3xl tracking-tight md:text-4xl">
              Everything you need for uptime monitoring
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A complete solution for monitoring your services and communicating
              with your users.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="28 Global Regions"
              description="Monitor from multiple cloud providers across all continents. No blind spots."
            />
            <FeatureCard
              title="Beautiful Status Pages"
              description="Customizable themes, custom domains, and branding. Make it yours."
            />
            <FeatureCard
              title="Instant Alerts"
              description="Get notified via Slack, Discord, PagerDuty, email, or webhooks."
            />
            <FeatureCard
              title="SOC 2 Ready"
              description="Timestamped incident reports and audit-ready documentation."
            />
            <FeatureCard
              title="Open Source"
              description="Self-host with a single Docker container or use our managed service."
            />
            <FeatureCard
              title="API & CI/CD"
              description="Version your monitors with YAML and integrate with your workflow."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-background p-6 transition-shadow hover:shadow-md">
      <h3 className="font-medium">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
