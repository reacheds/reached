import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dispare | Open-Source Discord Bot & Web Dashboard",
  description: "Modern, high-performance community monorepo powered by Next.js, Discord.js, and Turborepo.",
  keywords: ["Discord Bot", "Next.js", "Monorepo", "Turborepo", "TypeScript", "Drizzle ORM"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
