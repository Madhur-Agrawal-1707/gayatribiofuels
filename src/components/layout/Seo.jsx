import { Helmet } from "react-helmet-async";

/**
 * Per-page SEO tags. Every page passes a specific title/description so
 * the SPA still behaves well for search engines and link previews.
 */
export default function Seo({ title, description, path = "/" }) {
  const fullTitle = `${title} | OilCycle`;
  const url = `https://oilcycle.example.com${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
