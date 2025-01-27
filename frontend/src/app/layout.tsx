import type { Metadata } from "next";
import { roboto } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zillus Shop",
  description: "Seu novo e-commerce favorito.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
