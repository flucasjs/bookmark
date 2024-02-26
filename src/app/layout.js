import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ 
  subsets: ["latin"], 
  variable: "--font-rubik",
});

export const metadata = {
  title: "Frontend Mentor | Bookmark landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={rubik.className}>
      <body>{children}</body>
    </html>
  );
}
