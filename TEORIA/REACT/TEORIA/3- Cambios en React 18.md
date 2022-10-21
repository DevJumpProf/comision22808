# Lección 3 : REACT - Cambios en React 18: ReactDOM.createRoot

* Concepto
* Cambios en React 18: ReactDOM.createRoot
* Migración de ReactDOM.render a ReactDOM.createRoot
* Actualizaciones de React

## Concepto

ReactDOM.render(QUE, DONDE)

Quiere decir que como primer parámetro el render recibe el componente que queremos renderizar y el segundo parámetro es donde lo vamos a mostrar

## Cambios en React 18: ReactDOM.createRoot

React 18 fue publicado el 29 de marzo de 2022. Sus cambios más importantes van a ayudar muchísimo para optimizar el render e hidratación de aplicaciones o componentes de React en el DOM. El más importante, crucial y significativo fue la migración de ReactDOM.render a ReactDOM.createRoot.

En la próxima clase vamos a usar Create React App, una de las herramientas más populares para instalar un entorno de desarrollo con React.js de forma muy rápida. No hay absolutamente ningún problema si decides usar React 18. Solo ten en consideración los cambios para hacer el render principal de tu aplicación.

## Migración de ReactDOM.render a ReactDOM.createRoot

Antes de React 18:
```javascript
const root = document.getElementById('root');
ReactDOM.render(e(LikeButton), root);
```

Desde React 18:
```javascript
const rootElement = document.getElementById('root');
const root = ReactDom.createRoot(rootElement);
root.render(e(LikeButton));
```

-------------------------------------------------

Antes de React 18:
```javascript
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```
Desde React 18:
```javascript
const rootElement = document.getElementById('root');
const root = ReactDom.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## Actualizaciones de React
En los siguientes recursos puedes estudiar más a detalle los cambios de React y ReactDOM en su versión 18:

https://reactjs.org/blog/2022/03/29/react-v18.html

https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html


Filosofía y principios de diseño en React
⚠️ Si apenas estás empezando tu ruta de aprendizaje con React.js, no tenes que preocuparte por nada de esto. Todas las herramientas se actualizan constantemente,y las iremos aprendiendo. Esa es la norma y el día a día en el mundo de la tecnología. Más adelante comprenderás la importancia y lo divertido de todas estas actualizaciones.

¡Ahora sí! ¡Te espero en la siguiente clase para crear nuestra primera aplicación con React.js! 💪