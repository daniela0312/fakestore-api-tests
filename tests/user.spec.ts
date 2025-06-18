import { test, expect } from '@playwright/test';
import { post } from './utils/apiClient';
import { getUserPayload } from './utils/dataProvider';

test('POST /users registra un nuevo usuario', async () => {
  const payload = getUserPayload();
  const response = await post('/users', payload);
  expect(response.status).toBe(200);
  expect(response.data).toHaveProperty('id');
});