import MyNavbar from "../_hardComponent/navbar/Navbar";

export const metadata = {
  title: "SCEI",
  description: "Khởi nghiệp, đổi mới, sáng tạo",
};

export default function Layout({ children }) {
  return (
    <div className="min-h-screen w-full bg-white text-black">
      <MyNavbar />
      {children}
    </div>
  );
}
