import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lufixa",
  description: "Digital Solutions that drives results.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${robotoMono.variable} font-roboto-mono antialiased bg-silent-300`}>
        {children}
      </body>
    </html>
  );
}
