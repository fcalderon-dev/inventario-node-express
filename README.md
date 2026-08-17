# Sistema de Gestión de Inventario

Aplicación web desarrollada con **Node.js y Express** para gestionar y visualizar productos de un inventario.

Este proyecto corresponde a la primera etapa de una aplicación backend desarrollada de manera progresiva.

## Tecnologías utilizadas

* Node.js
* Express.js
* Express Handlebars
* File System (`fs`)
* dotenv
* nodemon
* HTML
* CSS

## Requisitos

Para ejecutar el proyecto se necesita:

* Node.js 18 o superior
* npm

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/fcalderon-dev/inventario-node-express.git
```

Ingresar a la carpeta:

```bash
cd inventario-node-express
```

Instalar las dependencias:

```bash
npm install
```

Crear un archivo `.env` tomando como referencia `.env.example`:

```env
PORT=3000
```

## Ejecución

Para ejecutar normalmente la aplicación:

```bash
npm start
```

Para ejecutarla en modo desarrollo con nodemon:

```bash
npm run dev
```

La aplicación estará disponible por defecto en:

`http://localhost:3000`

## Rutas

### `/`

Página principal de la aplicación.

### `/productos`

Muestra los productos almacenados actualmente en el archivo `productos.json`.

### `/status`

Devuelve información del estado del servidor en formato JSON.

### `/acerca`

Muestra información general sobre el proyecto y las tecnologías utilizadas.

## Estructura del proyecto

```text
inventario-node-express/
│
├── logs/
│   └── log.txt
│
├── public/
│   ├── css/
│   │   └── styles.css
│   └── js/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── data/
│   │   └── productos.json
│   ├── middlewares/
│   │   └── accessLogger.js
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── app.js
│
├── views/
│   ├── partials/
│   │   └── header.hbs
│   ├── acerca.hbs
│   ├── home.hbs
│   └── productos.hbs
│
├── .env.example
├── .gitignore
├── package.json
└── package-lock.json
```

## Persistencia de datos

Durante esta primera etapa los productos se almacenan en un archivo JSON ubicado en:

```text
src/data/productos.json
```

El acceso a estos datos se realiza mediante un servicio, manteniendo separada la lógica de acceso a datos de los controladores y las rutas.

Además, la aplicación utiliza el módulo `fs` de Node.js para registrar los accesos al servidor en:

```text
logs/log.txt
```

Cada registro contiene la fecha, hora, método HTTP y ruta solicitada.

## Decisiones técnicas

### Uso de `app.js`

Se eligió `app.js` como archivo principal porque representa claramente el punto de configuración e inicio de la aplicación Express.

### Arquitectura modular

El proyecto separa rutas, controladores, servicios y middlewares para mantener responsabilidades diferenciadas y facilitar futuras ampliaciones.

### Uso de Handlebars

Se utiliza Handlebars como motor de plantillas para generar contenido HTML dinámico y reutilizar elementos de interfaz mediante partials.

### Uso de archivos JSON

En esta primera etapa se utiliza un archivo JSON como mecanismo sencillo de almacenamiento de productos. Esta estructura permite trabajar con persistencia básica antes de incorporar una base de datos en las siguientes etapas del proyecto.

### Variables de entorno

El puerto del servidor se configura mediante `dotenv` y un archivo `.env`. Se incluye `.env.example` como referencia de configuración sin publicar el archivo `.env` real.

## Estado actual

Actualmente la aplicación permite:

* Visualizar la página principal.
* Consultar el estado del servidor.
* Visualizar productos almacenados en un archivo JSON.
* Renderizar contenido dinámico mediante Handlebars.
* Servir archivos estáticos mediante Express.
* Registrar accesos al servidor en un archivo de log.
* Configurar el puerto mediante variables de entorno.

## Autor

Fernando Calderón
