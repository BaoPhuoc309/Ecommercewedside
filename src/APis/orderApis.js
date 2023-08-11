import axios from "axios";

export const orderApis = {
  getAllOrders: async (params) => {
    const response = await axios.get(`${process.env.REACT_APP_BE_URL}orders`, {
      params: params,
    });
    return response;
  },

  getOrdersById: async (orderid) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}orders/${orderid}`
    );
    return response.data;
  },

  createOrders: async (order) => {
    return await axios.post(`${process.env.REACT_APP_BE_URL}orders`, order);
  },

  updateOrders: async (id, order) => {
    return await axios.patch(
      `${process.env.REACT_APP_BE_URL}orders/${id}`,
      order
    );
  },

  deleteOrders: async (id) => {
    return await axios.delete(`${process.env.REACT_APP_BE_URL}orders/${id}`);
  },
};
