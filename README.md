# 🎬 Proyecto: CRUD de Películas con JavaScript Vanilla

## ✨ **Objetivos de la Práctica**

- [ ] **Consumir una API pública de películas** y mostrar la información en el DOM.
- [ ] **Implementar un CRUD en el frontend** sin backend, manejando los datos con **JSON local**.
- [ ] **Practicar eventos** como `click`, `input`, `submit`, y `DOMContentLoaded`.
- [ ] **Manipular el DOM dinámicamente** (crear, eliminar, modificar elementos).
- [ ] **Almacenar datos en LocalStorage** para que las películas agregadas no se pierdan al recargar.
- [ ] **Hacer una interfaz responsiva y estilizada** con **TailwindCSS o CSS puro**.

---

## 🔄 **Funcionalidades**

### 1. 📄 **Mostrar un listado de películas**
- Consumir una API pública como **The Movie Database (TMDb)** o una API de películas fake (JSONPlaceholder).
- Renderizar las películas con **imágenes, títulos y descripciones**.

### 2. 🔄 **Agregar una película manualmente**
- Tener un **formulario** con `input` para **nombre, descripción e imagen URL**.
- Guardar la película en un **JSON local y en LocalStorage**.

### 3. 🔄 **Modificar una película existente**
- Que al hacer click en una película, se llene el formulario con sus datos.
- Permitir cambiar la info y **actualizar el JSON local**.

### 4. 🔄 **Eliminar una película**
- Agregar un botón de "Eliminar" para cada película.
- Borrar la película del **JSON local y del LocalStorage**.

### 5. 🔄 **Hacerlo interactivo con eventos**
- Usar eventos como:
  - `click` para los botones de agregar, editar y eliminar.
  - `submit` en el formulario.
  - `DOMContentLoaded` para cargar los datos almacenados.

---

## 📚 **Estructura del Proyecto**
```
/movie-crud/
│── index.html  (Página principal)
│── styles.css  (Estilos)
│── script.js   (Lógica del CRUD y consumo de API)
│── db.json     (JSON local para guardar películas)
```

---

## ⚙️ **Requisitos Técnicos que Practicarás**

- **Manipulación del DOM:** Agregar, eliminar y modificar elementos.
- **Consumo de APIs con `fetch`:** Obtener datos de una API real.
- **Eventos en JavaScript:** `click`, `submit`, `DOMContentLoaded`.
- **JSON local:** Simular base de datos local con un archivo `.json`.
- **LocalStorage:** Guardar datos para que no se pierdan al recargar.
- **Diseño responsive:** Mobile-First con CSS puro o TailwindCSS.

---

## 📰 **API Recomendada**
Puedes usar **The Movie Database (TMDb)** para obtener películas:

🔗 [https://developer.themoviedb.org/docs/getting-started](https://developer.themoviedb.org/docs/getting-started)

Si quieres algo más sencillo, usa JSONPlaceholder o un archivo `db.json` local.

---

### 🚀 **¿Listo para empezar?**
1. Crea los archivos en la estructura indicada.
2. Implementa cada funcionalidad paso a paso.
3. Personaliza el diseño y la interactividad.
4. Disfruta aprendiendo 🚀💪.