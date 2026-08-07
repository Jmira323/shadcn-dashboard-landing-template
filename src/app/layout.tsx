import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { SidebarConfigProvider } from "@/contexts/sidebar-context";
import { inter } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    default: "Nova Analytics — See your data in a new light",
    template: "%s — Nova Analytics",
  },
  description:
    "Nova Analytics turns raw product and revenue data into clear, real-time dashboards your whole team can act on.",
  openGraph: {
    title: "Nova Analytics — See your data in a new light",
    description:
      "Nova Analytics turns raw product and revenue data into clear, real-time dashboards your whole team can act on.",
    siteName: "Nova Analytics",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system" storageKey="nextjs-ui-theme">
          <SidebarConfigProvider>
            {children}
          </SidebarConfigProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
