"use client";
import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Input, Button, Textarea, Select, SelectItem } from "@nextui-org/react";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { createNews } from "@/utils/funcionApi/create";

// Dynamic import để tắt SSR cho TinyMCE
const Editor = dynamic(
  () => import("@tinymce/tinymce-react").then((mod) => mod.Editor),
  { ssr: false }
);

const Content = ({ tags }) => {
  const editorRef = useRef(null);
  const [mutating, setMutating] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    avatar_img: "",
    description: "",
    content: "",
    article_tags: new Set(), // Sử dụng Set để lưu trữ các `tag_id` duy nhất
  });

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const mutation = useMutation({
    mutationFn: ({ objects }) => createNews(objects),
    onSuccess: () => {
      setMutating(false);
      setFormData({
        title: "",
        avatar_img: "",
        description: "",
        content: "",
        article_tags: {},
      });
      toast.success("Tạo bài viết thành công", {
        duration: 4000,
        position: "top-center",
      });
      onClose();
    },
    onError: () => {
      setMutating(false);
      toast.error("Có lỗi xảy ra. Vui lòng thử lại.");
    },
  });

  const handleSave = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent(); // Lấy nội dung từ Editor
      const articleTagsArray = Array.from(formData.article_tags).map((tag) => ({
        tag_id: Number(tag), // Chuyển `tag` thành số
      }));

      const objects = {
        title: formData.title,
        avatar_img: formData.avatar_img,
        description: formData.description,
        content: content,
        article_tags: {
          data: articleTagsArray,
        },
      };

      console.log("Data to be saved:", objects);
      setMutating(true);
      mutation.mutate({ objects });
    } else {
      console.error("Editor chưa được khởi tạo!");
    }
  };

  return (
    <div className="w-full h-full bg-white p-6 overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4">Tạo bài viết</h1>
      <div className="h-full w-full flex flex-col gap-5">
        {/* Chủ đề bài viết */}
        <Select
          label="Chủ đề bài viết"
          placeholder="Chọn chủ đề cho bài viết"
          selectionMode="multiple"
          className="max-w-xs"
          selectedKeys={formData.article_tags}
          onSelectionChange={(selected) =>
            handleChange("article_tags", selected)
          }
        >
          {tags.result.map((tag) => (
            <SelectItem key={tag.id} value={String(tag.id)}>
              {tag.title}
            </SelectItem>
          ))}
        </Select>

        {/* Title Input */}
        <Input
          label="Tiêu đề"
          value={formData.title}
          onChange={(e) => handleChange("title", e.target.value)}
          fullWidth
          placeholder="Nhập tiêu đề bài viết"
        />

        {/* Avatar Image Input */}
        <Input
          label="URL Ảnh đại diện"
          value={formData.avatar_img}
          onChange={(e) => handleChange("avatar_img", e.target.value)}
          fullWidth
          placeholder="Nhập URL ảnh đại diện"
        />

        {/* Description Input */}
        <Textarea
          label="Mô tả"
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
          fullWidth
          placeholder="Nhập mô tả bài viết"
        />

        {/* Editor */}
        <Editor
          apiKey="4gok927ijivm90j86lln7qg6yw5o1byoz966dhqmjy6kj6g9"
          onInit={(evt, editor) => (editorRef.current = editor)}
          init={{
            plugins: [
              "anchor",
              "autolink",
              "charmap",
              "codesample",
              "emoticons",
              "image",
              "link",
              "lists",
              "media",
              "searchreplace",
              "table",
              "visualblocks",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | " +
              "link image media table | align lineheight | numlist bullist indent outdent",
            height: 600,
          }}
          initialValue="Nhập nội dung bài viết của bạn tại đây!"
        />
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Lưu bài viết
      </button>
    </div>
  );
};

export default Content;
