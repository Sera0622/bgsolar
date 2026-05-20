import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BETELGEUSE — Next-Generation Solar Energy Systems",
  description:
    "BETELGEUSE delivers premium photovoltaic systems engineered for the future. Harnessing stellar energy since 2015.",
  openGraph: {
    title: "BETELGEUSE — Next-Generation Solar Energy Systems",
    description:
      "Premium photovoltaic systems engineered for the future. 2.4GW installed, 40,000+ homes powered.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full`}>
      <body className="min-h-full antialiased font-poppins bg-gray-deep text-white-star overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
