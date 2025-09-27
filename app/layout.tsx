import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ephimera - Secure Cloud Production Access & Ephemeral Console Access | Enterprise Security Platform",
  description: "Secure ephemeral access to AWS, Azure & GCP production systems. Give external teams time-limited cloud console access with complete audit trails. Zero-trust security platform for enterprise production environments.",
  keywords: [
    "secure production access",
    "ephemeral cloud access",
    "AWS console access security",
    "Azure production access",
    "GCP secure access",
    "cloud security platform",
    "production system security",
    "zero trust access",
    "cloud console security",
    "enterprise access management",
    "temporary cloud access",
    "production environment security",
    "cloud access governance",
    "secure DevOps access",
    "multi-cloud security"
  ],
  authors: [{ name: "Ephimera Security Team" }],
  creator: "Ephimera",
  publisher: "Ephimera",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ephimera.cloud'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Ephimera - Secure Cloud Production Access & Ephemeral Console Access",
    description: "Secure ephemeral access to AWS, Azure & GCP production systems. Enterprise-grade security platform with complete audit trails and zero-trust architecture.",
    url: 'https://ephimera.cloud',
    siteName: 'Ephimera',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ephimera - Secure Cloud Production Access Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ephimera - Secure Cloud Production Access Platform",
    description: "Secure ephemeral access to AWS, Azure & GCP production systems with complete audit trails.",
    images: ['/twitter-image.jpg'],
    creator: '@ephimera_cloud',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://ephimera.cloud/#organization",
        "name": "Ephimera",
        "url": "https://ephimera.cloud",
        "logo": {
          "@type": "ImageObject",
          "url": "https://ephimera.cloud/logo.png",
          "width": 512,
          "height": 512
        },
        "description": "Enterprise-grade secure cloud production access platform providing ephemeral access to AWS, Azure, and GCP systems with complete audit trails.",
        "foundingDate": "2024",
        "sameAs": [
          "https://twitter.com/ephimera_cloud",
          "https://linkedin.com/company/ephimera-cloud",
          "https://github.com/ephimera-cloud"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "email": "support@ephimera.cloud"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://ephimera.cloud/#website",
        "url": "https://ephimera.cloud",
        "name": "Ephimera - Secure Cloud Production Access",
        "description": "Secure ephemeral access to AWS, Azure & GCP production systems with enterprise-grade security and complete audit trails.",
        "publisher": {
          "@id": "https://ephimera.cloud/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": "https://ephimera.cloud/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://ephimera.cloud/#software",
        "name": "Ephimera Security Platform",
        "description": "Enterprise cloud security platform for ephemeral production access with zero-trust architecture",
        "applicationCategory": "Security Software",
        "operatingSystem": "Cloud-based",
        "offers": {
          "@type": "Offer",
          "price": "Contact for pricing",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "127",
          "bestRating": "5",
          "worstRating": "1"
        },
        "featureList": [
          "Ephemeral AWS Console Access",
          "Secure Azure Portal Access",
          "GCP Cloud Console Security",
          "Real-time Audit Trails",
          "Zero-trust Architecture",
          "Multi-cloud Support",
          "Enterprise SSO Integration",
          "Compliance Reporting"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://ephimera.cloud/#webpage",
        "url": "https://ephimera.cloud",
        "name": "Ephimera - Secure Cloud Production Access & Ephemeral Console Access",
        "isPartOf": {
          "@id": "https://ephimera.cloud/#website"
        },
        "about": {
          "@id": "https://ephimera.cloud/#software"
        },
        "description": "Secure ephemeral access to AWS, Azure & GCP production systems. Enterprise-grade security platform with complete audit trails and zero-trust architecture.",
        "breadcrumb": {
          "@id": "https://ephimera.cloud/#breadcrumb"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
