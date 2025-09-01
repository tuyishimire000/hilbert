import type { Metadata } from "next";
import "./globals.css";

const inter = { className: "font-sans" };

export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Full-stack developer and creative technologist passionate about building innovative digital experiences.",
  keywords: ["portfolio", "developer", "full-stack", "web development", "software engineer"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name - Portfolio",
    description: "Full-stack developer and creative technologist",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
