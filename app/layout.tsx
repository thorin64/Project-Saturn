import type { Metadata } from "next";
import "./css/App.css";

export const metadata: Metadata = {
  // <link rel="icon" type="image/png" href="/favicon.png" />
  // <link rel="stylesheet" href="/src/css/index.css" />
  // <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  // <title>Project Saturn DB</title>
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
