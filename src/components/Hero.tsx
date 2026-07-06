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
  small: "py-10 md:py-14",
  medium: "py-14 md:py-20",
  large: "py-16 md:py-24",
};

function CtaButton({ cta, variant }: { cta: HeroCta; variant: "primary" | "secondary" }) {
  const className = `btn btn-lg ${variant === "primary" ? "btn-primary" : "btn-secondary"}`;

  if (cta.external) {
    return (
      <a href={cta.href} target="_blank" rel="noopener noreferrer" className={className}>
        {cta.text}
      </a>
    );
  }

  return (
    <Link href={cta.href} className={className}>
      {cta.text}
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
    <section className={`bg-white ${SIZE_CLASSES[size]}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className={imageComponent ? "grid gap-10 lg:grid-cols-2 lg:items-center" : ""}>
          <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
            {kicker && <p className={`kicker mb-3 ${centered ? "text-center" : ""}`}>{kicker}</p>}

            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-gray-900 leading-tight text-balance">
              {title}
            </h1>

            {subtitle && (
              <p
                className={`mt-4 text-lg md:text-xl leading-relaxed text-gray-600 ${
                  centered ? "mx-auto" : ""
                } max-w-2xl`}
              >
                {subtitle}
              </p>
            )}

            {children && <div className="mt-6">{children}</div>}

            {(primaryCta || secondaryCta) && (
              <div className={`mt-8 flex flex-wrap gap-3 ${centered ? "justify-center" : ""}`}>
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
