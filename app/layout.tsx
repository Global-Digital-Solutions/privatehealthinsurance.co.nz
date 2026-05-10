import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Private Health Insurance NZ | Compare & Save | PrivateHealthInsurance.co.nz",
  description: "Compare private health insurance in New Zealand. Get free quotes from Southern Cross, nib, AIA & Partners Life. Licensed NZ advisers, no obligation, response within 24hrs.",
  keywords: "private health insurance NZ, health insurance New Zealand, compare health insurance, Southern Cross, nib, AIA, Partners Life",
  openGraph: {
    title: "Private Health Insurance NZ | Compare & Save",
    description: "Compare private health insurance in New Zealand. Free expert advice from licensed NZ advisers.",
    url: "https://privatehealthinsurance.co.nz",
    siteName: "PrivateHealthInsurance.co.nz",
    locale: "en_NZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-NZ">
      <body className="font-sans antialiased">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
