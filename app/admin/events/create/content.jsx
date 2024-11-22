"use client";

import React, { useState } from "react";
import {
  Input,
  Textarea,
  Button,
  Select,
  SelectItem,
  DateInput,
} from "@nextui-org/react";
import { now, getLocalTimeZone } from "@internationalized/date";

const formatDateToISOString = (dateObj) => {
  const { year, month, day, hour, minute, second, millisecond } = dateObj;

  const pad = (num) => String(num).padStart(2, "0");

  return `${year}-${pad(month)}-${pad(day)}T${pad(hour)}:${pad(minute)}:${pad(second)}.${millisecond}Z`;
};

const Content = ({ types = { result: [] }, formats = { result: [] } }) => {
  const [formData, setFormData] = useState({
    title: "",
    image_url: "",
    description: "",
    start_time: now(getLocalTimeZone()),
    end_time: now(getLocalTimeZone()),
    registration_time: now(getLocalTimeZone()),
    location: "",
    docs_url: "",
    event_type_id: "",
    event_format_id: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    const formattedData = {
      ...formData,
      start_time: formatDateToISOString(formData.start_time),
      end_time: formatDateToISOString(formData.end_time),
      registration_time: formatDateToISOString(formData.registration_time),
    };

    if (new Date(formattedData.end_time) <= new Date(formattedData.start_time)) {
      alert("Thời gian kết thúc phải sau thời gian bắt đầu.");
      return;
    }

    if (new Date(formattedData.registration_time) < new Date()) {
      alert("Hạn đăng ký không thể là thời gian trong quá khứ.");
      return;
    }

    console.log("Dữ liệu sự kiện (validated & formatted):", formattedData);
  };

  return (
    <div className="w-full h-full bg-white p-6 overflow-y-auto">
      <h1 className="text-xl font-bold mb-6">Tạo Sự Kiện</h1>
      <div className="flex flex-col gap-4">
        <Input
          fullWidth
          label="Tiêu đề"
          placeholder="Nhập tiêu đề sự kiện"
          value={formData.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />
        <Input
          fullWidth
          label="Hình ảnh URL"
          placeholder="Nhập URL hình ảnh"
          value={formData.image_url}
          onChange={(e) => handleChange("image_url", e.target.value)}
        />
        <Textarea
          fullWidth
          label="Mô tả"
          placeholder="Nhập mô tả sự kiện"
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />
        <div className="w-full max-w-xl flex flex-row gap-4">
          <DateInput
            label="Bắt đầu từ"
            value={formData.start_time}
            onChange={(value) => handleChange("start_time", value)}
            labelPlacement="outside"
          />
          <DateInput
            label="Đến"
            value={formData.end_time}
            onChange={(value) => handleChange("end_time", value)}
            labelPlacement="outside"
          />
        </div>
        <DateInput
          label="Hạn đăng ký"
          value={formData.registration_time}
          onChange={(value) => handleChange("registration_time", value)}
          labelPlacement="outside"
        />
        <Input
          fullWidth
          label="Địa điểm"
          placeholder="Nhập địa điểm tổ chức"
          value={formData.location}
          onChange={(e) => handleChange("location", e.target.value)}
        />
        <Input
          fullWidth
          label="Tài liệu URL"
          placeholder="Nhập URL tài liệu sự kiện"
          value={formData.docs_url}
          onChange={(e) => handleChange("docs_url", e.target.value)}
        />
        <div className="flex gap-4">
          <Select
            label="Loại sự kiện"
            variant="bordered"
            placeholder="Chọn loại sự kiện"
            selectedKeys={
              formData.event_type_id
                ? new Set([formData.event_type_id])
                : new Set()
            }
            className="max-w-xs"
            onSelectionChange={(keys) => {
              const value = Array.from(keys).pop();
              handleChange("event_type_id", value);
            }}
          >
            {types.result.map((type) => (
              <SelectItem key={type.id} value={type.id}>
                {type.name}
              </SelectItem>
            ))}
          </Select>
          <Select
            label="Hình thức sự kiện"
            variant="bordered"
            placeholder="Chọn hình thức sự kiện"
            selectedKeys={
              formData.event_format_id
                ? new Set([formData.event_format_id])
                : new Set()
            }
            className="max-w-xs"
            onSelectionChange={(keys) => {
              const value = Array.from(keys).pop();
              handleChange("event_format_id", value);
            }}
          >
            {formats.result.map((format) => (
              <SelectItem key={format.id} value={format.id}>
                {format.name}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>
      <Button className="mt-6" color="primary" onClick={handleSubmit}>
        Lưu Sự Kiện
      </Button>
    </div>
  );
};

export default Content;
