import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "What Puskus? Our Cellar Door",
  description: "Wine cellaring is just fine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
