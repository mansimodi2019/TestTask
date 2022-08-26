import axios from "../utils/axios";

const personAPI = {
    getPersonList(params) {
        return axios.post("/api/person", params);
    },

};

export default personAPI;
