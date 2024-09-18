import { Playfair_Display } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";

export const metadata = {
  title: "Ntim's Portfolio",
  description: "Ntim's Portfolio",
};

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-playfair-display",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} antialiased bg-gradient-to-b from-blue-50 to-red-100 min-h-screen`}>
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
