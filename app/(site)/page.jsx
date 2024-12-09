import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/react";
import ArticleSlide from "../_component/articleSlide/ArticleSlide";
import EventSlide from "../_component/eventSlide/EventSlide";
import { getArticlesData, getEventsData } from "@/utils/funcionApi/select";

export default async function HomePage() {
  const articlesRes = await getArticlesData(10, 0);
  const eventsRes = await getEventsData(10, 0);

  const articles = articlesRes.data.result;
  const events = eventsRes.data.result;
  return (
    <div className="w-full h-full">
      <div className="w-full bg-slate-600 ">
        <Image
          alt="homeimg"
          src="/anhhomegiamdungluong4.webp"
          width={1920}
          height={900}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="object-cover"
          priority
        />
      </div>

      <div className="w-full h-full flex flex-col items-center bg-slate-100">
        <div className="max-w-screen-xl flex flex-col items-center py-10 px-4 md:px-0 gap-y-2 ">
          <h1 className="text-[#0083c2] font-bold text-3xl md:text-5xl text-center">
            TRUNG TÂM HỖ TRỢ KHỞI NGHIỆP ĐỔI MỚI SÁNG TẠO
          </h1>
          <h3 className="text-[#0083c2] text-2xl md:text-4xl font-semibold text-center">
            Trường Đại học Quản lý và Công nghệ Hải Phòng
          </h3>
          <p className="max-w-screen-xl leading-relaxed text-center text-lg">
            Kết nối doanh nghiệp khởi nghiệp ĐMST và tổ chức các sự kiện, đào
            tạo đáp ứng nhu cầu phát triển. <br />
            Hỗ trợ sinh viên qua tư vấn, hội thảo và xây dựng hệ sinh thái khởi
            nghiệp trong trường.
          </p>
        </div>
      </div>

      <div className="w-full h-full flex flex-col items-center">
        <div className="max-w-screen-xl flex flex-col lg:flex-row py-5">
          <div className="w-full lg:w-1/2 h-full flex flex-col lg:m-5 px-4 lg:px-0 gap-5 justify-start">
            <h3 className="text-center">Giới thiệu chung</h3>
            <p className="text-justify">
              Trung tâm Hỗ trợ Khởi nghiệp Đổi mới Sáng tạo (SCEI) là đơn vị
              tiên phong tại Hải Phòng, chuyên cung cấp các dịch vụ tư vấn, hỗ
              trợ và đào tạo nhằm thúc đẩy tinh thần khởi nghiệp và phát triển
              các dự án đổi mới sáng tạo. Với mục tiêu xây dựng một hệ sinh thái
              khởi nghiệp mạnh mẽ, SCEI đồng hành cùng các cá nhân, doanh nghiệp
              và cộng đồng trong việc nâng cao năng lực cạnh tranh, chuyển giao
              công nghệ và phát triển bền vững.
            </p>
            <Button
              as={Link}
              href="/about"
              size="md"
              color="primary"
              className="w-fit"
            >
              Xem thêm
            </Button>
          </div>
          <div className="w-full lg:w-1/2 h-full lg:m-5 gap-5 p-2 lg:p-0">
            <Image
              width={0}
              height={0}
              alt="createImage"
              src="/demo2.webp"
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="w-full m-auto object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-full flex flex-col items-center">
        <div className="max-w-screen-xl w-full flex flex-col lg:flex-row items-stretch py-5 gap-2">
          <div className="w-full lg:w-2/3 flex flex-col overflow-hidden">
            <Link href="/events " underline="hover">
              <h3 className="px-4">Sự kiện</h3>
            </Link>
            <div className="w-full h-full pt-5">
              <EventSlide events={events} />
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col">
            <Link href="/articles" underline="hover">
              <h3 className="px-4">Tin tức</h3>
            </Link>
            <div className="w-full h-full pt-5">
              <ArticleSlide articles={articles} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
