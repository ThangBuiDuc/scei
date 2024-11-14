// articles/[slug]/page.jsx

import { notFound } from "next/navigation";
import { getArticleDetail } from "@/utils/funcionApi/select";

const ArticleDetail = async ({ params }) => {
  const { slug } = params;

  // Tìm bài viết dựa trên slug
  // const article = articles.find((a) => a.slug === slug);
  const articleApi = await getArticleDetail(slug)
  const article = articleApi.data.result[0];

  // Nếu không tìm thấy bài viết thì trả về trang không tìm thấy
  if (!article) return notFound();
  console.log(article)

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{article.created_at}</p>
      <img
        src={article.avatar_img}
        alt={article.slug}
        className="w-full h-auto rounded-md mb-6"
      />
      <div
        className="text-lg leading-relaxed"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  );
};

export default ArticleDetail;
