import axios from "axios";
import { base_url } from "../utils/constants";

const login = (phone, password) => {
  return axios
    .post(base_url + "auth", {
      phone,
      password,
    })
    .then((response) => {
      if (response.data.tokens.access_token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  login,
  logout,
};

export default authService;
