"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.put = exports.post = exports.get = void 0;
const axios = require("axios");
const api = axios.create({
    baseURL: 'https://fakestoreapi.com',
    headers: {
        'Content-Type': 'application/json',
    },
});
const get = (endpoint) => {
    return api.get(endpoint);
};
exports.get = get;
const post = (endpoint, data) => {
    return api.post(endpoint, data);
};
exports.post = post;
const put = (endpoint, data) => {
    return api.put(endpoint, data);
};
exports.put = put;
const del = (endpoint) => {
    return api.delete(endpoint);
};
exports.del = del;
