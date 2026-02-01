# ✨ Manos Mágicas

## 🎯 Objetivo del proyecto

**Manos Mágicas** es un proyecto frontend desarrollado desarrollado con **React**, que implementa una **arquitectura headless** integrando un **CMS headless (Modyo)** para la gestión de contenido editorial y una estructura e-commerce basada en **Magento** para el catálogo de productos, ambos simulados mediante mocks que replican el consumo real de sus APIs.

- El proyecto simula un escenario real de e-commerce + contenido, utilizando **mocks JSON** que replican la estructura de las APIs reales de Modyo y Magento.

---

## GLOSARIO:

### CMS
Un **CMS (Content Management System)** es un sistema que permite crear, editar y administrar contenido (textos, imágenes, campañas, legales, etc.) sin depender directamente del código del frontend.

Ejemplos de contenido típico en un CMS:
- Banners
- Artículos
- Tutoriales
- Contenido legal
- Páginas informativas

---

### CMS HEADLESS
Un **CMS headless** es un CMS que **no controla la presentación visual** del contenido.

- El CMS solo gestiona y expone contenido mediante una **API**
- El frontend (web, app, etc.) consume ese contenido y decide cómo renderizarlo
- No existe acoplamiento entre contenido y UI

 En este proyecto, **Modyo** actúa como CMS headless.

---

### Arquitectura headless
La **arquitectura headless** separa completamente:

- **Backend / servicios** (CMS, e-commerce, APIs)
- **Frontend** (React)

Cada sistema cumple un rol específico y se comunica vía API.

**Ventajas:**
- Escalabilidad
- Independencia tecnológica
- Reutilización de contenido
- Mejor mantenimiento

Este proyecto implementa una arquitectura headless al integrar:
- Modyo (contenido)
- Magento (productos)
- React (presentación)

---

## Descripción general del proyecto

**Manos Mágicas** es una mini tienda de kits de manualidades que combina:

- **Contenido editorial** (tutoriales, campañas, legales)
- **Catálogo de productos** (kits, precios, categorías)

### Rol de cada sistema

- **Modyo (CMS headless)**
  - Tutoriales paso a paso
  - Campañas (hero / banners)
  - Contenido legal
  - Tips editoriales

- **Magento (E-commerce)**
  - Productos
  - SKUs
  - Precios
  - Categorías

- **Frontend (React)**
  - Consume ambas fuentes
  - Relaciona productos y contenido editorial
  - Renderiza la experiencia final

> Tanto Modyo como Magento están **simulados mediante archivos mock**, representando sus estructuras reales.

---

## Arquitectura del proyecto

Frontend (React)
├── modyoClient.ts → Contenido editorial (CMS)
├── magentoClient.ts → Catálogo de productos (E-commerce)
└── UI / Pages / Components


### Fuentes de datos simuladas

| Sistema | Archivo mock | Rol |
|------|-------------|-----|
| Modyo | `modyo.mock.json` | CMS headless |
| Magento | `magento.mock.json` | Catálogo e-commerce |

---

## 🛒 Magento (estructura e-commerce)

El catálogo sigue el **modelo conceptual de Magento**, incluyendo:
- `sku`
- `price`
- `currency`
- `categories`
- `badges`
- `includes`

### Ejemplo de queries GraphQL (referencia real)

#### Listado de productos

```graphql
query Products {
  products(pageSize: 20) {
    items {
      sku
      name
      url_key
      image {
        url
      }
      price_range {
        minimum_price {
          final_price {
            value
            currency
          }
        }
      }
    }
  }
}
Detalle por url_key
query ProductByUrlKey($urlKey: String!) {
  products(filter: { url_key: { eq: $urlKey } }) {
    items {
      sku
      name
      description {
        html
      }
      price_range {
        minimum_price {
          final_price {
            value
            currency
          }
        }
      }
    }
  }
}

---

Estas queries representan cómo el frontend consumiría un Magento real vía GraphQL.

#### Modyo (CMS headless)
Modyo se utiliza como fuente de contenido editorial, totalmente desacoplada del frontend.


Relación CMS ↔ E-commerce
Tutorial (Modyo)
   relatedSku ───────▶ sku (Producto Magento)
Este patrón refleja un caso real donde:

el contenido vive en el CMS

el producto vive en el e-commerce

el frontend los integra sin acoplarlos

🔌 Integración en el frontend
El frontend no depende directamente de Magento ni Modyo

Consume datos mediante clientes desacoplados

Cada kit puede:

mostrar su tutorial asociado

o comportarse como producto sin contenido editorial

Este enfoque facilita la escalabilidad y el reemplazo futuro de servicios.

⚙️ Scripts:
npm install
npm run dev
npm run build


### Roadmap / Mejoras futuras.

El proyecto es escalable y a futuro podría incorporar nuevas funcionalidades como:

- Reemplazar "modyo.mock.json" por consumo real de Modyo Content API

- Levantar Magento con Docker y conectar GraphQL real

- Agregar carrito de compra

- Manejo de estado de sesión y checkout

- Tracking de campañas desde CMS
