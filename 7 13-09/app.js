

//ARRAY - ARREGLO - MATRIZ
       // indice      0        1       2           3           4         5   6
/* let instrumentos = ["bongo","piano","tumbadoras","guitarra","timbales", 125,true] */
//lenght.-

/* document.write (instrumentos) */

// Operadores


/* let num1=10
let num2 = "10"
let num3= 20
let num4=10 */
/* 
let resultado = num1 == num2  */ // true
/* let resultado = num1 === num2 */ // false
/* let resultado= num1 <= num4  */   //<  >  <=  >=

/* let resultado = num1 === num2 &&  num1 <= num4 */
                  //false        true     

                  
/* let resultado = num1 === num2 ||  num1 >= num4 */
                    //false        true    

 /*    let resultado = num1 !== num2 */

/*  document.write(resultado)  */


// funciones

/* function sumar(num1,num2) {
    
document.write (num1+num2)
}
sumar(Number(prompt("numero 1")),Number(prompt("numero 2"))) */

/* function saludar (nombre, edad){
    document.write(`Hola, ${nombre} tu edad es ${edad} `)
}
saludar (prompt ("Nombre"), prompt ("edad")) */


//--------------------------

// funcion flecha - arrow function
/* const saludar = (nombre, edad)=>{
    document.write(`Hola, ${nombre} tu edad es ${edad}`)
}
saludar ("Robin", 58) */
/* const sumar = (num1,num2) =>{
document.write (num1+num2)
}
sumar(Number(prompt("numero 1")),Number(prompt("numero 2"))) */

/* const sumar = num1 =>     // sin parentesis - sin llaves
    document.write (num1+30)

sumar(10) */

// IF - ELSE 


/* if (40<30){
document.write ("es mayor")
}else{
    document.write ("es menor")
}
 */

//
/* function esMayor (nombre, edad){
if (edad>=18){
    document.write (`${nombre} sos mayor tenes ${edad} años, podes manejar`)
}else {
    document.write ("NO podes Manejar")
}
}

esMayor (prompt("decime tu nombre"), prompt("decime tu edad"),) */

/* function esMayor (nombre, edad){
    if (edad>=18 && edad<=94){
        document.write (`${nombre} sos mayor tenes ${edad} años, podes manejar`)
    }else {
        document.write ("NO podes Manejar")
    }
    }
    
    esMayor (prompt("decime tu nombre"), prompt("decime tu edad"),) */


    // pasar a funcion flecha