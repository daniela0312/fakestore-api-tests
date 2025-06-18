"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authResponseSchema = exports.userSchema = exports.productSchema = void 0;
exports.productSchema = {
    type: 'object',
    required: ['id', 'title', 'price', 'category', 'description', 'image'],
    properties: {
        id: { type: 'number' },
        title: { type: 'string' },
        price: { type: 'number' },
        category: { type: 'string' },
        description: { type: 'string' },
        image: { type: 'string' },
    }
};
exports.userSchema = {
    type: 'object',
    required: ['id', 'username', 'email'],
    properties: {
        id: { type: 'number' },
        username: { type: 'string' },
        email: { type: 'string' },
    }
};
exports.authResponseSchema = {
    type: 'object',
    required: ['token'],
    properties: {
        token: { type: 'string' },
    }
};
