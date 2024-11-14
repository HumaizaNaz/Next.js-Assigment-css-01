import { Oswald } from "next/font/google"
import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const oswald =Oswald({
  subsets:["latin"],
  weight: ["300", "400", "500", "700"],
})
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Humaiza Naz",
  description: "Humaiza Naz Institute",
  icons: {
    icon: "/middle-app.jpg",  // Replace with your actual path if needed
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.className}`}
        data-new-gr-c-s-check-loaded="14.1202.0"
        data-gr-ext-installed=""
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
