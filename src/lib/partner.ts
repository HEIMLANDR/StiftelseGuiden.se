export const PARTNER_NAME = "SökaStiftelseMedel.se";
export const PARTNER_BASE_URL = "https://www.sokastiftelsemedel.se";

/**
 * Bygger en spårbar länk till sokastiftelsemedel.se.
 * campaign = sidans slug (t.ex. "juridik"), placement = var på sidan (t.ex. "bottom", "hero").
 */
export function sokUrl(campaign: string, placement = "cta") {
  const params = new URLSearchParams({
    utm_source: "stiftelseguiden",
    utm_medium: "referral",
    utm_campaign: campaign,
    utm_content: placement,
  });
  return `${PARTNER_BASE_URL}/?${params.toString()}`;
}
