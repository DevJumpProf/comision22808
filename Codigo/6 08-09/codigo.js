


/* ## Math */
/*
1 + 1 = 2
2 * 2 = 4
2 - 2 = 0
2 / 2 = 1
 */

/* ### %
Algo que quizás no haya visto antes es el Módulo (`%`), este operador matemático dividirá los dos números y devolverá el resto.
 */
/*
 21 % 5 = 1;
21 % 6 = 3;
21 % 7 = 0; 
*/


/* ### Math.pow */

/* Math.pow(2,2) = 4;
Math.pow(3,2) = 9;
Math.pow(3,3) = 27; */

/* ### Math.round , Math.floor, Math.ceil */

/* Math.round(6.5) = 7;  *//* round` redondeará un número al número entero más cercano. */
/* Math.round(6.45) = 6; */

/* Math.floor(6.999) = 6; */ /* `.floor` siempre redondeará un número al número entero más cercano hacia abajo. ` */


/* Math.ceil(6.0001) = 7; */   /* .ceil` siempre se redondeará al número entero más cercano hacia arriba. */





/* ### .length

El tipo de datos "string" tiene un método incorporado llamado `.length`. Cualquier cadena que llamemos a esto devolverá la cantidad de caracteres en esa cadena.

 */
/* let nombre = "Nadia"

document.write(nombre.length) */

/* crear un algoritmo
por prompt el nombre a la persona
por prompt la edad a la persona

salude con un alert "hola nombre tu edad es: edad"

va a mostrar en el documento : la cantidad de letras de nombre sumado a tu edad da un resultado de : resultado */



let nombre = prompt ("Ingresa tu nombre");
let edad = Number(prompt ("Ingresa tu edad"));

alert ( "hola " + nombre + " tu edad es" + edad);
let resultado = nombre.length + edad;
/* document.write ("la cantidad de letras de " + nombre + "sumado a tu edad, da como resultado" + resultado );
 */

document.write (`la cantidad de letras de ${nombre} sumado a tu edad da como resultado ${resultado}`)






