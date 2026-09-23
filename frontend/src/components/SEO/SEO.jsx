import { Helmet } from "react-helmet-async";

/**
 * SEO.jsx
 * Drop this at the top of every page component with page-specific props.
 */

const SITE_NAME = "Bagh-e-Khizar";
const SITE_URL = "https://baghekhizar.org";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-default.jpg`;

export default function SEO({
  title,
  description,
  path = "/",
  ogImage = DEFAULT_OG_IMAGE,
  jsonLd = null,
  noindex = false,
}) {
  const canonicalUrl = `${SITE_URL}${path}`;

  const fullTitle = title.includes(SITE_NAME)
    ? title
    : `${title} — ${SITE_NAME}`;

  const absoluteOgImage = ogImage.startsWith("http")
    ? ogImage
    : `${SITE_URL}${ogImage}`;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{fullTitle}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {/* Open Graph */}
      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:site_name"
        content={SITE_NAME}
      />

      <meta
        property="og:title"
        content={fullTitle}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta
        property="og:image"
        content={absoluteOgImage}
      />

      <meta
        property="og:image:alt"
        content={fullTitle}
      />

      {/* Twitter / X */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={fullTitle}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={absoluteOgImage}
      />

      {/* JSON-LD structured data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}