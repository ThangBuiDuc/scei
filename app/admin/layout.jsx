import "../globals.css"; // Sử dụng CSS chung
import AdminSideBar from "../_hardComponent/adminSideBar/AdminSideBar";

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin area for managing articles",
};

export default function Layout({ children }) {
  return (
    <div className="w-full h-screen flex">
      <AdminSideBar />
      <div className="w-4/5">{children}</div>
      
    </div>
  );
}
