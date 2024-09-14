import { Playfair_Display } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Ntim's Portfolio",
  description: "Ntim's Portfolio",
};

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-playfair-display'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
