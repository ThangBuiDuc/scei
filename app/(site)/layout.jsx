import MyNavbar from "../_hardComponent/navbar/Navbar";
import Footer from "../_hardComponent/footer/Footer";
export const metadata = {
  title: "Trung tâm hỗ trợ khởi nghiệp đổi mới sáng tạo",
  description: "Khởi nghiệp, đổi mới, sáng tạo",
};

export default function Layout({ children }) {
  return (
    <div className="min-h-screen w-full bg-white text-black">
      <MyNavbar />
      {children}
      <Footer />
    </div>
  );
}
