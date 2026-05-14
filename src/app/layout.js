import "./globals.css";

export const metadata = {
  title: "VYE Comms — Digital Communication Solutions",
  description:
    "VYE Comms delivers tailored digital communication solutions for government and non-government entities — social media, content, video, and more.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}




