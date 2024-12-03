"use client";
import { useState } from "react";

import AvataCard from "@/app/_component/AvataCard";
import PartnerCard from "@/app/_component/PartnerCard";
import Link from "next/link";
import { Image } from "@nextui-org/image";

export default function AboutPage() {
  const dataMenuAbout = [
    { id: "introduction", name: "Giới thiệu" },
    { id: "tam-nhin-su-menh", name: "Tầm nhìn & Sứ mệnh" },
    { id: "services", name: "Dịch vụ và Chương trình" },
    { id: "team", name: "Đội ngũ Lãnh đạo và Chuyên gia" },
    { id: "partner", name: "Đối tác của SCEI" },
  ];

  const dataTeam = [
    {
      name: "TS.Nguyễn Đại An",
      email: "annd@hpu.edu.vn",
      position: "Ban cố vấn",
      img: "/team/nguyendaian.webp",
    },
    {
      name: "Chuyên gia Lê Đình Mạnh",
      email: "ctm.manhledinh@gmail.com",
      position: "Ban cố vấn",
      img: "/team/ledinhmanh.webp",
    },
    {
      name: "ThS.Phạm Văn Hồi",
      email: "",
      position: "Ban cố vấn",
      img: "/team/phamvanhoi.webp",
    },
    {
      name: "ThS.Nguyễn Thế Hùng",
      email: "",
      position: "Ban cố vấn",
      img: "/team/nguyen-the-hung.webp",
    },
    {
      name: "TS.Nguyễn Thị Hoàng Đan",
      email: "dannth@hpu.edu.vn",
      position: "Ban cố vấn",
      img: "/team/nguyenthihoangdan.webp",
    },
    {
      name: "ThS.Phan Giang Sơn",
      email: "",
      position: "Ban cố vấn",
      img: "/team/phansongiang.webp",
    },
    {
      name: "ThS.Vũ Trọng Chiến",
      email: "chienvt@hpu.edu.vn",
      position: "Ban cố vấn",
      img: "/team/vutrongchien.webp",
    },
    {
      name: "ThS.Đỗ Văn Tuyên",
      email: "tuyendv@hpu.edu.vn",
      position: "Ban cố vấn",
      img: "/team/tuyendv.webp",
    },
    {
      name: "ThS.Trần Hữu Trung",
      email: "",
      position: "Ban cố vấn",
      img: "/team/thaytrung2.webp",
    },
  ];

  const [activeMenu, setActiveMenu] = useState(0);
  const handleClickItemMenu = (id) => {
    scrollToSection(id);
    setActiveMenu(id);
  };

  // Function to handle smooth scrolling with offset
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const offset = 20;
    const top = section.offsetTop - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="w-full h-full bg-gray-50 min-h-screen flex">
      {/* Content Layout */}
      <div className="flex gap-5 max-w-screen-xl w-full mx-auto px-5 py-10 bg-white shadow-lg rounded-lg relative text-justify">
        {/* Left Content */}
        <div className="flex flex-col gap-8 w-full md:w-5/6">
          <h1 className="text-4xl font-extrabold mb-5 text-[#007bb5] text-center leading-tight">
            Trung tâm hỗ trợ khởi nghiệp đổi mới sáng tạo
          </h1>

          {/* Introduction Section */}
          <section id="introduction" className="min-h-[500px] pb-3 border-b">
            <h2 className="text-center sm:text-left text-3xl font-semibold mb-4 text-gray-800">
              Giới thiệu về Trung tâm
            </h2>
            <div className="pl-6 text-gray-700 text-lg leading-relaxed">
              <p>
                <span className="font-bold">1.</span> Tên tiếng Việt: Trung tâm
                hỗ trợ Khởi nghiệp Đổi mới sáng tạo
              </p>
              <p>
                <span className="font-bold">2.</span> Tên tiếng Anh: Supporting
                Center for Entrepreneurship Innovation
              </p>
              <p>
                <span className="font-bold">3.</span> Tên viết tắt: SCEI
              </p>
              <p>
                <span className="font-bold">4.</span> Loại hình tổ chức:
              </p>
              <ul className="list-disc pl-8 leading-relaxed">
                <li>
                  Trực thuộc Trường Đại học Quản lý và Công nghệ Hải Phòng
                </li>
                <li>Có tư cách pháp nhân, tài khoản và mã số thuế riêng</li>
                <li>Hoạt động với cơ chế tài chính độc lập</li>
              </ul>
            </div>
            <Image
              className="object-cover h-[300px] md:h-[400px] w-full mt-5"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              alt="anh 1"
              src="/aboutpic/anh1.webp"
              placeholder="blur"
            />
          </section>

          {/* Vision Section */}
          <section
            id="tam-nhin-su-menh"
            className="min-h-[500px] pb-3 border-b"
          >
            <h2 className="text-center sm:text-left text-3xl font-semibold mb-4 text-gray-800">
              Tầm nhìn & Sứ mệnh
            </h2>
            <div className="text-gray-700 text-lg leading-relaxed">
              <p className="mb-4">
                <span className="font-bold">1. Tầm nhìn:</span> Trở thành Trung
                tâm hàng đầu trong việc thúc đẩy và hỗ trợ Khởi nghiệp Đổi mới
                sáng tạo, chuyển giao công nghệ tại Hải Phòng nói riêng và khu
                vực phía Bắc nói chung.
              </p>
              <p>
                <span className="font-bold">2. Sứ mệnh:</span> Kết nối doanh
                nghiệp, hỗ trợ sinh viên, cựu sinh viên và thực hiện các hoạt
                động Đổi mới sáng tạo, chuyển giao công nghệ và Khởi nghiệp.
              </p>
            </div>
            <Image
              className="object-cover rounded-3xl h-[300px] md:h-[400px] w-full mt-5"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              alt="anh 1"
              src="/aboutpic/anh1.webp"
              placeholder="blur"
            />
          </section>

          {/* Services Section */}
          <section id="services" className="mb-10 min-h-[500px] pb-3 border-b">
            <h2 className="text-center sm:text-left text-3xl font-semibold mb-3 text-gray-800">
              Dịch vụ và Chương trình Hỗ trợ
            </h2>
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
                Chúng tôi cũng tổ chức các sự kiện, hội thảo và cuộc thi định kỳ
                như hackathon và hội thảo theo ngành.
              </p>
            </div>
            <Image
              className="object-cover h-[300px] md:h-[400px] w-full mt-5"
              width="100%"
              height="auto"
              alt="anh dich vu"
              src="/aboutpic/dichvu.webp"
            />
          </section>

          {/* Team Section */}
          <section id="team" className="mb-10 min-h-[500px] pb-3 border-b">
            <h2 className="text-center sm:text-left text-3xl font-semibold mb-3 text-gray-800">
              Đội ngũ Lãnh đạo và Chuyên gia
            </h2>
            <div className="text-gray-700 text-lg leading-relaxed">
              <p className="mb-4">
                Gặp gỡ đội ngũ lãnh đạo, cố vấn và nhân viên của chúng tôi. Các
                chuyên gia của chúng tôi có nhiều kinh nghiệm trong lĩnh vực của
                họ, góp phần thúc đẩy sứ mệnh của trung tâm.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-5">
              {dataTeam.map((item, index) => (
                <AvataCard
                  key={index}
                  name={item.name}
                  position={item.position}
                  email={item?.email}
                  img={item.img}
                />
              ))}
            </div>
          </section>

          {/* Partner Section */}
          <section id="partner" className="min-h-[500px] pb-3">
            <h2 className="text-center sm:text-left text-3xl font-semibold mb-3 text-gray-800">
              Đối tác của SCEI
            </h2>
            <div className="text-gray-700 text-lg leading-relaxed mb-5">
              <p>
                Trung tâm Hỗ trợ Đổi mới và Sáng tạo cam kết đồng hành cùng hệ
                sinh thái khởi nghiệp và sáng tạo, tạo động lực cho sự phát
                triển bền vững. Trung tâm tập trung xây dựng một mạng lưới kết
                nối mạnh mẽ giữa các đối tác quan trọng.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 pb-10">
              <PartnerCard name="Đại học quản lý và công nghệ Hải Phòng" />
              {/* <PartnerCard name="Đại học quản lý và công nghệ Hải Phòng" />
              <PartnerCard name="Đại học quản lý và công nghệ Hải Phòng" /> */}
            </div>
            <Link
              href="/contact"
              className="text-blue-500 hover:underline font-medium"
            >
              Trở thành đối tác của SCEI tại đây!
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
      </div>
    </div>
  );
}
