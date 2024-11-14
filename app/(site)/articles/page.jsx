"use client";
import React, { useState, useEffect } from "react";
import ArticleCard from "@/app/_component/articleCard/ArticleCard";
import { getArticlesByTags, getTags } from "@/utils/funcionApi/select";
import { Pagination } from "@nextui-org/react";

const Page = () => {
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 9;

  // Lấy danh sách tag
  useEffect(() => {
    const fetchTags = async () => {
      const tagRes = await getTags();
      setTags(tagRes.data.result);
    };
    fetchTags();
  }, []);

  // Lấy danh sách bài viết theo tag (chỉ khi tags đã được tải xong)
  const fetchArticles = async (selectedTags) => {
    const tagIds =
      selectedTags.length > 0
        ? selectedTags
        : tags.length > 0
        ? tags.map((tag) => tag.id)
        : [];

    if (tagIds.length > 0) {
      const articleRes = await getArticlesByTags(
        limit,
        (currentPage - 1) * limit,
        tagIds
      );
      setArticles(articleRes.data.result);
      const totalItems = articleRes.data.articles_aggregate.aggregate.count;
      setTotalPages(Math.ceil(totalItems / limit));
    }
  };

  // Khi vừa vào trang hoặc khi tag/ trang thay đổi, gọi hàm fetchArticles
  useEffect(() => {
    if (tags.length > 0) {
      fetchArticles(selectedTags);
    }
  }, [tags, selectedTags, currentPage]);

  // Toggle lựa chọn tag
  const toggleTag = (tagId) => {
    const updatedTags = selectedTags.includes(tagId)
      ? selectedTags.filter((id) => id !== tagId)
      : [...selectedTags, tagId];
    setSelectedTags(updatedTags);
    setCurrentPage(1); // Reset về trang đầu khi thay đổi bộ lọc
  };

  return (
    <div className="w-full h-full bg-[#f9f9f9]">
      <div className="max-w-screen-lg mx-auto px-4 py-5 bg-white pt-10">
        <h3 className="gap-2 mb-6">Tin tức</h3>
        {/* Bộ lọc tag */}
        <div className="w-full flex flex-wrap gap-2 p-5">
          {tags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => toggleTag(tag.id)}
              className={`px-4 py-2 border rounded ${
                selectedTags.includes(tag.id)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {tag.title}
            </button>
          ))}
        </div>

        {/* Hiển thị bài viết */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-5 justify-items-center">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Phân trang */}
        {totalPages > 1 && ( // Hiển thị Pagination chỉ khi tổng số trang lớn hơn 1
          <div className="flex justify-center mt-6">
            <Pagination
              loop
              showControls
              total={totalPages}
              initialPage={1}
              page={currentPage}
              onChange={(page) => setCurrentPage(page)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
