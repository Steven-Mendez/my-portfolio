import "./globals.css";
import React, { Suspense } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import MatrixBackground from "@/components/matrix-background";
import { infoMetaData } from "./MetaData";

export const metadata = infoMetaData;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Suspense fallback={<div>Loading...</div>}>
          <MatrixBackground />
        </Suspense>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
