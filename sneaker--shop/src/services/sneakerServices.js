import axios from "axios";

const api = axios.create({
  // url: 'https://v1-sneakers.p.rapidapi.com/v1/sneakers',
  headers: {
    "x-rapidapi-key": "43e76e459amsh8f145fa22699d74p1eff1bjsn2e1aac205db2",
    "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
  },
});

export const sneakerServices = {
  getAllSneakers({ limit = 12, page = 1, ...restParams } = {}) {
    return api.get("https://v1-sneakers.p.rapidapi.com/v1/sneakers", {
      params: {
        limit: limit,
        page: page,
        ...restParams,
      },
    });
  },
  getSneakersById(id){
    return api.get(`https://v1-sneakers.p.rapidapi.com/v1/sneakers/${id}`);
  }
};

