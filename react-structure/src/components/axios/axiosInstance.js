import axios from 'axios';
// import { axiosInstance } from './axiosInstance';

// Set config defaults when creating the instance
export const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: { api_key: '7a1c19ea3c361a4d3cc53eb70ef8298c' },
    headers: {}
});


// Add Interceptor 
// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.params['language'] = 'en';
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});
