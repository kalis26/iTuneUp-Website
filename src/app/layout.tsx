import { SfProDisplay } from "@/fonts";
import Navbar from "@/components/navbar"
import Footer from "@/components/footer";
import "./globals.css";

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${SfProDisplay.className} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
