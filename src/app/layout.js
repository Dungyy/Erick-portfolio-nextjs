import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Erick Munoz | Software Developer',
  description: 'Erick Munoz - Full Stack Developer specializing in the MERN stack, web development, and application security.',
  keywords: 'Erick Munoz, Erick Munoz Ontiverios, Software Developer, Full Stack Developer, MERN Stack, Web Development, Application Security',
  viewport: 'width=device-width, initial-scale=1'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}