import axios from "axios";
import { base_url } from "../utils/constants";

import { authHeader } from "./auth-header";

const create = ({ detail, total_price, demand_id,offer_url, end_date }) => {

    const requestBody = {
        detail, total_price, demand_id, offer_url, end_date
    };
    const headers = authHeader();
    return axios.post(base_url + "offer", requestBody, { headers })
        .then(response => {
            return response.data;
        });
};

const getAll = () => {
    return axios
        .get(base_url + `offer/admin`, { headers: authHeader() })
        .then((response) => {
            return response.data;
        });
};

const getAllWait = () => {
    return axios
        .get(base_url + `offer/admin/wait`, { headers: authHeader() })
        .then((response) => {
            return response.data;
        });
};

const getAllCheck = () => {
    return axios
        .get(base_url + `offer/admin/check`, { headers: authHeader() })
        .then((response) => {
            return response.data;
        });
};

const getAllCheckAndEndDate = () => {
    return axios
        .get(base_url + `offer/admin/check-end`, { headers: authHeader() })
        .then((response) => {
            return response.data;
        });
};

const getAllCancel = () => {
    return axios
        .get(base_url + `offer/admin/cancel`, { headers: authHeader() })
        .then((response) => {
            return response.data;
        });
};

const getAllEndDate = () => {
    return axios
        .get(base_url + `offer/admin/end`, { headers: authHeader() })
        .then((response) => {
            return response.data;
        });
};

const findOne = (id) => {
    return axios
        .get(base_url + `offer/${id}`, { headers: authHeader() })
        .then((response) => {
            return response.data;
        });
};

const updateOffer = ( { id, end_date, sertificate_url }  ) => {
    return axios
      .patch(base_url + `offer/${id}`, {
        end_date, sertificate_url
      }, { headers: authHeader() })
      .then((response) => { 
        return response.data;
      });
  }

const demageService = {
    create,
    getAll,
    getAllWait,
    getAllCheck,
    getAllCancel,
    getAllCheckAndEndDate,
    getAllEndDate,
    findOne,
    updateOffer,
};

export default demageService;