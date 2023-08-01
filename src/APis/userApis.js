import axios from "axios";

export const userApis = {
  createUser: async (user) => {
    return await axios.post(`${process.env.REACT_APP_BE_URL}users`, user);
  },
  getUserById: async (userId) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}users${userId}`
    );
    return response.data;
  },

  updateUserById: async (id, userUpdate) => {
    return axios.put(`${process.env.REACT_APP_BE_URL}users${id}`, userUpdate);
  },

  getAllUsers: async (params) => {
    const response = await axios.get(`${process.env.REACT_APP_BE_URL}users`, {
      params: params,
    });
    return response;
  },
};
