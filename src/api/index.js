import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;


const axiosInstance = (baseURL = API_URL, ...options) => {
    return axios.create({
        baseURL: baseURL,
        // You can add your headers here
        ...options,
    });
};

export default axiosInstance;

export const httpAPI = (
    url,
    data,
    method = "POST",
    isFormData = false,
    additionalHeaders = {},
    extraProps = {}
) => {
    const http = (axiosInstance(API_URL));
    return http({
        url,
        method,
        data,
        ...extraProps,
    });
};
