
import { get } from './tests/utils/apiClient';

async function ejecutarConsulta() {
  try {
    const response = await get('/products');
    console.log(' Productos:', response.data);
  } catch (error) {
    console.error(' Error al consultar productos:', error);
  }
}

ejecutarConsulta();
