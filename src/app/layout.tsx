import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import BottomNavBar from "../components/BottomNavBar";

export const metadata: Metadata = {
  title: "OkunLand",
  description:
    "Okunland is a platform for people to connect with each other and share their stories.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-auto justify-center">
        <Navbar />
        {children}
        <BottomNavBar />
      </body>
    </html>
  );
}
