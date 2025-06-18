import { test, expect } from '@playwright/test';
import { get, del } from './utils/apiClient';

test('GET /carts/user/2 debe retornar el carrito del usuario', async () => {
  const response = await get('/carts/user/2');
  expect(response.status).toBe(200);
  expect(Array.isArray(response.data)).toBeTruthy();
});

test('DELETE /carts/{id} elimina un carrito', async () => {
  const response = await del('/carts/5'); 
  expect(response.status).toBe(200);
});
