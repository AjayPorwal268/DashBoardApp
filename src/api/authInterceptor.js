
const authInterceptor = (axiosInstance) => {
    // Add a request interceptor
    axiosInstance.interceptors.request.use(function (config) {
        config.headers = {...config.headers, "x-auth-token" : sessionStorage.getItem("x-auth-token")}
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });
    axiosInstance.interceptors.response.use(function (response) {
        if (response && response.data && response.data.token) {
            sessionStorage.setItem("x-auth-token", response.data.token);
        }
        return response;
    }, function (error) {
        return Promise.reject(error);
    });
};

export default authInterceptor