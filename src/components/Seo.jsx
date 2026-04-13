import { Helmet } from "react-helmet-async";

const SITE_URL = "https://hyacinthindustriesllc.com";
const DEFAULT_IMAGE = "/og-image-v2.webp";

function toAbsoluteUrl(pathOrUrl = "") {
  if (!pathOrUrl) return SITE_URL;
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }

  return `${SITE_URL}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
}

export default function Seo({
  title,
  description,
  canonicalPath,
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
  structuredData,
}) {
  const canonical = toAbsoluteUrl(canonicalPath);
  const imageUrl = toAbsoluteUrl(image);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={canonical} />

      <meta property="og:site_name" content="Hyacinth Industries LLC" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {structuredData ? (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      ) : null}
    </Helmet>
  );
}
