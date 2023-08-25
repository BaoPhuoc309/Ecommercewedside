import axios from "axios";

export const brandsApis = {
  getAllBrands: async (params) => {
    const response = await axios.get(`${process.env.REACT_APP_BE_URL}brands`, {
      params: params,
    });

    return response;
  },
};
