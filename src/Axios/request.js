import axios from "axios";
const instance = axios.create({
    baseURL:process.env.REACT_COMMON_URL,  // Use the environment variable here
    timeout: 5000,
    //  headers: { 'X-Custom-Header': 'foobar' }
     headers:{}
});

// Request interceptor
instance.interceptors.request.use(function (config) {
    // You can add custom logic to manipulate the request before it's sent
    return config;
}, function (error) {
    return Promise.reject(error);
});

// Response interceptor
instance.interceptors.response.use(function (response) {
    // You can add custom logic to handle the response before passing it on
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default instance;