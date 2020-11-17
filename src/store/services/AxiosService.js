import React from 'react';
import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.timeout = 15000;
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});
const AxiosService = function () {
    // GET method
    async function get(endPoint) {
        return axios.get(endPoint);
    }

    // POST method
    async function post(endPoint, params = {}) {
        return axios.post(endPoint, params);
    }

    // PATCH method
    async function patch(endPoint, params = {}) {
        return axios.patch(endPoint, params);
    }

    // PUT method
    async function put(endPoint, params = {}) {
        return axios.put(endPoint, params)
    }

    // DEL method
    async function del(endPoint, params = {}) {
        return axios.delete(endPoint, params);
    }

    return {
        get,
        post,
        put,
        patch,
        del,
    };
}
export default AxiosService()
