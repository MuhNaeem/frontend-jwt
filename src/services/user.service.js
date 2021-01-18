import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://127.0.0.1:8001/api/";

const getPublicContent = () => {
  return axios.get(API_URL + "open");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const UserService = {
  getPublicContent,
  getUserBoard,
};

export default UserService;