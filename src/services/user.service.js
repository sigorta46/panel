import axios from "axios";
import { base_url } from "../utils/constants";

import { authHeader } from "./auth-header";


const getAllUsers = () => {
    return axios
        .get(base_url + `user/all-users`, { headers: authHeader() })
        .then((response) => {
            return response.data;
        });
};



const demageService = {
    getAllUsers
};

export default demageService;