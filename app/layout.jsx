import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";
import ReactQueryProvider from "./ReactQueryProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { viVN } from "@clerk/localizations";

export const metadata = {
  title: "SCEI",
  description: "Khởi nghiệp, đổi mới, sáng tạo",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider localization={viVN}>
        <body className="w-full overflow-x-hidden">
          <NextUIProvider>
            <ReactQueryProvider>
              {children}
              <Toaster />
            </ReactQueryProvider>
          </NextUIProvider>
        </body>
      </ClerkProvider>  
    </html>
  );
}
