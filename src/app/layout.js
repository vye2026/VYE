import { Rajdhani } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
  display: "swap",
});

export const metadata = {
  title: "VYE Comms — Digital Communication Solutions",
  description:
    "VYE Comms delivers tailored digital communication solutions for government and non-government entities — social media, content, video, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={rajdhani.variable}>
      <body>{children}</body>
    </html>
  );
}
