# Proyecto Exodus

## Introduccion

Proyecto para gestamp hecho en Angular, con un servidor Nestjs, Swagger y bbdd MySQL.

## Build

- ng build para construir el proyecto. Los componentes de la compilación se almacenarán en el directorio dist /. Use el indicador --prod para una compilación de producción.

## Si no tienes la carpeta modules, desde /servidor-nest y /apptrade

- npm install

- npm install --save @nestjs/swagger swagger-ui-express

## Iniciar angular desde /frontend/appTrade

- ng serve


## Iniciar servidor Nestjs desde /servidor

- npm run start

## Una vez iniciado el servidor hay que crear en la base de datos MySQL que se llame "Exodus"

# Documentacion del servidor

- <a href="http://localhost:3000/docs">Documentacion en el servidor</a>


## en visual code ( terminal ) si no se puede hacer un ng serve por permisos de script. Desde powershell

- Set-ExecutionPolicy Unrestricted
