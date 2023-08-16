import axios from "axios";

export const commentPrApis = {
  createComment: async (item) => {
    const data = await axios.post(
      `${process.env.REACT_APP_BE_URL}comments`,
      item
    );
    return data;
  },
  getAllComments: async (params) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}comments`,
      {
        params: {
          _sort: "id",
          _order: "desc",
          ...params,
        },
      }
    );
    return response;
  },
  updateComment: async (id, item) => {
    try {
      await axios.put(`${process.env.REACT_APP_BE_URL}comments/${id}`, item);
    } catch (error) {
      console.log((error, "error put comment in api"));
    }
  },
  getProductCommentById: async (productId) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BE_URL}comments/${productId}`
    );
    return data;
  },
};
