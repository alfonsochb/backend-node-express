Esta es una guia para empezar una a programar una API desde cero con Node.js y Express.js usando sintaxis moderna de JavaScript.
Usaremos Babel para escribir código moderno y lo convierte a un código que lo entienda la mayoría de los navegadores.

**Paso a paso**

* Creando el directorio del proyecto

`mkdir api-node-express`
`cd backend-node-express`

* Iniciando la creación de una API

`npm init -y`	

* Instalamos todos los módulos requeridos por el proyecto

`npm i express morgan pg pg-hstore sequelize @babel/polyfill cors`	

***Que es cada cosa...***
  * (express) "EXPRESS" para crear el servidor
  * (morgan) "MORGAN" para hacer seguimiento a las peticiones por consola.
  * (pg pg-hstore) PostgreSQL para la base de datos.
  * (sequelize) ORM "SEQUELIZE" para el manejo de la base de datos.
  * (@babel/polyfill) "Babel" para traducir código moderno a código javascript normal.
  * (cors) CORS es un paquete de node.js para proporcionar un middleware para la comunicación entre aplicaciones.

**Seguimos...**
* Crear un archivo de punto extensión ".babelrc" en la raíz del proyecto y escribir las configuraciones:

```javascript
{
    "presets": [
        "@babel/env"
    ],
    "plugins": [
        "@babel/transform-runtime"
    ]
}
```

* Instalamos los módulos requeridos como dependencias de desarrollo.

`npm i @babel/core @babel/cli @babel/node @babel/preset-env @babel/plugin-transform-runtime nodemon jest -D`	

***Que es cada cosa...***
  * (@babel/core) Core: Modulo principal de babel.
  * (@babel/cli) Cli: Para utilizar babel desde consola.
  * (@babel/node) Node: Para usar babel adentro de node.
  * (@babel/preset-env) Preset-env: Para configurar Babel.
  * (@babel/plugin-transform-runtime) Plugin-transform-runtime: Para no tener problema con códigos async/await.
  * (nodemon) Nodemon es una utilidad que monitoreará cualquier cambio en su fuente y reiniciará automáticamente su servidor.
  * (jest) Instalar dependencia de testing para desarrollo

* Creamos el archivo de inicio y lo llamaremos server.js en la ruta: "api-node-express/src/server.js"

* Creamos una clase de configuración y arranque de nuestro servidor usando la sintaxis moderna de "import".

```javascript
  import express from 'express';
  import morgan from 'morgan';
  import cors from 'cors';
  import router from './app';

  class Server{

      constructor(){
          this.app = express();
          this.server();
          this.routes();  
      }

      server(){
          this.app.set("port", 3000);
          const runPort = this.app.get("port");
          this.app.listen(runPort, () => {
            console.log(
              `Application running on port: ${runPort}.`
            );
          });
      }

      routes() {
          this.app.use(express.json());
          this.app.use(morgan('dev'));
          this.app.use(cors());
          this.app.get('/api', (req, res) => {
              return res.json({
                  message: 'Api demo'
              });
          });
          this.app.use(router);
      }

  }

  export default new Server();
```

* Creamos el archivo referente a los llamados de nuestra api "api-node-express/src/app.js".

```javascript
  import { Router } from 'express';
  import routeProjects from './routes/projects.router';
  import routeTasks from './routes/task.router';

  const router = Router();

  // This is the project controller.
  router.use('/api/projects', routeProjects); 

  // This is the task controller.
  router.use('/api/tasks', routeTasks); 

  export default router;
```

* Para mayor organización, incluimos un archivo de rutas para cada nueva funcionalidad claramente identificada "api-node-express/src/routes/projects.router.js"

```javascript
  import { Router } from 'express';
  const router = Router();
  import projects from '../controllers/projects.controller';

  router.get('/', projects.getProjects);
  router.get('/:id', projects.getProjectById);
  router.post('/', projects.createProject);
  router.put('/:id', projects.updateProject);
  router.delete('/:id', projects.deleteProject);

  export default router;
```

* Finalmente la funcionalidad corre por nuestra cuenta, en este demo he usado:

  * Postgresql, los archivos de ejemplo en "api-node-express/sql/*".

  * Conexión de base de datos: "backend-node-express/src/database/database.js"

  * Controladores, "api-node-express/src/controllers/*"

* Ejecutamos con los comandos
`npm run dev`
`npm run build`
`npm run start`

**Bonus Track:**

* .........

