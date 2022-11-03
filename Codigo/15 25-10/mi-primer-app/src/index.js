import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Boton from './Boton';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
    <Boton numero = {1} />
    <Boton numero = {2} />
    <Boton numero = {3} />
    <Boton numero = {4} />
    <Boton />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

