"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginPayload = exports.getUserPayload = void 0;
const getUserPayload = () => ({
    email: `user${Date.now()}@mail.com`,
    username: `testuser${Date.now()}`,
    password: 'securePass123',
});
exports.getUserPayload = getUserPayload;
exports.loginPayload = {
    username: 'mor_2314',
    password: '83r5^_'
};
