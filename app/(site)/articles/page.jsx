import React from "react";
import Content from "./content";
import { getTags } from "@/utils/funcionApi/select";

const Page = async () => {
  // Fetch tags khi server-side render
  const tagRes = await getTags();

  if (tagRes.status !== 200) {
    throw new Error("Không thể tải dữ liệu. Vui lòng thử lại!");
  }

  return <Content initialTags={tagRes.data.result} />;
};

export default Page;
