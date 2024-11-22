"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Input, Textarea, Button, Image } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";
import { resgisContact } from "@/utils/funcionApi/create";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [mutating, setMutating] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    reason: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const mutation = useMutation({
    mutationFn: ({ object }) => resgisContact(object),
    onSuccess: () => {
      setMutating(false);
      setFormData({ name: "", phoneNumber: "", email: "", reason: "" });
      toast.success(
        "Gửi biểu mẫu thành công! Chúng tôi sẽ sớm kết nối đến bạn",
        { duration: 4000, position: "top-center" }
      );
    },
    onError: () => {
      setMutating(false);
      toast.error("Có lỗi xảy ra. Vui lòng thử lại.");
    },
  });

  const handleSubmit = () => {
    console.log("Dữ liệu biểu mẫu đã gửi:", formData);
    const object = {
      name: formData.name,
      email: formData.email,
      phone_number: formData.phoneNumber,
      content: formData.reason,
    };
    setMutating(true);
    mutation.mutate({ object });
  };

  return (
    <div className="w-full h-full bg-[#f9f9f9] min-h-screen flex">
      <div className="flex flex-col items-start gap-5 max-w-screen-xl mx-auto px-5 py-5 bg-white w-full">
        <h1 className="text-3xl font-bold">Liên hệ</h1>
        <p className="italic text-[#0083c2]">
          Vui lòng điền thông tin vào biểu mẫu dưới đây nếu bạn cần liên hệ với
          Chúng tôi!
        </p>
        <div className="flex flex-col sm:flex-row w-full gap-5 ">
          <div className="w-full sm:w-1/2 items-start p-3">
            <form>
              <div className="space-y-5">
                <Input
                  isRequired
                  fullWidth
                  label="Họ tên"
                  name="name"
                  placeholder="Nhập họ tên của bạn"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <Input
                  isRequired
                  fullWidth
                  label="Số điện thoại"
                  name="phoneNumber"
                  placeholder="Nhập số điện thoại của bạn"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
                <Input
                  isRequired
                  fullWidth
                  label="Email"
                  name="email"
                  placeholder="Nhập email của bạn"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <Textarea
                  isRequired
                  fullWidth
                  label="Lý do liên hệ"
                  name="reason"
                  placeholder="Mô tả lý do bạn muốn liên hệ với chúng tôi"
                  value={formData.reason}
                  onChange={handleInputChange}
                />
                {formData.email &&
                  formData.name &&
                  formData.phoneNumber &&
                  formData.reason && (
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        handleSubmit();
                      }}
                      color="primary"
                      className="mt-3"
                    >
                      {mutating ? (
                        <span className="loading loading-spinner loading-sm bg-primary"></span>
                      ) : (
                        "Gửi"
                      )}
                    </Button>
                  )}
              </div>
            </form>
          </div>

          <div className="w-full sm:w-1/2 flex flex-col p-3">
            {/* Phần thông tin liên hệ */}
            <div className="w-full flex flex-col space-y-3">
              <div className="flex items-center text-gray-600 font-semibold gap-5">
                <FaMapMarkerAlt className="h-5 w-8 mr-2" />
                Địa chỉ: Số 36, đường Dân lập, phường Dư Hàng Kênh, quận Lê
                Chân, thành phố Hải Phòng
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
        </div>
        <div className="w-full">
          <Image
            removeWrapper
            alt="contact-img"
            className="w-full h-auto object-cover"
            src="https://lh7-us.googleusercontent.com/4OR55rQHQCXD6Hc6Sjvp2XUV0S9nk777Mnh_xSpJV3aq7Nhyqtz204XjR1hdDtOfFs-mSiZNPa30byVo1Bu9cjFPPeWZIpR-faWQsrwiu-bUHk2SuMDuH4TA7K6PvkfJ4ntiLUgNCaT0KwxUHdlwpLI"
          />
        </div>
      </div>
    </div>
  );
}
