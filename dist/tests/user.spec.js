"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const apiClient_1 = require("./utils/apiClient");
const dataProvider_1 = require("./utils/dataProvider");
(0, test_1.test)('POST /users registra un nuevo usuario', () => __awaiter(void 0, void 0, void 0, function* () {
    const payload = (0, dataProvider_1.getUserPayload)();
    const response = yield (0, apiClient_1.post)('/users', payload);
    (0, test_1.expect)(response.status).toBe(200);
    (0, test_1.expect)(response.data).toHaveProperty('id');
}));
