import Link from 'next/link';
import { ArrowRight, BookOpen, Code, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-16 md:py-24 lg:py-32 flex flex-col items-center justify-center min-h-[70vh]">
        {/* Simple background gradient */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 text-fd-foreground tracking-tight">
            CyanPrint
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-fd-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Your comprehensive guide to using and contributing to CyanPrint.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/docs/user"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-fd-primary text-fd-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/docs/developer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-fd-border bg-fd-background text-fd-foreground font-medium hover:bg-fd-accent hover:text-fd-accent-foreground transition-colors"
            >
              Developer Guide
              <Code className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          <DocCard
            title="For Users"
            href="/docs/user"
            description="Learn how to use CyanPrint to increase your productivity."
            icon={<BookOpen className="w-5 h-5" />}
            features={['Quick Start', 'Core Concepts', 'Best Practices']}
          />
          <DocCard
            title="For Developers"
            href="/docs/developer"
            description="Build your own Templates, Processors, or Plugins."
            icon={<Code className="w-5 h-5" />}
            features={['API Reference', 'Templates', 'Plugins']}
          />
          <DocCard
            title="Contributors"
            href="/docs/contributor"
            description="Contribute to the CyanPrint platform."
            icon={<Users className="w-5 h-5" />}
            features={['Guidelines', 'Roadmap', 'Community']}
          />
        </div>
      </section>
    </main>
  );
}

function DocCard({
  title,
  href,
  description,
  icon,
  features,
}: {
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col p-5 md:p-6 rounded-xl border border-fd-border bg-fd-card hover:bg-fd-accent/50 transition-colors"
    >
      {/* Icon */}
      <div className="w-10 h-10 mb-4 rounded-lg bg-fd-accent flex items-center justify-center text-fd-accent-foreground">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-2 text-fd-card-foreground group-hover:text-fd-primary transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-fd-muted-foreground mb-4 flex-grow">{description}</p>

      {/* Features list */}
      <ul className="space-y-1.5 mb-4">
        {features.map(feature => (
          <li key={feature} className="text-xs text-fd-muted-foreground flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-fd-muted-foreground/50" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Explore link */}
      <div className="flex items-center gap-1.5 text-sm font-medium text-fd-primary">
        <span>Explore</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
      </div>
    </Link>
  );
}
