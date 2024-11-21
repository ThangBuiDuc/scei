import React from 'react'
import Content from './content';
import { getTags } from '@/utils/funcionApi/select';
const Page = async () => {
  const apiTags = await getTags();
  if (
    apiTags.status !== 200
  )
    throw new Error("Đã có lỗi xảy ra. Vui lòng thử lại!");
  return (
    <>
      <Content tags={apiTags.data}/>
    </>
  )
}

export default Page;
