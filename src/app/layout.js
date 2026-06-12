import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Jeel Donga — AI Engineer & Researcher",
    template: "%s | Jeel Donga",
  },
  description:
    "AI Engineer & Full-Stack Developer building production-ready AI systems. Specializing in LLMs, RAG systems, Computer Vision, and scalable applications.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Full-Stack Developer",
    "RAG Systems",
    "LLM",
    "Computer Vision",
    "Deep Learning",
    "Research",
    "Jeel Donga",
  ],
  authors: [{ name: "Jeel Donga" }],
  creator: "Jeel Donga",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jeeldonga.com",
    title: "Jeel Donga — AI Engineer & Researcher",
    description:
      "Building production-ready AI systems that solve real-world problems.",
    siteName: "Jeel Donga Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeel Donga — AI Engineer & Researcher",
    description:
      "Building production-ready AI systems that solve real-world problems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
