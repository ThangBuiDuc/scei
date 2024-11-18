import axios from "axios";

//Lấy danh sách các bài viết tin tức
export const getArticlesData = async (limit, offset) => {
  const res = await axios({
    url: "https://lms.hasura.app/api/rest/get-articles",
    method: "post",
    headers: {
      "content-type": "Application/json",
    },
    data: {
      limit: limit,
      offset: offset,
    },
  });

  return res;
};

//Lấy danh sách sự kiện
export const getEventsData = async (limit, offset) => {
  const res = await axios({
    url: "https://lms.hasura.app/api/rest/get-events",
    method: "post",
    headers: {
      "content-type": "Application/json",
    },
    data: {
      limit: limit,
      offset: offset,
    },
  });

  return res;
};

//Lấy danh sách tin tức theo tag
export const getArticlesByTags = async (limit, offset,tag_ids) => {
  const res = await axios({
    url: "https://lms.hasura.app/api/rest/articles-by-tags",
    method: "post",
    headers: {
      "content-type": "Application/json",
    },
    data: {
      limit: limit,
      offset: offset,
      tag_ids: tag_ids
    },
  });

  return res;
};

//Lấy danh sách tags tin tức
export const getTags= async () => {
  const res = await axios({
    url: "https://lms.hasura.app/api/rest/tags",
    method: "get",
    headers: {
      "content-type": "Application/json",
    },
  });

  return res;
};

//Lấy nội dung bài viết qua slug
export const getArticleDetail= async (slug) => {
  const res = await axios({
    url: `https://lms.hasura.app/api/rest/article/${slug}`,
    method: "get",
    headers: {
      "content-type": "Application/json",
    },
  });

  return res;
};

//Lấy nội dung event qua slug
export const getEventDetail= async (slug) => {
  const res = await axios({
    url: `https://lms.hasura.app/api/rest/event/${slug}`,
    method: "get",
    headers: {
      "content-type": "Application/json",
    },
  });

  return res;
};