# Lección 6 : REACT - Componentes 

* Componentes en Nuestra Lista de tareas
* key
* Encapsular Componentes


## Componentes en Nuestra Lista de tareas


React.Fragment nos permite enviar una etiqueta por componente, dentro de esta podemos mandar la cantidad que queramos, nos evita usar divs innecesariamente sin afectar la UI de la app.

Una manera más común de utilizar un fragment en react es con las llaves vacías <></>

Para evitar usar nombres que no son al momento de exportar usamos export {nombreFuncion};

key ⇒ para que react pueda identificar cual componente es cuál dentro de una lista y así evitar render innecesarios cuando un elemento no debe cambiar.

## Otras formas de crear componentes

Otra forma de crear los componentes en react es usando Arrow Functions, donde esto:

function TodoCounter(props){
return (
	// lógica del componente
)
}

Se puede rescribir como:


const TodoCounter = (props) => {
	return (
		// ESe parentesis en el return es importante!
	)
}


## key

 las keys cuando iteramos en un componente como hicimos en nuestra app encontre:
.

Las keys ayudan a React a identificar que ítems han cambiado, son agregados, o son eliminados. Las keys deben ser dadas a los elementos dentro del array para darle a los elementos una identidad estable.

.
Sí ejecutas un código sin usar los keys tendrás un warning en la consola. Una key es un atributo especial string (no olvidar) que debes incluir al crear listas de elementos.
.
La mejor forma de elegir una key es usando un string que identifique únicamente a un elemento de la lista entre sus hermanos. Habitualmente vas a usar IDs de tus datos como key
.
Se podría utilizar el index del array pero esta permitido solo como ultima opción porque si modificas las posiciones te causaría problemas.
.
Y como dije anteriormente, la idea es identificarlas entre hermanos. Las keys usadas dentro de arrays deberían ser únicas entre sus hermanos. Sin embargo, no necesitan ser únicas globalmente. Podemos usar las mismas keys cuando creamos dos arrays diferentes

nunca olviden sus keys cuando iteran sobre listas y también que pueden reutilizar esas mismas si haces más iteraciones sobre listas que NO sean hermanas.

## Encapsular Componentes

Import React from 'react’
Indica que estamos en un componente de React
Hay tres maneras de evitar envolver los componentes en Divs innecesarios

<React.Fragament> 
	Aquí van los demás componentes
</React.Fragament>

<Fragment> 
	Aquí van los demás componentes
</Fragament>

<>
	Aquí van los demás componentes 
</>

O si el componente es un componente especifico como por ejemplo el Header, Main, Slider, Footer

se puede encerrar la App con esas etiquetas de HTML
Ejemplo:

	<header>
		Demás componentes
	</header>

Actualmente se usan llaves vacías normalmente, son equivalentes a usar React.Fragment