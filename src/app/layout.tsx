import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "./_components/client-wrapper/client-wrapper";
import {Toaster} from "react-hot-toast";

export const metadata: Metadata = {
  title: "فروشگاه آنلاین",
  description: "بهترین فروشگاه آنلاین برای خرید همه‌چیز!",
  icons: "/images/logo/favicon.ico",
  keywords: "خرید آنلاین, فروشگاه اینترنتی, بهترین قیمت",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>
          {children}
          <Toaster position="top-center" />
        </ClientWrapper>
      </body>
    </html>
  );
}
