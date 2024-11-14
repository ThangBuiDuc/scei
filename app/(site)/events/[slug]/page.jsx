// events/[slug]/page.jsx

import { notFound } from "next/navigation";
import { getEventDetail } from "@/utils/funcionApi/select";
import Content from "./content";

const ArticleDetail = async ({ params }) => {
  const { slug } = await params;

  const eventApi = await getEventDetail(slug);
  const event = eventApi.data.result[0];

  if (!event) return notFound();

  return (
    <>
      <Content event={event} />
    </>
  );
};

export default ArticleDetail;
