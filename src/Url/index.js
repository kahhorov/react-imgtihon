import axios from "axios";

export const Url = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
