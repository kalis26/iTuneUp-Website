import { SfProText, SfProDisplay } from "@/fonts";
import Navbar from "@/components/navbar"
import "./globals.css";

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${SfProText.className} ${SfProDisplay.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
