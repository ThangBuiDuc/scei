import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full mt-10 h-[400px] flex border-t-2 ">
      <div className="max-w-screen-lg w-full h-full mx-auto flex flex-col items-center justify-center gap-3">
        <p className="font-bold text-xl md:text-2xl text-center text-[#0083c2]">
          TRUNG TÂM HỖ TRỢ KHỞI NGHIỆP ĐỔI MỚI SÁNG TẠO
        </p>
        <div className="w-full sm:w-1/2 flex flex-col p-3">
          {/* Phần thông tin liên hệ */}
          <div className="w-full flex flex-col space-y-3">
            <div className="flex items-center text-gray-600 font-semibold gap-5">
              <FaMapMarkerAlt className="h-5 w-8 mr-2" />
              Địa chỉ: Số 36, đường Dân lập, phường Dư Hàng Kênh, quận Lê Chân,
              thành phố Hải Phòng
            </div>
            <div className="flex items-center text-gray-600 font-semibold gap-5">
              <FaEnvelope className="h-5 w-5 mr-2" />
              Email: hpu@hpu.edu.vn
            </div>
            <div className="flex items-center text-gray-600 font-semibold gap-5">
              <FaPhoneAlt className="h-5 w-5 mr-2" />
              Số điện thoại: 0936 821 821 - 0901 598 698
            </div>
            <div className="flex items-center text-gray-600 font-semibold gap-5">
              <FaClock className="h-5 w-5 mr-2" />
              Thời gian làm việc: Thứ 2 - sáng thứ 7
            </div>
          </div>
        </div>
        <div className="border-t-2 w-full border-gray-300"></div>
        <div className="flex justify-around w-full">
          <Link href="/about" aria-current="page" className="text-medium font-semibold block">
            Về SCEI
          </Link>
          <Link href="/articles" aria-current="page" className="text-medium font-semibold block">
            Tin tức
          </Link>
          <Link href="/events" aria-current="page" className="text-medium font-semibold block">
            Sự kiện
          </Link>
          <Link href="/contact" aria-current="page" className="text-medium font-semibold block">
            Liên hệ
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
