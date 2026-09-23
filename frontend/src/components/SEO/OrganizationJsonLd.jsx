import { Helmet } from "react-helmet-async";

export default function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bagh-e-Khizar",
    alternateName: "باغِ خضر",
    url: "https://baghekhizar.org",
    // logo: "https://baghekhizar.org/images/logo.png",
    logo: "https://baghekhizar.org/assets/logo-bagh-e-khizar.png",
    description:
      "Bagh-e-Khizar is a space for knowledge, spirituality, literature and the timeless search for truth, publishing works of literary, historical, spiritual and cultural significance.",
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}