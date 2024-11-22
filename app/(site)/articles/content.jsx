"use client";

import React, { useState, useEffect } from "react";
import ArticleCard from "@/app/_component/articleCard/ArticleCard";
import { getArticlesByTags } from "@/utils/funcionApi/select";
import { Pagination, Spinner } from "@nextui-org/react";
import { Card, Skeleton } from "@nextui-org/react";

const Content = ({ initialTags }) => {
  const [tags, setTags] = useState(initialTags || []);
  const [selectedTags, setSelectedTags] = useState([]);
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loadingTags, setLoadingTags] = useState(false);
  const [loadingArticles, setLoadingArticles] = useState(false);
  const limit = 9;

  // Fetch articles dựa vào tag và trang hiện tại
  const fetchArticles = async (selectedTags) => {
    setLoadingArticles(true); // Bắt đầu loading
    try {
      const tagIds =
        selectedTags.length > 0 ? selectedTags : tags.map((tag) => tag.id); // Mặc định lấy tất cả tags

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
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoadingArticles(false); // Kết thúc loading
    }
  };

  // Khi tag hoặc trang thay đổi, gọi lại fetchArticles
  useEffect(() => {
    if (tags.length > 0) {
      fetchArticles(selectedTags);
    }
  }, [tags, selectedTags, currentPage]);

  // Toggle tag selection
  const toggleTag = (tagId) => {
    const updatedTags = selectedTags.includes(tagId)
      ? selectedTags.filter((id) => id !== tagId)
      : [...selectedTags, tagId];
    setSelectedTags(updatedTags);
    setCurrentPage(1); // Reset về trang đầu khi thay đổi bộ lọc
  };

  return (
    <div className="w-full h-full bg-[#f9f9f9]">
      <div className="max-w-screen-xl w-full mx-auto px-4 py-5 bg-white pt-10">
        <h3 className="gap-2 mb-6">Tin tức</h3>
        {/* Bộ lọc tag */}
        {loadingTags ? (
          <div className="flex justify-center py-4">
            <Spinner size="lg" color="primary" />
          </div>
        ) : (
          <div className="w-full flex flex-wrap gap-2 md:p-5 mb-2">
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
        )}

        {/* Hiển thị bài viết */}
        {loadingArticles ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:p-5 justify-items-center">
            <Card className="w-[330px] h-[400px] space-y-5 p-4" radius="lg">
              <Skeleton className="rounded-lg">
                <div className="h-24 rounded-lg bg-default-300"></div>
              </Skeleton>
              <div className="space-y-3">
                <Skeleton className="w-3/5 rounded-lg">
                  <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                  <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">
                  <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
              </div>
            </Card>
            <Card className="w-[330px] h-[400px] space-y-5 p-4" radius="lg">
              <Skeleton className="rounded-lg">
                <div className="h-24 rounded-lg bg-default-300"></div>
              </Skeleton>
              <div className="space-y-3">
                <Skeleton className="w-3/5 rounded-lg">
                  <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                  <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">
                  <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
              </div>
            </Card>
            <Card className="w-[330px] h-[400px] space-y-5 p-4" radius="lg">
              <Skeleton className="rounded-lg">
                <div className="h-24 rounded-lg bg-default-300"></div>
              </Skeleton>
              <div className="space-y-3">
                <Skeleton className="w-3/5 rounded-lg">
                  <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                  <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">
                  <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
              </div>
            </Card>
            
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:p-5 justify-items-center">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}

        {/* Phân trang */}
        {!loadingArticles && totalPages > 1 && (
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

export default Content;
