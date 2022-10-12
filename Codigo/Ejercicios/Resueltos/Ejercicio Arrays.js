/* Ejercicio  arrays */

/* 1)Declarar un array que vamos a llamar “clasificaciones” con los siguientes valores:
Marcos, Franco, Agostina, Leon, Juan Cruz,Eduardo */

const clasificaciones = ["Marcos", "Franco","Agostina", "Leon", "Juan Cruz", "Eduardo"]

/* (vamos a suponer que esa es la orden de clasificación de un concurso) */

/* 2)recorre el array (clasificaciones) e Imprime la clasificación actual.
 (realizar una funcion "mostrarClasificacion()" esa funcion debe recorrer el array con un bucle for y mostrar la clasificacion) */

document.write ("POSICION INICIAL" + "<br>")

const mostrarClasificacion= ()=>{
    for (let i=0; i<clasificaciones.length; i++){
        document.write((`${i+1}. ${clasificaciones[i]} <br>`))
    }
}
//ALE 
/* clasificaciones.forEach((elemento, i) => {
    console.log(`${i+1} - ${elemento}`)
}
) */
mostrarClasificacion()

/* 3)El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array: */
/* a)Leon adelanta a Agostina */
//opcion1
clasificaciones.splice(2,2,"Leon", "Agostina")
console.log (clasificaciones)
//opcion 2
/* clasificaciones [2]= "Leon"
clasificaciones [3]= "Agostina" */

/* b)Eduardo es descalificado y se elimina del concurso */

clasificaciones.pop()
console.log(clasificaciones)

/* c)Detrás de Marcos y antes de Franco se clasifican dos nuevas concursantes: Julieta y Martina, en ese orden */
clasificaciones.splice(1,0,"Julieta, Martina")
console.log(clasificaciones)
/* d)Hay una nueva participante que pasa a encabezar la clasificación: Alicia */
clasificaciones.unshift("Alicia")
console.log(clasificaciones)
/* e)muestra la clasificación actualizada (mostrarClasificacion())y comprueba que se ha hecho correctamente  */

document.write("<br>")

document.write ("POSICION FINAL" + "<br>")

mostrarClasificacion()