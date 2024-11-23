import axios from "axios";
// Đăng ký liên hệ
export const resgisContact = async (object) => {
  return await axios({
    url: "https://lms.hasura.app/api/rest/insert-contact",
    method: "post",
    data: { object },
    headers: {
      "content-type": "Application/json",
    },
  });
};

// Đăng ký tham gia event
export const resgisEvent = async (objects) => {
  return await axios({
    url: "https://lms.hasura.app/api/rest/insert-event-tickets",
    method: "post",
    data: { objects },
    headers: {
      "content-type": "Application/json",
    },
  });
};

// Tạo bài viết
export const createNews = async (objects) => {
  return await axios({
    url: "https://lms.hasura.app/api/rest/insert-articles",
    method: "post",
    data: { objects },
    headers: {
      "content-type": "Application/json",
    },
  });
};

// Tạo bài viết
export const createEvent = async (objects) => {
  return await axios({
    url: "https://lms.hasura.app/api/rest/insert-events",
    method: "post",
    data: { objects },
    headers: {
      "content-type": "Application/json",
    },
  });
};

