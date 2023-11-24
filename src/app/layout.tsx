import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const quicksand = Quicksand({ weight: "400", subsets: ["latin"] });

const inter = Inter({ subsets: ["latin"] });

// export const quicksand = Quicksand({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cordelia's Next Practice",
  description: "An app designed to practice my epic next and tailwind skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        <main
          className={`${quicksand.className} flex flex-col justify-between p-2 text-center`}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

// 1284
