import { sokUrl, PARTNER_NAME } from "@/lib/partner";

type PartnerCTAProps = {
  /** Sidans slug, används i utm_campaign (t.ex. "juridik", "starta-stiftelse") */
  campaign: string;
  /** Placering på sidan, används i utm_content (t.ex. "bottom", "mid", "after-calculator") */
  placement?: string;
  heading?: string;
  body?: string;
  buttonText?: string;
  variant?: "panel" | "compact";
  className?: string;
};

const DEFAULT_HEADING = "Hitta stiftelser att söka pengar från";
const DEFAULT_BODY =
  "SökaStiftelseMedel.se är Sveriges AI-drivna sökmotor för stiftelsemedel med över 17 000 svenska stiftelser. Sök gratis och hitta finansiering som matchar just ditt projekt.";
const DEFAULT_BUTTON = "Sök bland 17 000+ stiftelser";

function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  );
}

export default function PartnerCTA({
  campaign,
  placement = "bottom",
  heading = DEFAULT_HEADING,
  body = DEFAULT_BODY,
  buttonText = DEFAULT_BUTTON,
  variant = "panel",
  className = "",
}: PartnerCTAProps) {
  const href = sokUrl(campaign, placement);

  if (variant === "compact") {
    return (
      <aside
        className={`rounded-xl border border-primary-100 bg-primary-50/60 p-6 ${className}`}
      >
        <p className="kicker mb-2">Vår samarbetspartner</p>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{heading}</h3>
        <p className="text-sm text-gray-600 mb-4">{body}</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          {buttonText}
          <ArrowIcon />
        </a>
      </aside>
    );
  }

  return (
    <aside className={`rounded-2xl bg-primary-800 text-white p-8 md:p-12 ${className}`}>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary-200 mb-3">
          Vår samarbetspartner · {PARTNER_NAME}
        </p>
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">
          {heading}
        </h3>
        <p className="text-primary-100 mb-8 md:text-lg leading-relaxed">{body}</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-lg btn-on-dark"
        >
          {buttonText}
          <ArrowIcon />
        </a>
      </div>
    </aside>
  );
}
