import type { Metadata } from "next";

import { SidebarProvider } from "@/components/SidebarContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "HG Games",
  description: "HG Games - iGaming Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>{children}</SidebarProvider>
      </body>
    </html>
  );
}
