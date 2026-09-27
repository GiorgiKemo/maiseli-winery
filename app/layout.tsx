import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://maiseli-winery.vercel.app"),
  title: "Maiseli Winery — Rooted in Georgia. Since 1908.",
  description:
    "Discover Maiseli, a Georgian family winery with a tradition dating to 1908. Explore our qvevri wines, indigenous grape varieties, and family vineyard.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Maiseli Winery — Rooted in Georgia. Since 1908.",
    description:
      "Discover Maiseli, a Georgian family winery with a tradition dating to 1908. Explore our qvevri wines, indigenous grape varieties, and family vineyard.",
    url: "/",
    siteName: "Maiseli Winery",
    images: [
      {
        url: "/assets/vineyard-sunset.jpg",
        width: 1470,
        height: 1070,
        alt: "The sun setting over the rows of Maiseli’s family vineyard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maiseli Winery — Rooted in Georgia. Since 1908.",
    description:
      "Discover Maiseli, a Georgian family winery with a tradition dating to 1908. Explore our qvevri wines, indigenous grape varieties, and family vineyard.",
    images: [
      {
        url: "/assets/vineyard-sunset.jpg",
        alt: "The sun setting over the rows of Maiseli’s family vineyard",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#f3efe6",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          rel="preload"
          href="/assets/vineyard-sunset.jpg"
          as="image"
          type="image/jpeg"
          fetchPriority="high"
        />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
