import axios from "axios";

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

