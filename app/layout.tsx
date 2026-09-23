import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maiseli Winery — Rooted in Georgia. Since 1908.",
  description:
    "Discover Maiseli, a Georgian family winery with a tradition dating to 1908. Explore our qvevri wines, indigenous grape varieties, and family vineyard.",
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
          href="/assets/vineyard-sunset.webp"
          as="image"
          fetchPriority="high"
        />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
