import axios from "axios";
import { base_url } from "../utils/constants";

import { authHeader } from "./auth-header";

const getAll = () => { 
  return axios
    .get(base_url + `demand`, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

const findOne = (id) => {
  return axios
    .get(base_url + `demand/admin/${id}`, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};  

const updateDemand = (id) => {
  return axios
    .patch(base_url + `demand/${id}`, {
      offer: true
    }, { headers: authHeader() })
    .then((response) => { 
      return response.data;
    });
}
  
const demageService = {
  getAll, 
  findOne, 
  updateDemand,
};

export default demageService;
