import "../globals.css"; // Sử dụng CSS chung
import Sidebar from "../_hardComponent/adminSideBar/AdminSideBar";

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin area for managing articles",
};

export default function Layout({ children }) {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <div className="flex flex-col h-full w-full flex-1">
        <header className="h-16 bg-white shadow-sm flex-shrink-0"></header>
        <main className="p-6 flex-1 bg-gray-50 overflow-y-hidden">{children}</main>
      </div>
    </div>
  );
}
