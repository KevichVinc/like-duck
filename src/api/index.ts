import axios from "axios";

const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export const getRMCharacters = async () => {
  try {
    const response = await instance.get("/character");
    return response.data;
  } catch (e) {
    console.log(e);
    return {
      url: "https://random-d.uk/api/images/51.jpg",
    };
  }
};
