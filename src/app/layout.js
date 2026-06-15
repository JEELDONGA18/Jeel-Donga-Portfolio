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
  metadataBase: new URL("https://jeeldonga.me"),

  title: {
    default: "Jeel Donga | AI Engineer, Data Scientist & Full-Stack Developer",
    template: "%s | Jeel Donga",
  },

  description:
    "Portfolio of Jeel Donga — Computer Engineering student specializing in Artificial Intelligence, Machine Learning, Data Science, Computer Vision, FastAPI backend development, and Full-Stack Applications. Explore AI projects, research, achievements, and technical work.",

  keywords: [
    "Jeel Donga",
    "AI Engineer",
    "Machine Learning Engineer",
    "Data Scientist",
    "Computer Vision",
    "Deep Learning",
    "Artificial Intelligence",
    "Python Developer",
    "FastAPI",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Research Engineer",
    "Medical Image Segmentation",
    "YOLOv8",
    "TensorFlow",
    "PyTorch",
    "Data Analytics",
    "Portfolio",
    "SCET",
  ],

  authors: [
    {
      name: "Jeel Donga",
      url: "https://jeeldonga.me",
    },
  ],

  creator: "Jeel Donga",
  publisher: "Jeel Donga",

  category: "Technology",

  alternates: {
    canonical: "https://jeeldonga.me",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jeeldonga.me",
    siteName: "Jeel Donga Portfolio",

    title:
      "Jeel Donga | AI Engineer, Data Scientist & Full-Stack Developer",

    description:
      "Building intelligent systems using AI, Computer Vision, Data Science, and Full-Stack Technologies.",

    images: [
      {
        url: "/Jeel_Donga.jpg",
        width: 1200,
        height: 630,
        alt: "Jeel Donga Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Jeel Donga | AI Engineer, Data Scientist & Full-Stack Developer",

    description:
      "AI, Data Science, Computer Vision, Research, and Full-Stack Development Portfolio.",

    images: ["/Jeel_Donga.jpg"],
  },

  applicationName: "Jeel Donga Portfolio",

  verification: {
    google: "ADD_GOOGLE_SEARCH_CONSOLE_CODE_HERE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
