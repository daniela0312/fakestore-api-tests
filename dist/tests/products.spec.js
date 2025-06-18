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
test_1.test.describe('Products API', () => {
    (0, test_1.test)('GET /products debe retornar status 200 y lista de productos', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, apiClient_1.get)('/products');
        (0, test_1.expect)(response.status).toBe(200);
        (0, test_1.expect)(Array.isArray(response.data)).toBeTruthy();
        (0, test_1.expect)(response.data[0]).toHaveProperty('id');
    }));
    (0, test_1.test)('GET /products/{id} debe retornar un producto válido', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, apiClient_1.get)('/products/1');
        (0, test_1.expect)(response.status).toBe(200);
        (0, test_1.expect)(response.data).toHaveProperty('id', 1);
    }));
    (0, test_1.test)('PUT /products/id actualiza un producto existente', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, apiClient_1.put)('/products/1', {
            title: 'Nuevo título 1',
            price: 50,
        });
        (0, test_1.expect)(response.status).toBe(200);
        (0, test_1.expect)(response.data.title).toBe('Nuevo título 1');
    }));
    (0, test_1.test)('PUT /products/id actualiza otro producto existente', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, apiClient_1.put)('/products/2', {
            title: 'Nuevo título 2',
            price: 99.99,
        });
        (0, test_1.expect)(response.status).toBe(200);
        (0, test_1.expect)(response.data.title).toBe('Nuevo título 2');
    }));
});
