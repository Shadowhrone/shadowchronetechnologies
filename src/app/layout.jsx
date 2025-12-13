import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Weight } from "lucide-react";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  Weight: ["200","300","400", "500","600","700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
   weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Home | Shadowchrone tech",
  description: "shadowchrone technologies ltd Home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
         
        {children}
      </body>
    </html>
  );
}
