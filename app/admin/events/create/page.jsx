import React from "react";
import Content from "./content";
import { getEventTypes, getEventFormats } from "@/utils/funcionApi/select";
const Page = async () => {
  const apiTypes = await getEventTypes();
  const apiFormats = await getEventFormats();
  if (
    apiTypes.status !== 200 || apiFormats.status !== 200
  )
    throw new Error("Đã có lỗi xảy ra. Vui lòng thử lại!");
  return (
    <>
      <Content types={apiTypes.data} formats={apiFormats.data}/>
    </>
  );
};

export default Page;
