import axios from "axios";

export const productApis = {
  getAllProducts: async (params) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}products`,
      {
        params: params,
      }
    );
    return response;
  },

  getProductById: async (productId) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}products/${productId}`
    );
    return response.data;
  },

  createProduct: async (product) => {
    return await axios.post(`${process.env.REACT_APP_BE_URL}products`, product);
  },

  updateProduct: async (product, id) => {
    return await axios.put(
      `${process.env.REACT_APP_BE_URL}products/${id}`,
      product
    );
  },

  deleteProduct: async (id) => {
    return await axios.delete(`${process.env.REACT_APP_BE_URL}products/${id}`);
  },
};
