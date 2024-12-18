import axios from "axios";



const apiBaseUrl = "https://admin.reso.vn/api/v1";

const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        if (typeof window !== "undefined") {
            const accessToken = localStorage.getItem("accessToken");
            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
        }
        return config;
    },
    (error) => {
        // Handle request errors
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;