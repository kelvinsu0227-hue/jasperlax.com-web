export const siteOrigin = 'https://jasperlax.com';
// The entire public website is production. No environment or crawler-specific opt-outs.
export function robotsMeta() {
  return 'index, follow, max-image-preview:large';
}
export function robotsFile() {
  return `User-agent: *
Allow: /

Sitemap: ${siteOrigin}/sitemap.xml
`;
}
