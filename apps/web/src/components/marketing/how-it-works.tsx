import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@openstatus/ui/components/ui/card";
import { cn } from "@openstatus/ui/lib/utils";
import { Bell, Globe, Monitor } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Add your monitors",
    description:
      "Connect your websites and APIs in seconds. Set your check frequency and regions.",
    icon: Monitor,
  },
  {
    number: 2,
    title: "Get notified instantly",
    description:
      "Receive alerts via email, Slack, or SMS the moment downtime is detected.",
    icon: Bell,
  },
  {
    number: 3,
    title: "Share your status",
    description:
      "Publish a beautiful public status page to keep your users informed.",
    icon: Globe,
  },
];

export function HowItWorks() {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="font-cal text-3xl tracking-tight md:text-4xl">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Get started in minutes. Monitor your services and keep your users
            informed with just a few simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line - visible on desktop only */}
          <div
            className="absolute top-1/2 left-0 right-0 hidden h-px -translate-y-1/2 md:block"
            aria-hidden="true"
          >
            <div className="mx-auto flex max-w-3xl items-center justify-between px-24">
              <div className="h-px flex-1 border-t-2 border-dashed border-border" />
              <div className="mx-4 h-px flex-1 border-t-2 border-dashed border-border" />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="relative grid gap-6 md:grid-cols-3 md:gap-8">
            {steps.map((step, index) => (
              <StepCard key={step.number} step={step} isLast={index === steps.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  isLast,
}: {
  step: (typeof steps)[number];
  isLast: boolean;
}) {
  const Icon = step.icon;

  return (
    <div className="relative flex flex-col items-center">
      {/* Mobile connecting arrow - between cards */}
      {!isLast && (
        <div
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 md:hidden"
          aria-hidden="true"
        >
          <svg
            className="h-6 w-6 text-muted-foreground/50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      )}

      <Card className="relative w-full border-border bg-background shadow-sm transition-shadow hover:shadow-md">
        {/* Number badge */}
        <div
          className={cn(
            "absolute -top-3 left-1/2 -translate-x-1/2",
            "flex h-7 w-7 items-center justify-center",
            "rounded-full border border-border bg-background",
            "font-mono text-sm font-medium text-foreground"
          )}
        >
          {step.number}
        </div>

        <CardHeader className="items-center pt-8 text-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
            <Icon className="h-6 w-6 text-foreground" />
          </div>
          <CardTitle className="text-lg">{step.title}</CardTitle>
        </CardHeader>

        <CardContent className="text-center">
          <CardDescription className="text-sm leading-relaxed">
            {step.description}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
