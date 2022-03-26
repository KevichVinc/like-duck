import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const getRMCharacters = async (page: number) => {
  try {
    const { data } = await instance.get(`/character/?page=${page}`);
    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
};
