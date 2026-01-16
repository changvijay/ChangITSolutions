import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        
        {/* Meta */}
        <meta name="description" content="Leading IT solutions provider specializing in custom CRM, ERP systems, and web application development. Transform your business with innovative digital solutions." />
        <meta name="author" content="Chang Groups IT Solutions" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Chang Groups IT Solutions - Custom CRM, ERP & Web Development" />
        <meta property="og:description" content="Leading IT solutions provider specializing in custom CRM, ERP systems, and web application development. Transform your business with innovative digital solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/logo.png" />
        
        {/* Calendly */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
