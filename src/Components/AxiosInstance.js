import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Content-Type": `application/json;charset=UTF-8`,
        "Accept": "application/json",
        "Access-Control-Allow-Origin": process.env.REACT_APP_URL,
        'Access-Control-Allow-Credentials':"true",
    },
    withCredentials: true
});

axiosInstance.interceptors.request.use(
    function (config) {
        const key = localStorage.getItem('key');
        if (!key) {
            config.headers["Authorization"] = null;
            return config
        }
        config.headers["Authorization"] = "Bearer " + key;
        return config
    }
)

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const { response } = error;

        if (response?.status === 401) {
            localStorage.removeItem("key");
            alert("로그인 다시해라...");
            return window.location.href = '/';
        }

    }
);

export default axiosInstance;
