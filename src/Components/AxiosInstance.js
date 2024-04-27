import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://port-0-back-api-128y2k2llvhomk0i.sel5.cloudtype.app',
    headers: {
        "Content-Type": `application/json;charset=UTF-8`,
        "Accept": "application/json",
        "Access-Control-Allow-Origin": `https://habitual-irony.github.io`,
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
