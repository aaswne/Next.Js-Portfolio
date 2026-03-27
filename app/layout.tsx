
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://aswinkrishna.in"),

  title: {
    default: "Aswin Krishna – Frontend Engineer",
    template: "%s | Aswin Krishna",
  },

  description:
    "Aswin Krishna is a frontend engineer specializing in React and Next.js, building fast, scalable, and user-focused web applications.",

  keywords: [
    "Aswin Krishna",
    "Frontend Developer India",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
    "Frontend Engineer",
  ],

  authors: [
    { name: "Aswin Krishna", url: "https://aswinkrishna.in" }
  ],
  creator: "Aswin Krishna",

  openGraph: {
    title: "Aswin Krishna – Frontend Engineer",
    description:
      "Frontend Engineer building modern, scalable, and user-focused web applications.",
    url: "https://aswinkrishna.in",
    siteName: "Aswin Krishna Portfolio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Aswin Krishna Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aswin Krishna – Frontend Engineer",
    description:
      "Frontend Engineer building modern web applications with React and Next.js.",
    images: ["/og.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD structured data for SEO & social links */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aswin Krishna",
              url: "https://aswinkrishna.in",
              sameAs: [
                "https://github.com/aaswne",
                "https://linkedin.com/in/aswinkrishna",
                "https://twitter.com/aswinkrishna",
              ],
              jobTitle: "Frontend Engineer",
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}