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
(0, test_1.test)('GET /carts/user/2 debe retornar el carrito del usuario', () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, apiClient_1.get)('/carts/user/2');
    (0, test_1.expect)(response.status).toBe(200);
    (0, test_1.expect)(Array.isArray(response.data)).toBeTruthy();
}));
(0, test_1.test)('DELETE /carts/{id} elimina un carrito', () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, apiClient_1.del)('/carts/5'); // Asegúrate de que el ID exista
    (0, test_1.expect)(response.status).toBe(200);
}));
