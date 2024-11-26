"use client";
import {useState} from "react";

import AvataCard from "@/app/_component/AvataCard";
import PartnerCard from "@/app/_component/PartnerCard";
import {Image} from "@nextui-org/react";
import Link from "next/link";
import {
  Navbar,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/navbar";

export default function AboutPage() {
  const dataMenuAbout = [
    {
      id: "introduction",
      name: "Giới thiệu"
    },
    {
      id: "tam-nhin-su-menh",
      name: "Tầm nhìn & Sứ mệnh"
    },
    {
      id: "services",
      name: " Dịch vụ và Chương trình"
    },
    {
      id: "team",
      name: "Đội ngũ Lãnh đạo và Chuyên gia"
    },
    {
      id: "partner",
      name: "Đối tác của SCEI"
    },
  ]
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeMenu, setActiveMenu] = useState(0);
  const handleClickItemMenu = (id) => {
    scrollToSection(id);
    setActiveMenu(id);
  };

  // Function to handle smooth scrolling with offset
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const offset = 20; // Adjust this value based on your navbar height
    const top = section.offsetTop - offset; // Calculate the scroll position with the offset
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="w-full h-full bg-gray-50 min-h-screen flex">
      {/* Content Layout */}
      <div className="flex gap-5 max-w-screen-xl w-full mx-auto px-5 py-10 bg-white shadow-lg rounded-lg relative text-justify">
        {/* Left Content */}
        <div className="flex flex-col gap-8 w-full md:w-5/6 pr-5">
          <h1 className="text-4xl font-extrabold mb-5 text-[#007bb5] leading-tight">
            Trung tâm hỗ trợ khởi nghiệp đổi mới sáng tạo
          </h1>

          {/* Introduction Section */}
          <section id="introduction" className="min-h-[700px] border-b">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Giới thiệu về Trung tâm</h2>
            <div className="pl-6 text-gray-700 text-lg leading-relaxed">
              <p>
                <span className="font-bold">1.</span> Tên tiếng Việt: Trung tâm hỗ trợ Khởi nghiệp Đổi mới sáng tạo
              </p>
              <p>
                <span className="font-bold">2.</span> Tên tiếng Anh: Supporting Center for Entrepreneurship Innovation
              </p>
              <p>
                <span className="font-bold">3.</span> Tên viết tắt: SCEI
              </p>
              <p>
                <span className="font-bold">4.</span> Loại hình tổ chức:
              </p>
              <ul className="list-disc pl-8 leading-relaxed">
                <li>Trực thuộc Trường Đại học Quản lý và Công nghệ Hải Phòng</li>
                <li>Có tư cách pháp nhân, tài khoản và mã số thuế riêng</li>
                <li>Hoạt động với cơ chế tài chính độc lập</li>
              </ul>
            </div>
            <div>
              
            </div>
            <Image
              className="object-cover h-[300px] md:h-[400px] w-full mt-5"
              width="100%"
              alt="anh 1"
              src="/anh1.jpg"
            />
          </section>

          {/* Vision Section */}
          <section id="tam-nhin-su-menh" className="min-h-[700px] border-b">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Tầm nhìn & Sứ mệnh</h2>
            <div className="text-gray-700 text-lg leading-relaxed">
              <p className="mb-4">
                <span className="font-bold">1. Tầm nhìn:</span> Trở thành Trung tâm hàng đầu trong việc thúc đẩy và hỗ trợ
                Khởi nghiệp Đổi mới sáng tạo, chuyển giao công nghệ tại Hải Phòng nói riêng và khu vực phía Bắc nói
                chung.
              </p>
              <p>
                <span className="font-bold">2. Sứ mệnh:</span> Kết nối doanh nghiệp, hỗ trợ sinh viên, cựu sinh viên và
                thực hiện các hoạt động Đổi mới sáng tạo, chuyển giao công nghệ và Khởi nghiệp.
              </p>
            </div>
            <Image
              className="object-cover h-[300px] md:h-[400px] w-full mt-5"
              width="100%"
              alt="anh 1"
              src="/anh1.jpg"
            />
          </section>

          {/* Services Section */}
          <section id="services" className="min-h-[700px] border-b pb-6">
            <h2 className="text-3xl font-semibold mb-3 text-gray-800">Dịch vụ và Chương trình Hỗ trợ</h2>
            <div className="text-gray-700 text-lg leading-relaxed">
              <p className="mb-3">
                Trung tâm cung cấp nhiều dịch vụ hỗ trợ khác nhau, bao gồm:
              </p>
              <ul className="list-disc list-inside">
                <li>Tư vấn khởi nghiệp</li>
                <li>Hỗ trợ gọi vốn</li>
                <li>Đào tạo kỹ năng</li>
                <li>Các buổi cố vấn cá nhân</li>
              </ul>
              <p className="mt-3">
                Chúng tôi cũng tổ chức các sự kiện, hội thảo và cuộc thi định kỳ như hackathon và hội thảo theo ngành.
              </p>
            </div>
            <Image
              className="object-cover h-[300px] md:h-[400px] w-full mt-5"
              width="100%"
              alt="anh 1"
              src="/anh1.jpg"
            />
          </section>

          {/* Team Section */}
          <section id="team" className="mb-10 min-h-[700px] border-b pb-6">
            <h2 className="text-3xl font-semibold mb-3 text-gray-800">Đội ngũ Lãnh đạo và Chuyên gia</h2>
            <div className="text-gray-700 text-lg leading-relaxed">
              <p className="mb-4">
                Gặp gỡ đội ngũ lãnh đạo, cố vấn và nhân viên của chúng tôi. Các chuyên gia của chúng tôi có nhiều kinh
                nghiệm trong lĩnh vực của họ, góp phần thúc đẩy sứ mệnh của trung tâm.
              </p>
              <ul className="list-disc list-inside">
                <li>Thầy Trần Hữu Trung - Người sáng lập & CEO</li>
                <li>Anh Trần Đình Quý - Cố vấn chính</li>
                <li>Cùng các chuyên gia khác cam kết hỗ trợ đổi mới sáng tạo.</li>
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-5">
              <AvataCard />
              <AvataCard />
              <AvataCard />
            </div>
          </section>

          {/* Partner Section */}
          <section id="partner" className="min-h-[700px]">
            <h2 className="text-3xl font-semibold mb-3 text-gray-800">Đối tác của SCEI</h2>
            <div className="text-gray-700 text-lg leading-relaxed mb-5">
              <p>
                Trung tâm Hỗ trợ Đổi mới và Sáng tạo cam kết đồng hành cùng hệ sinh thái khởi nghiệp và sáng tạo, tạo
                động lực cho sự phát triển bền vững. Trung tâm tập trung xây dựng một mạng lưới kết nối mạnh mẽ giữa các
                đối tác quan trọng.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <PartnerCard name="Đại học quản lý và công nghệ Hải Phòng" />
              <PartnerCard name="Đại học quản lý và công nghệ Hải Phòng" />
              <PartnerCard name="Đại học quản lý và công nghệ Hải Phòng" />
            </div>
            <Link href="/contact" className="text-blue-500 hover:underline font-medium">
              Trở thành đối tác của SCEI
            </Link>
          </section>
        </div>

        {/* Menu Sidebar */}
        <div className="hidden sticky top-28 right-0 md:flex flex-col items-start md:w-1/6 h-fit p-4 bg-gray-100 shadow-lg rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Menu</h3>
          <ul className="space-y-4 w-full">
            {dataMenuAbout.map((item) => (
              <li key={item.id}>
                <button
                  className="text-gray-700 hover:text-blue-500 font-medium text-left w-full transition-all duration-300"
                  onClick={() => handleClickItemMenu(item.id)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navbar */}
        {/* <Navbar className="hidden bg-gray-100">
          <NavbarMenu className="bg-white/80 backdrop-blur-sm shadow-md">
            {dataMenuAbout.map((item) => (
              <NavbarMenuItem key={item.id}>
                <button
                  onClick={() => handleClickItemMenu(item.id)}
                  className={`${
                    activeMenu === item.id ? "text-[#007bb5]" : "text-gray-700"
                  } text-lg font-medium`}
                >
                  {item.name}
                </button>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar> */}
      </div>
    </div>
  );
}
