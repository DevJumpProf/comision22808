
# Lección 7 : REACT - Eventos y Estados

* Manejo de eventos (internos)
* Manejo del estado
* ¿Qué son los Hooks?
* Estado en componentes clase
* Estado en componentes funcionales
* Tipos de componentes

## Manejo de eventos (internos)

En react todo lo que empiece con on nos va a ayudar a recibir los eventos de nuestros usuarios al cual le vamos a enviar una función que se ejecute cuando los usuarios ejecuten la acción que estamos escuchando. 

Si no usamos una arrow function el código se va a ejecutar de una, se tiene que envolver en una función para que se ejecute cuando sea necesario, en este caso cuando se de click.

<button className="CrearTareasBoton" onClick={() => console.log("click")}>

Los eventos también se pueden crear guardando la función en una constante, y al momento de llamarlo solo se nombra.

const onClickButton = () =>{
alert('Aquí debería ir el modal');

};

return (

<button className="CreateTodoButton" onClick={onClickButton}>

+

</button>

);

o asi

```javascript
const onClickButton = (*msg*) => {
	alert(*msg*);
	
	};
	
	return (
	
	<button
	
	className="CreateTodoButton"
	
	onClick={() => onClickButton("Aquí va el modal:)")}
	
	>
	
	+
	
	</button>
	
);
```

## Manejo del estado

El estado nos permite manejar los valores e información guardada en nuestros componentes de manera que puedan cambiar en el futuro, estos van a cambiar cuando el usuario haga alguna acción.

Vamos a combinar el estado con los eventos para que la app reaccione a las interacciones de los usuarios.

En el componente padre (App) vamos a crear un estado, este estado se lo vamos a pasar por medio de props a todos los componentes que llamamos dentro de App, de esta manera logramos que todos los componentes puedan cambiar (sin importar en que componente interactúe el usuario) porque escuchan los cambios enviados desde el componente padre.

De esta manera agregamos un estado a nuestros componentes cuando los creamos como funciones

```javascript
const estado = React.useState();
```

Se puede hacer también con clases pero en esta ocasión usaremos React Hooks, que son herramientas que empiezan por “use”. Es importante que cuando queramos crear un estado en estos componentes que son funciones tenemos que llamar al useState, y el estado inicial se escribe directamente.

useState devuelve un array de dos posiciones, la posición 0 tiene nuestro estado, y la posición 1 tiene una función llamada setState (o como queramos llamarla) que nos va a permitir editar nuestro estado. Cuando se actualiza el estado y se llama la función setState lo que ocurre es que se vuelve a renderizar el componente.

```javascript
const [state, setState] = React.useState("Juan"); 
//state y setState pueden llevar el nombre que queramos
```

NOTA: React no puede renderizar varias etiquetas en un mismo componente, si no que se necesita una etiqueta que los envuelva a todos o se puede mandar un array.

## ¿Qué son los Hooks?
Los Hooks son funciones que te permiten enganchar el estado de React y el ciclo de vida desde componentes funcionales, entre muchas otras cosas. Nos permiten usar React sin clases.

## Estado en componentes clase

Para manejar el estado en componentes clase necesitamos crearlo como una propiedad dentro de nuestro componente clase, usamos this.state, y para actualizar el estado, la clase de React ya tiene un setter: this.setState. (Dentro de este tipo de componentes no se pueden usar los hooks).
```javascript
class Component extends React.Component {
    constructor(){
        this.state = {
            patito: '👍'
        }
    }
    
    render(){
        return (
            <button onClick={()=>this.setState("Has dado un like")}>{this.state.patito}</button>
        )
    }
}
```

## Estado en componentes funcionales

El manejo del estado en estos componentes es mucho más sencillo, utilizando el hook de estado.
Podemos importar este hook directamente de React o desestructurándolo de React:

```javascript
import React from 'react';

function Component() {
    const [count, setCount] = React.useState("");
}
import { useState } from 'react';

function Component() {
    const [count, setCount] = useState("");
}
```
Una vez lo importamos ya podemos usarlo en nuestro componente, este hook nos regresará un array con dos elementos:

El valor de nuestro estado (Getter).
La función que se ocupa de actualizar nuestro estado (Setter).
También podemos pasarle un valor inicial a nuestro estado dentro de los paréntesis.
Por ejemplo, en el buscador de nuestra aplicación,
```javascript
import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState('');
  
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return [
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
    />,
    <p>{searchValue}</p>
  ];
}

export { TodoSearch };
```

## Tipos de componentes

Stateful: son componentes que tienen declaración de estado en su función.

Stateless: son componentes que no tienen ningún tipo de estado declarado en el cuerpo de la función.