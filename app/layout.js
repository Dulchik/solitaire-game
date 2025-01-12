import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weights: [400, 500, 600, 700],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="pastel">
      <body className={`${inter} bg-inherit text-black`}>{children}</body>
    </html>
  );
}
