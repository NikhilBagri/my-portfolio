import { Anton, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import Providers from "@/components/Providers";

// 🔤 FONTS — swap for any Google Font (keep the variable names)
const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });

// 🔍 SEO — values from data/site.js → seo
export const metadata = {
  metadataBase: new URL(site.seo.url),
  title: site.seo.title,
  description: site.seo.description,
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    images: [site.seo.ogImage],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${anton.variable} ${grotesk.variable}`}>
      <body className={`bg-cream font-body text-ink antialiased ${site.fun.filmGrain ? "grain" : ""}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
