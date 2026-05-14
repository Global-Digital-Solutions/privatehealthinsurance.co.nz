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
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
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
