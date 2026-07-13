import "./globals.css";
import type { Metadata } from "next";

const siteUrl = "https://portifolio-devops-phi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Thiago Rodrigues | DevOps & Platform Engineer",
  description:
    "DevOps e Platform Engineer especializado em OpenShift, Kubernetes, Linux, automação e confiabilidade de ambientes críticos.",
  keywords: [
    "DevOps Engineer",
    "Platform Engineer",
    "SRE",
    "OpenShift",
    "Kubernetes",
    "Kong Gateway",
    "Observabilidade",
  ],
  authors: [{ name: "Thiago Rodrigues" }],
  creator: "Thiago Rodrigues",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Thiago Rodrigues · DevOps & Platform Engineering",
    title: "Thiago Rodrigues | DevOps & Platform Engineer",
    description:
      "OpenShift, Kubernetes e engenharia de confiabilidade para ambientes críticos.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Thiago Rodrigues — DevOps e Platform Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiago Rodrigues | DevOps & Platform Engineer",
    description:
      "OpenShift, Kubernetes e engenharia de confiabilidade para ambientes críticos.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
