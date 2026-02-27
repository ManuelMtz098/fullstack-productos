import axios from "axios";

export const api = axios.create({
  baseURL: 'http://172.16.106.2:5155/api',
  headers: {
    'Content-Type': 'application/json',
  },
});