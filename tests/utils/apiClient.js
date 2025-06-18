"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.put = exports.post = exports.get = void 0;
var axios_1 = require("axios");
var api = axios_1.default.create({
    baseURL: 'https://fakestoreapi.com',
    headers: {
        'Content-Type': 'application/json',
    },
});
var get = function (endpoint) {
    return api.get(endpoint);
};
exports.get = get;
var post = function (endpoint, data) {
    return api.post(endpoint, data);
};
exports.post = post;
var put = function (endpoint, data) {
    return api.put(endpoint, data);
};
exports.put = put;
var del = function (endpoint) {
    return api.delete(endpoint);
};
exports.del = del;
