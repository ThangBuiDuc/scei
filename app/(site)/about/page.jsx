"use client";

import AvataCard from "@/app/_component/AvataCard";
import PartnerCard from "@/app/_component/PartnerCard";
import Link from "next/link";

export default function AboutPage() {
  // Function to handle smooth scrolling with offset
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const offset = 80; // Adjust this value based on your navbar height
    const top = section.offsetTop - offset; // Calculate the scroll position with the offset
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="w-full h-full bg-[#f9f9f9] min-h-screen flex">
      {/* Content Layout */}
      <div className="flex gap-5 max-w-screen-lg mx-auto px-5 py-10 bg-white pt-10">
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl font-bold mb-5 text-[#0083c2]">
            Trung tâm hỗ trợ khởi nghiệp đổi mới sáng tạo
          </h1>

          {/* Introduction Section */}
          <section id="introduction" className="mb-10 h-[700px]">
            <h2 className="text-2xl font-semibold mb-3">
              Giới thiệu về Trung tâm
            </h2>
            <div className="pl-5">
              <p>
                1. Tên tiếng Việt: Trung tâm hỗ trợ Khởi nghiệp Đổi mới sáng tạo
              </p>
              <p>
                2. Tên tiếng Anh: Supporting Center for Entrepreneurship
                Innovation
              </p>
              <p>3. Tên viết tắt: SCEI</p>
              <p>
                4. Loại hình tổ chức:
                <br />- Trung tâm là đơn vị trực thuộc Trường Đại học Quản lý và
                Công nghệ Hải Phòng do Hội đồng trường quyết định thành lập, phê
                duyệt Quy chế Tổ chức hoạt động và Quy chế tài chính của Trung
                tâm.
                <br />- Đơn vị có tư cách pháp nhân, tài khoản, con dấu, mã số
                thuế riêng và có hạch toán độc lập.
              </p>
            </div>
          </section>

          <section id="tam-nhin-su-menh" className="mb-10 h-[700px]">
            <h2 className="text-2xl font-semibold mb-4">Tầm nhìn & Sứ mệnh</h2>
            <div className="flex flex-col items-start gap-3 pl-5">
              <p className="text-xl">1. Tầm nhìn:</p>
              <p className="indent-5 text-base">
                Trở thành Trung tâm hàng đầu trong việc thúc đẩy và hỗ trợ Khởi
                nghiệp Đổi mới sáng tạo, chuyển giao công nghệ tại Hải Phòng nói
                riêng và Khu vực phía Bắc nói chung, góp phần nâng cao năng lực
                cạnh tranh và phát triển bền vững cho các dự án Khởi nghiệp đổi
                mới sáng tạo của các sinh viên, cựu sinh viên, các cá nhân,
                doanh nghiệp, cộng đồng và xã hội.
              </p>
              <p className="text-xl">2. Sứ mạng:</p>
              <p className="indent-5 text-base">
                Trung tâm hỗ trợ Khởi nghiệp Đổi mới sáng tạo có sứ mạng kết nối
                doanh nghiệp, hỗ trợ sinh viên, cựu sinh viên và thực hiện các
                hoạt động Đổi mới sáng tạo, chuyển giao công nghệ và Khởi
                nghiệp.
              </p>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="mb-10 h-[700px]">
            <h2 className="text-2xl font-semibold mb-3">
              Dịch vụ và Chương trình Hỗ trợ
            </h2>
            <p>Trung tâm cung cấp nhiều dịch vụ hỗ trợ khác nhau, bao gồm:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Tư vấn khởi nghiệp</li>
              <li>Hỗ trợ gọi vốn</li>
              <li>Đào tạo kỹ năng</li>
              <li>Các buổi cố vấn cá nhân</li>
            </ul>
            <p className="mt-3">
              Chúng tôi cũng tổ chức các sự kiện, hội thảo và cuộc thi định kỳ
              như hackathon và hội thảo theo ngành.
            </p>
          </section>

          {/* Team Section */}
          <section id="team" className="mb-10 h-[700px]">
            <h2 className="text-2xl font-semibold mb-3">
              Đội ngũ Lãnh đạo và Chuyên gia
            </h2>
            <p>
              Gặp gỡ đội ngũ lãnh đạo, cố vấn và nhân viên của chúng tôi. Các
              chuyên gia của chúng tôi có nhiều kinh nghiệm trong lĩnh vực của
              họ, góp phần thúc đẩy sứ mệnh của trung tâm.
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                Thầy Trần Hữu Trung - Người sáng lập & CEO, với hơn 20 năm kinh
                nghiệm khởi nghiệp.
              </li>
              <li>
                Anh Trần Đình Quý - Cố vấn chính, chuyên về chiến lược và phát
                triển doanh nghiệp khởi nghiệp.
              </li>
              <li>Cùng các chuyên gia khác cam kết hỗ trợ đổi mới sáng tạo.</li>
            </ul>
            <div className="flex justify-between p-8">
              <AvataCard />
              <AvataCard />
              <AvataCard />
            </div>
          </section>

          <section id="partner" className="mb-10 h-[700px]">
            <h2 className="text-2xl font-semibold mb-3">Đối tác của SCEI</h2>
            <p className="indent-5">
              Trung tâm Hỗ trợ Đổi mới và Sáng tạo cam kết đồng hành cùng hệ
              sinh thái khởi nghiệp và sáng tạo, tạo động lực cho sự phát triển
              bền vững. Trung tâm tập trung xây dựng một mạng lưới kết nối mạnh
              mẽ giữa các đối tác quan trọng, từ cơ quan nhà nước, viện nghiên
              cứu, trường đại học, tổ chức tài chính, nhà đầu tư cho đến các
              doanh nghiệp, công ty khởi nghiệp và vườn ươm. Bên cạnh đó, trung
              tâm cũng hợp tác chặt chẽ với các chuyên gia và cố vấn nhằm cung
              cấp dịch vụ tư vấn chuyên sâu, hỗ trợ cộng đồng khởi nghiệp đáp
              ứng đầy đủ mọi nhu cầu đổi mới và phát triển.
            </p>
            <p className="pt-3 indent-5 font-semibold">Các đối tác quan trọng</p>
            <div className="flex justify-between p-8">
              <PartnerCard name={"Đại học quản lý và công nghệ Hải Phòng"}/>
              <PartnerCard name={"Đại học quản lý và công nghệ Hải Phòng"}/>
              <PartnerCard name={"Đại học quản lý và công nghệ Hải Phòng"}/>
            </div>
            <Link className="pt-3 text-blue-500 hover:text-blue-700 font-semibold underline" href={"/contact"}>Trở thành đối tác của SCEI</Link>
          </section>
        </div>

        {/* Menu Sidebar */}
        <div className="sticky top-28 flex flex-col items-start w-2/5 h-fit p-2 pb-10 bg-gray-100">
          <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <ul className="space-y-4">
            <li>
              <button
                className="text-blue-500 hover:underline text-left"
                onClick={() => scrollToSection("introduction")}
              >
                Giới thiệu
              </button>
            </li>
            <li>
              <button
                className="text-blue-500 hover:underline text-left"
                onClick={() => scrollToSection("tam-nhin-su-menh")}
              >
                Tầm nhìn & Sứ mệnh
              </button>
            </li>
            <li>
              <button
                className="text-blue-500 hover:underline text-left"
                onClick={() => scrollToSection("services")}
              >
                Dịch vụ và Chương trình
              </button>
            </li>
            <li>
              <button
                className="text-blue-500 hover:underline text-left"
                onClick={() => scrollToSection("team")}
              >
                Đội ngũ Lãnh đạo và Chuyên gia
              </button>
            </li>
            <li>
              <button
                className="text-blue-500 hover:underline text-left"
                onClick={() => scrollToSection("partner")}
              >
                Đối tác của SCEI
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
