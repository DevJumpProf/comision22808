# Lección 4 : REACT - Instalación con Create React App

* La diferencia entre npm y npx
* Instalación con Create React App
* Paso a Paso

## La diferencia entre npm y npx

NPM - Administra paquetes pero nos hace la vida fácil ejecutando cualquiera.
NPX - Una herramienta para ejecutar paquetes de nodo.

NPX nos permite instalar temporalmente para ej  ecutarlas y luego borrarlas, nos permite que siempre tengamos la ultima version actualizada de la herramienta que deseamos ejecutar

## Instalación con Create React App

Instalar React.js es muy fácil, esa es otra de sus ventajas. Siguiendo la documentación oficial en pocos minutos estarás en posibilidad de desarrollar tu sitio con todas las funcionalidades que nos proporciona esta librería. Esta es una de las grandes ventajas de React.js, puedes empezar a usarlo de manera gradual, integrándolo poco a poco a tus proyectos o usando la totalidad de sus capacidades desde el principio.

Si quieres empezar a conocerlo, puedes utilizar los editores en línea de CodePen, CodeSandbox  o Stackblitz.

La comunidad es tan grande, que en línea vas a encontrar una multitud de recursos, tutoriales y páginas destinadas a lograr que los usuarios obtengan un nivel avanzado de conocimiento en React.js con el menor dolor posible.

Para instalar por primera vez esta librería y comenzar a integrarla a tu proyecto, te recomendamos seguir las guías oficiales y actualizadas de la documentación. Ahí encontrarás las diferentes maneras que existen para este fin. El procedimiento de instalar React.js puede ser tan simple, como agregar unas pocas líneas de código. Si quieres tener un entorno de trabajo completo y complejo, React.js también te da esta posibilidad. Tú decides como quieres empezar.

https://es.reactjs.org/tutorial/tutorial.html

## Paso a Paso

Si quieren iniciar un proyecto en React desde cero, aquí les dejo los comandos que usaremos:

Crear una carpeta donde guardaremos el proyecto.
npx create-react-app nombre-de-carpeta<nombre-de-carpeta>
Al terminar de instalar las dependencias,nos dirigimos a nuestra carpeta Proyecto ( escrbimos cd <nombre-de-carpeta> )

Revisamos el package.json
Vemos, el nombre del proyecto/carpeta, la dependencias y la version de REACT.

Revisamos el index.html dentro del body tenemos el div con id = "root" 
aca es donde vamos a reenderizar nuestro codigo.

Ademas si entramos a src: index.js vamos a ver que tenemos varios imports (sintaxis de modulos de react).
lo mas importante vemos que llamamos a root.render

dentro le enviamos los componentes que queremos reenderizar, en este caso nuestro componente esta escondido en app.js

Si vemos el codigo veremos que estamos reendirizando app.js en el div con el id root

Nos dirigimos a app.js, y vemos una sintaxis muy parecida a HTML, pero no es HTML, es JSX.(muchisimo mas comoda), ya lo veremos en nuestro siguiente documento.

npm start. ( Se abrirá un localhost:3000 )

Vemos nuestra primer app funcionando

en index borramos <React.StrictMode>, luego lo utilizaremos y entenderemos para que sirve, lo mismo con los comentarios y lo referido a reportWebVitals (linea 5 y linea 14 en adelante)
 
