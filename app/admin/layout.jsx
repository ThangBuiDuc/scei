import "../globals.css"; // Sử dụng CSS chung

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin area for managing articles",
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Hiển thị nội dung trang admin */}
        {children}
      </body>
    </html>
  );
}
