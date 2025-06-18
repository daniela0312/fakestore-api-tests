import { test, expect } from '@playwright/test';
import { get, put } from './utils/apiClient';

test.describe('Products API', () => {
  test('GET /products debe retornar status 200 y lista de productos', async () => {
    const response = await get('/products');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBeTruthy();
    expect(response.data[0]).toHaveProperty('id');
  });

  test('GET /products/{id} debe retornar un producto válido', async () => {
    const response = await get('/products/1');
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', 1);
  });

  test('PUT /products/id actualiza un producto existente', async () => {
    const response = await put('/products/1', {
      title: 'Nuevo título 1',
      price: 50,
    });
    expect(response.status).toBe(200);
    expect(response.data.title).toBe('Nuevo título 1');
  });

  test('PUT /products/id actualiza otro producto existente', async () => {
    const response = await put('/products/2', {
      title: 'Nuevo título 2',
      price: 99.99,
    });
    expect(response.status).toBe(200);
    expect(response.data.title).toBe('Nuevo título 2');
  });
});