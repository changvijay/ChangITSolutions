import { Html, Head, Main, NextScript } from "next/document";

const SITE_URL = "https://changtechs.com";
const SITE_NAME = "Chang Groups IT Solutions";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export default function Document() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "Custom software development company specializing in CRM systems, ERP solutions, web applications, AI integration, and digital transformation for businesses worldwide.",
    email: "info@changtechs.com",
    telephone: "+91-7010747878",
    sameAs: [
      "https://www.linkedin.com/company/chang-groups",
      "https://twitter.com/changgroups",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7010747878",
      contactType: "customer service",
      availableLanguage: "English",
    },
    areaServed: "Worldwide",
    knowsAbout: [
      "Custom Software Development",
      "CRM Development",
      "ERP Systems",
      "Web Application Development",
      "AI Integration",
      "Mobile App Development",
      "Cloud Solutions",
      "UI/UX Design",
      "Business Intelligence",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    image: `${SITE_URL}/logo.png`,
    url: SITE_URL,
    telephone: "+91-7010747878",
    email: "info@changtechs.com",
    priceRange: "$$",
    openingHours: "Mo-Fr 09:00-18:00",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT Solutions & Custom Software Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom CRM Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "ERP System Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Application Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI & API Integration" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Design" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Intelligence & Analytics" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud Deployment & DevOps" } },
      ],
    },
  };

  return (
    <Html lang="en">
      <Head>
        {/* === Canonical & Charset === */}
        <meta charSet="UTF-8" />
        <link rel="canonical" href={SITE_URL} />

        {/* === Favicons === */}
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" />
        <meta name="theme-color" content="#1e40af" />

        {/* === Primary Meta Tags === */}
        <meta
          name="description"
          content="Chang Groups IT Solutions — Expert custom software development company. We build CRM systems, ERP platforms, web apps, AI integrations & mobile apps that drive real business growth. Free consultation available."
        />
        <meta
          name="keywords"
          content="custom software development, CRM development, ERP system, web application development, AI integration, mobile app development, IT consulting, business intelligence, cloud solutions, digital transformation, React development, Node.js, custom CRM software, enterprise software, SaaS development"
        />
        <meta name="author" content={SITE_NAME} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />

        {/* === Open Graph / Facebook === */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta
          property="og:title"
          content="Chang Groups IT Solutions | Custom Software Development Company"
        />
        <meta
          property="og:description"
          content="Expert custom software development company specializing in CRM, ERP, web applications, AI integrations & mobile apps. Transform your business with cutting-edge IT solutions."
        />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Chang Groups IT Solutions - Custom Software Development" />
        <meta property="og:locale" content="en_US" />

        {/* === Twitter Card === */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@changgroups" />
        <meta name="twitter:creator" content="@changgroups" />
        <meta
          name="twitter:title"
          content="Chang Groups IT Solutions | Custom Software Development Company"
        />
        <meta
          name="twitter:description"
          content="Expert custom software development — CRM, ERP, web apps, AI integrations & mobile apps. Free consultation available."
        />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content="Chang Groups IT Solutions" />

        {/* === Performance: Resource Hints === */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />

        {/* === Fonts === */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* === Calendly === */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />

        {/* === JSON-LD Structured Data === */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
