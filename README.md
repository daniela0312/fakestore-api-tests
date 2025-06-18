# Documentación Técnica: Automatización y CI/CD para API FakeStore

## Pruebas Automatizadas

Este proyecto implementa pruebas automatizadas sobre la [FakeStore API](https://fakestoreapi.com), cubriendo los principales endpoints mediante el uso de **Playwright con TypeScript** y buenas prácticas SOLID. Las pruebas están organizadas por módulos y casos positivos/negativos.

### Endpoints Cubiertos
- GET /products
- GET /products/{id}
- PUT /products/{id}
- POST /users
- POST /auth/login
- GET /carts/user/2
- DELETE /carts/{id}

### Estructura del Proyecto
```
/
├── tests/
│   ├── products.spec.ts
│   ├── users.spec.ts
│   ├── auth.spec.ts
│   ├── carts.spec.ts
│   └── utils/
│       ├── apiClient.ts
│       ├── dataProvider.ts
│       └── jsonSchema.ts
├── .github/workflows/playwright.yml
├── testConsulta.ts
├── tsconfig.json
├── package.json
├── README.md
```

---

## Flujo de Integración Continua con GitHub Actions

Se configuró un pipeline CI para ejecutar automáticamente las pruebas en cada push o pull request sobre la rama `main`. Esto permite validar la estabilidad del código en todo momento sin intervención manual.

### ⚙️ Configuración del archivo `.github/workflows/playwright.yml`
```yaml
name: Run Playwright API Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Install Playwright
        run: npx playwright install

      - name: Run API tests
        run: npx playwright test
```

---

## Documentación del Desarrollo de la Canalización

1. **Objetivo:** Validar el comportamiento de la API bajo distintos escenarios y automatizar su ejecución.
2. **Pipeline:** Configurado en GitHub Actions para ejecutarse con cada push o PR.
3. **Stack técnico:** Node.js, TypeScript, Axios, Playwright.
4. **Ambiente:** Ubuntu-latest, instalación automatizada.
5. **Resultado:** Cada ejecución muestra por consola los resultados de las pruebas (paso/fallo) y falla el pipeline si alguna prueba falla.

---

##  Reporte Básico del Resultado de Pruebas

- Al ejecutar `npx playwright test`, el sistema retorna:
  - Resultados individuales por test.
  - Detalles de errores (si existen).
  - Resumen: Total, Passed, Failed, Skipped.
- El workflow de GitHub Actions refleja estos resultados en la pestaña **Actions** del repositorio.

Ejemplo de salida:
```
Running 7 tests using 1 worker
✓ GET /products returns product list (500ms)
✓ GET /products/1 returns valid product
✓ POST /users registers user
✓ POST /auth/login authenticates
✓ POST /auth/login fails with invalid creds
✓ GET /carts/user/2 returns carts
✓ DELETE /carts/{id} removes cart

7 passed, 0 failed
```

---

## Criterios de Evaluación Cumplidos

| Criterio | Estado |
|---------|--------|
| Automatización del entorno y ejecución |  Completa con GitHub Actions |
| Reporte básico del resultado de pruebas |  Consola y CI |
| Simplicidad y claridad de configuración | YAML directo y limpio |
| Documentación sobre el proceso |  Incluido en este README |

---

## 🚀 Cómo Ejecutar este Proyecto

1. Clona el repositorio:
```bash
git clone https://github.com/TU_USUARIO/fakestore-api-tests.git
cd fakestore-api-tests
```

2. Instala dependencias:
```bash
npm install
```

3. Ejecuta las pruebas localmente:
```bash
npx playwright test
```

4. (Opcional) Ejecuta consulta manual:
```bash
npx ts-node testConsulta.ts
```

---

##  Notas Técnicas

- Esquemas JSON opcionales definidos en `jsonSchema.ts`.
- Cliente HTTP `apiClient.ts` modular y reutilizable.
- Tipado explícito en cada respuesta.
- Separación entre lógica y datos (`dataProvider.ts`).
- Uso de datos dinámicos (timestamp).

---

## Autora

**Daniela Fabra Valencia**  
Ingeniera de Sistemas - QA Engineer  
Reto técnico de automatización de servicios orientados a eventos.