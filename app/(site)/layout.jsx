import "../globals.css";
import { NextUIProvider } from "@nextui-org/react";
import MyNavbar from "../_hardComponent/navbar/Navbar";
import { Toaster } from "react-hot-toast";
import ReactQueryProvider from "../ReactQueryProvider";

export const metadata = {
  title: "SCEI",
  description: "Khởi nghiệp, đổi mới, sáng tạo",
};

export default function UserLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full overflow-x-hidden">
        <NextUIProvider>
          <ReactQueryProvider>
            <div className="min-h-screen w-full bg-white text-black">
              <MyNavbar />
              {children}
              <Toaster />
            </div>
          </ReactQueryProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
