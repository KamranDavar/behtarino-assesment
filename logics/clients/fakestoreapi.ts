import axios from "axios";

export const fakestoreapiApi = axios.create({
  baseURL: "https://fakestoreapi.com/",
});
