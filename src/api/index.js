import axios from "axios";

export const REACT_URL = axios.create({
  baseURL: process.env.REACT_APP_URL,
});