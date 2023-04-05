# Prueba Técnica para KLog

### Para correr el proyecto, se recomienda correr las migraciones y los seed para poblar la base datos con sequelize-cli, sino se debe realizar un `npm install` y luego el script del package.json para correr el servidor con `npm run dev`

El repositorio realiza las siguientes acciones:

**Rutas para controlador Transporte**

- ruta : http://localhost:3000/transportes mÉtodo GET, muestra todos los "viajes" que estan en la base de datos.
- ruta : http://localhost:3000/transportes método POST, se crea un nuevo "viaje" entregando la información necesaria.
- ruta : http://localhost:3000/transportes/destino método GET , es construcción

**Rutas para controlador Carrier**

- ruta : http://localhost:3000/carriers método GET, uestra todos los "carriers" que estan en la base de datos.
- ruta : http://localhost:3000/carriers método POST, se crea un nuevo "carrier" entregando la información necesaria.

**Rutas para controlador Pol**

- ruta : http://localhost:3000/pols método GET, uestra todos los "pols" que estan en la base de datos.
- ruta : http://localhost:3000/pols método POST, se crea un nuevo "pol" entregando la información necesaria.

**Rutas para controlador Pod**

- ruta : http://localhost:3000/pods método GET, uestra todos los "pods" que estan en la base de datos.
- ruta : http://localhost:3000/pods método POST, se crea un nuevo "pod" entregando la información necesaria.


**En caso de querer correr las migraciones con Sequelize se deben seguir los siguientes comandos:**

Una vez realizado `npm install`, se debe realizar `npx sequelize-cli db:create`, luego `npx sequelize-cli db:migrate` y `npx sequelize-cli db:seed:all`, con esto la base de datos quedará creada con la información de los seeds.