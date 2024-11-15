import "../globals.css"; // Sử dụng CSS chung
import { ClerkProvider } from "@clerk/nextjs";
import { viVN } from "@clerk/localizations";
import { NextUIProvider } from "@nextui-org/system";
import ReactQueryProvider from "../ReactQueryProvider";
export const metadata = {
  title: "Admin Dashboard",
  description: "Admin area for managing articles",
};

export default function Layout({ children }) {
  return  <>{children}</>;
}
