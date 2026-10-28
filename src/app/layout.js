
import { Poppins, Vast_Shadow } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const vastShadow = Vast_Shadow({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "XSpace Ply | Quality Plywood",
  description:
    "Discover quality plywood and wood solutions from XSpace Ply.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${vastShadow.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
