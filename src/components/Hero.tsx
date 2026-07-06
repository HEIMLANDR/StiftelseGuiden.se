import Link from "next/link";
import { ReactNode } from "react";

interface HeroCta {
  text: string;
  href: string;
  external?: boolean;
}

interface HeroProps {
  title: string;
  subtitle?: string;
  /** Liten uppercase-etikett ovanför rubriken, t.ex. "Juridik" */
  kicker?: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  /** @deprecated Dekorativa mönster togs bort i 2026 års redesign; ignoreras. */
  pattern?: "dots" | "waves" | "none";
  align?: "left" | "center";
  children?: ReactNode;
  size?: "small" | "medium" | "large";
  imageComponent?: ReactNode;
}

const SIZE_CLASSES: Record<NonNullable<HeroProps["size"]>, string> = {
  small: "py-12 md:py-16",
  medium: "py-16 md:py-20",
  large: "py-20 md:py-28",
};

const TITLE_CLASSES: Record<NonNullable<HeroProps["size"]>, string> = {
  small: "text-3xl md:text-4xl",
  medium: "text-3xl md:text-[2.75rem]",
  large: "text-4xl md:text-5xl lg:text-6xl",
};

/* Viskningstyst atmosfär: blå glöd uppifrån + mikroruta som tonar ut. */
function Atmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(58%_70%_at_50%_0%,rgba(49,147,255,0.09),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_65%_65%_at_50%_0%,#000_5%,transparent_100%)]" />
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

function CtaButton({ cta, variant }: { cta: HeroCta; variant: "primary" | "secondary" }) {
  const className =
    variant === "primary"
      ? "btn btn-lg btn-primary shadow-[0_8px_24px_-10px_rgba(0,98,214,0.5)]"
      : "btn btn-lg btn-secondary";

  if (cta.external) {
    return (
      <a href={cta.href} target="_blank" rel="noopener noreferrer" className={className}>
        {cta.text}
        {variant === "primary" && <ArrowIcon />}
      </a>
    );
  }

  return (
    <Link href={cta.href} className={className}>
      {cta.text}
      {variant === "primary" && <ArrowIcon />}
    </Link>
  );
}

export default function Hero({
  title,
  subtitle,
  kicker,
  primaryCta,
  secondaryCta,
  align = "left",
  children,
  size = "medium",
  imageComponent,
}: HeroProps) {
  const centered = align === "center" && !imageComponent;

  return (
    <section className={`relative overflow-hidden bg-white ${SIZE_CLASSES[size]}`}>
      <Atmosphere />

      <div className="container relative mx-auto px-4 md:px-6 max-w-5xl">
        <div className={imageComponent ? "grid gap-10 lg:grid-cols-2 lg:items-center" : ""}>
          <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
            {kicker && (
              <p
                className={`mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 ${
                  centered ? "justify-center" : ""
                }`}
              >
                <span className="h-px w-8 bg-primary-300" aria-hidden="true" />
                {kicker}
                {centered && <span className="h-px w-8 bg-primary-300" aria-hidden="true" />}
              </p>
            )}

            <h1
              className={`font-serif font-semibold text-gray-900 leading-[1.08] text-balance ${TITLE_CLASSES[size]}`}
            >
              {title}
            </h1>

            {subtitle && (
              <p
                className={`mt-5 text-lg md:text-xl leading-relaxed text-gray-600 ${
                  centered ? "mx-auto" : ""
                } max-w-2xl`}
              >
                {subtitle}
              </p>
            )}

            {children && <div className="mt-6">{children}</div>}

            {(primaryCta || secondaryCta) && (
              <div className={`mt-9 flex flex-wrap gap-3 ${centered ? "justify-center" : ""}`}>
                {primaryCta && <CtaButton cta={primaryCta} variant="primary" />}
                {secondaryCta && <CtaButton cta={secondaryCta} variant="secondary" />}
              </div>
            )}
          </div>

          {imageComponent && <div className="w-full">{imageComponent}</div>}
        </div>
      </div>
    </section>
  );
}
