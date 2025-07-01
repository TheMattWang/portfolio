import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = {
  title: "Matthew Wang | Software Engineer",
  description: "Personal portfolio and blog of Matthew Wang, a software engineer passionate about building great web experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.variable} ${playfair.variable} font-sans min-h-screen bg-stone-50`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
