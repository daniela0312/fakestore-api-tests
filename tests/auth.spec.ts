import { test, expect } from '@playwright/test';
import { post } from './utils/apiClient';
import { loginPayload } from './utils/dataProvider';

test('POST /auth/login autentica usuario válido', async () => {
  const response = await post('/auth/login', loginPayload);
  expect(response.status).toBe(200);
  expect(response.data).toHaveProperty('token');
});

test('POST /auth/login con credenciales incorrectas falla', async () => {
  try {
    await post('/auth/login', {
      username: 'wrong_user',
      password: 'wrong_pass',
    });
    // Si entra aquí, fallamos la prueba porque no devolvió 401
    throw new Error('La autenticación fallida no devolvió 401');
  } catch (error: any) {
    expect(error.response.status).toBe(401);
  }
});
