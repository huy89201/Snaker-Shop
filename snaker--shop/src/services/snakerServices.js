import axios from "axios";

export const snakerServices = {
  getAllSnakers({ limit = 12, page = 1, ...restParams }={}) {
    return axios.get("https://api.thesneakerdatabase.com/v1/sneakers?", {
      params: {
        limit: limit,
        page: page,
        ...restParams,
      }
    });
  },
};
