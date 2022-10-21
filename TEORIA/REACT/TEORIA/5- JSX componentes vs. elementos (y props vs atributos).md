# Lección 5 : REACT - JSX: componentes vs. elementos (y props vs. atributos)

* JSX
* Mas sobre JSX
* ¿Por qué usar JSX?
* componentes vs. elementos
* Formas de crear componentes
* ReactDOM.render
* props vs. atributos

JSX es una extensión de JavaScript creada por Facebook para usarse con React.js. Nos presenta muchas ventajas el trabajar con elementos y componentes en vez de manipular el html de manera tradicional.

La función que JSX tiene es de ser un preprocesador (como Sass o Stylus a CSS) y transforma el código a JavaScript.

React.js acepta el hecho de que la lógica de renderizado está intrínsecamente unida a la lógica de la interfaz de usuario. Es decir cómo se manejan los eventos, cómo cambia el estado con el tiempo y cómo se preparan los datos para su visualización. En lugar de separar artificialmente tecnologías poniendo el maquetado y la lógica en archivos separados, React.js separa intereses con unidades ligeramente acopladas llamadas “componentes” que contienen ambas.

## Mas sobre JSX
Esta curiosa sintaxis de etiquetas no es ni un string ni HTML.
.
Se llama JSX, y es una extensión de la sintaxis de JavaScript. Recomendamos usarlo con React para describir cómo debería ser la interfaz de usuario. JSX puede recordarte a un lenguaje de plantillas, pero viene con todo el poder de JavaScript. JSX produce “elementos” de React.
.
## ¿Por qué usar JSX?

React acepta el hecho de que la lógica de renderizado está intrínsecamente unida a la lógica de la interfaz de usuario: cómo se manejan los eventos, cómo cambia el estado con el tiempo y cómo se preparan los datos para su visualización.
.
En lugar de separar artificialmente tecnologías poniendo el maquetado y la lógica en archivos separados, React separa intereses con unidades ligeramente acopladas llamadas “componentes” que contienen ambas.

Nota: Los componentes son una version traducida de los elementos en HTML a Javascript (JSX).

si utilizamos las llaves podemos traer una variable ej: {logo}, nos puede ayudar cuando esa variable no siempre es Fija.

## componentes vs. elementos

Los componentes pueden tener propiedades para lograr que sea más interactivo. Empleando las propiedades podemos reutilizar un mismo componente muchas veces ahorrándonos trabajo. Todas estas ventajas nos da en trabajar con React.js y JSX.

Los elementos de React.js son una descripción de la interfaz. Los componentes de React.js son una pieza de código que describe una parte reusable de la interfaz, y como tal, recibe propiedades y retorna elementos. Son invisibles. Los componentes son invisibles para HTML, pero si son visibles para React.js y este los puede usar para renderizar de la forma más optimizada posible. Lo que renderiza React.js en HTML son los elementos. Utilizamos JSX para que, con una sintaxis parecida a HTML podamos escribir de manera más entendible el código.

-------------------------------------------------
Estamos enviando a reendirizar App pero cuando vemos nuestro div con id="root; no aparece el componente, eso es porque los componentes son invisibles para html pero son visibles para REACT y los puede utilizar reenderizar, para  para calculos internos-

Te preguntaras ¿si los componentes son invisibles que reenderiza react en html?
esos son los elementos div, header (en app.js) son elementos.

¿Cuales son las diferencias entre elementos y etiquetas de html.?
la diferencia es que es JSX no se traduce en una etiqueta html, se traduce a codigo en javascript (lo hace babel).

## Formas de crear componentes

En React hay varias formas de crear un elemento:

Con clases: Actualmente no se usa

	```javascript
class Componente extends React.Components {
	render() {
		return (
			//Codigo
		)
	}
} 
```
-------------------------------------------------

Con React.createElement: Se sigue usando. Es opcional

Sintaxis: React.createElement(elemento, atributos, texto/contenido)
En el elemento se colocaran el nombre de las etiquetas HTML. Ejemplo, h1, h2, p, form,…

En los atributos se colocaran los atributos de las etiquetas, es decir, id, class, placeholder,…

En texto o contenido se coloca contenido que va dentro de la etiqueta. Es decir, <h1>este contenido</h1>

```javascript
const ejemplo1 = React.createElement('h1', {'id': 'title'}, 'Hola React')

const ejemplo2 = React.createElement(
	'p',
	{
		'id': 'paragraph-elemental',
		'class': 'paragraph'
	},
	'Hola React'
)
```
-------------------------------------------------
Con Funciones: Se usa actualmente y es más cómodo que usar React createElement()
(El nombre comienza con mayuscula con eso identificamos que es un componente)
```javascript
function Componente = () => {
	return(
		//Codigo
	)
}
```

Con la extension ES7+ React/Redux/React-Native/JS snippets
si escribimos el atajo rf ya nos crea la estructura
-------------------------------------------------
## ReactDOM.render
(qué_elemento, dónde) se encarga de renderizar el elemento y colocarlo en el dom. Se pasa por por parametro el elemento a colocar en el DOM y en dónde se quiere colocar

Esto es un componente:

```javascript
//Componente
const Componente = () => {
	return (
		//Codigo
	)
}
<Componente />
```

Este es un elemento:
```javascript
//Elemento
<h1>Dorime</h1>
```
Nota: Los componentes son una version traducida de los elementos en HTML a Javascript (JSX). son invisibles para HTML (inspeccionar codigo)

## Props vs Atributos
Cuando estamos trabajando con React, para definir el atributo class, no usamos class sino className. React te puede aceptar class como atributo, pero luego te saldrá advertencias y, de paso, es una mala práctica

Cuando estamos trabajando con React, para definir el atributo class, no usamos class sino className. React te puede aceptar class como atributo, pero luego te saldrá advertencias y, de paso, es una mala práctica

lo que podria parecer un atributo es una propiedad (props)

Las propiedades las podemos recibir de los parametros de los componentes. Ejemplo:
```javascript
<App nombre="Dorime">
const App = (props) = {
	return (
		<p>{props.nombre}</p>
	)
}
```
Tambien podemos recibir children que vienen entre el contenido del Componente.
```javascript
<App>
	<p>Dorime, Ameno</p>
</App>
const App = (props) = {
	return (
{props.children}
	)
}
```




