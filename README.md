# 🚀 Proyecto Integrador M2 - API MiniBlog

API RESTful desarrollada con **Node.js**, **Express** y **PostgreSQL** para la gestión de autores, publicaciones y comentarios. Incluye validaciones de datos, pruebas automatizadas, especificación OpenAPI/Swagger y configuración para despliegue en **Railway**.

---

## 📝 Descripción del Proyecto

MiniBlog es un servicio backend modular para DevSpark con arquitectura en capas (*routes*, *controllers*, *services*, *config*). Permite realizar operaciones CRUD con consultas SQL parametrizadas sobre tres entidades interconectadas:
- **Authors**: Gestión de usuarios y autores del blog.
- **Posts**: Creación y administración de publicaciones vinculadas a cada autor con eliminación en cascada (`ON DELETE CASCADE`).
- **Comments**: Sistema de comentarios vinculados a publicaciones y autores.

---

## 💻 Requisitos y Pasos para Ejecutar Localmente

### Prerrequisitos
- **Node.js** (v18+)
- **PostgreSQL** (v14+)
- **Git**

## 🤖 Registro del Uso de AI en el Proyecto

En cumplimiento con las pautas del proyecto integrador, se documenta el uso de herramientas de Inteligencia Artificial como asistente técnico y copiloto de desarrollo. La lógica del negocio, las pruebas y la estructuración final fueron revisadas, ajustadas e implementadas de forma manual.

| Prompt / Consulta Emitida | Propósito Técnico | Rol del Estudiante e Impacto Real |
| :--- | :--- | :--- |
| *"¿Cómo estructurar una API REST modular en Express separando rutas, controladores y servicios?"* | Asesoría en arquitectura de software | Se analizó la propuesta de capas y se aplicó la estructura organizando manualmente los módulos `routes`, `controllers` y `services`. |
| *"Ejemplos de sintaxis para parametrizar consultas SQL en Node.js usando el paquete 'pg'."* | Prevención de SQL Injection | Se redactaron e integraron las consultas parametrizadas (`$1, $2`) en la capa de servicios, validando el tipo de datos devuelto por PostgreSQL. |
| *"Ejemplo de configuración de pruebas de integración con Jest y Supertest para endpoints Express."* | Guía para la suite de pruebas | Se tomó la plantilla inicial y se redactaron los 6 casos de prueba independientes para validar códigos de respuesta (200, 201, 400, 404) y borrado en cascada. |
| *"Estructura en formato JSON para la especificación OpenAPI 3.0 con Swagger UI."* | Formato de documentación | Se configuró el middleware `swagger-ui-express` y se completaron manualmente las rutas y esquemas dentro de `src/docs/swagger.json`. |

### Instrucciones

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/nsdiazmata-dotcom/ProyectoM2_NeidyDiaz.git](https://github.com/tu-usuario/ProyectoM2_NeidyDiaz.git)
   cd ProyectoM2_NeidyDiaz