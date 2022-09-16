
/* ## Switch */
/* let nombre = prompt("Ingresa tu nombre")
let semaforo = Number (prompt("Ingresa 1 = Rojo, 2 = Amarillo, 3= Verde")) */
/* 

switch (semaforo) {
    case 1:
        document.write (`${nombre} Semaforo en Rojo NO podes Pasar`)
 
        case 2:
            document.write (`${nombre} Semaforo en Amarillo PRECAUCION`)
            break;
            case 3:
                document.write (`${nombre} Semaforo en Verde Podes Pasar`)
                break;
    default:
        document.write (`${nombre} No elegiste una opcion correcta`)
        break;
} */

/* let nombre = prompt("Ingresa tu nombre")
let recomendacion = (prompt("Ingresa: serie , pelicula, libro"))


switch (recomendacion.toLowerCase()) {
    case "serie":
        document.write (`${nombre} Te recomendamos : The Boys`)
        break;
        case "pelicula":
            document.write (`${nombre} Te recomendamos : sexto sentido`)
            break;
            case "libro":
                document.write (`${nombre} Te recomendamos : El Solitario - Guy des cars`)
                break;
    default:
        document.write (`${nombre} No elegiste una opcion correcta`)
        break;
} */

/* ## Sentencia while  */
/* 
let numero = 1
    
while (numero<10){
    numero++; 
 console.log(numero)

   }
    */

/*    ##  Sentencia do while */
/* let numero = 1
do{

 document.write(numero + "<br>");
 numero++;
    }
    while (numero<10) */
/*     let numero = 11
    while (numero<1000){
        numero++;
        document.write(numero+ "<br>");
        if (numero==10){
            break;
        }
    }
 */

//
/* ## Método Aleatorio - Math.random() */

/* document.write(Math.round(Math.random()*10)) */


/* function quiniela (nombre,numero){
    document.write (`${nombre} tu numero es el : ${numero}`)
}

quiniela (prompt("Ingresa tu nombre"),(Math.round(Math.random()*100))) */

/* 
let oportunidades = 3
let aleatorio = Math.round(Math.random()*10)

let numero = Number(prompt("Ingresa un numero del 0 al 10"))


switch (numero) {
    case (numero ===aleatorio):
        document.write (`Wow Ganaste Adivinaste el Numero ${numero}`)
        break;
        case (numero >aleatorio):
        oportunidades-=1
        document.write (`Tu numero  ${numero} es mas alto que el numero al Azar Te quedan ${oportunidades} oportunidades `)
        break;
        case (numero <aleatorio):
            oportunidades-=1
            document.write (`Tu numero  ${numero} es mas Bajo que el numero al Azar Te quedan ${oportunidades} oportunidades `)
        break;

    default:
        document.write (`Tu numero  ${numero} es cualquier verdura`)
        break;
}
 */


/* function numeroAzar(oportunidades,aleatorio,numero) {

while (aleatorio != numero && oportunidades > 1) {
   if (aleatorio > numero) {
    document.write (`Tu numero  ${numero} es mas Bajo que el numero al Azar Te quedan ${oportunidades} oportunidades `)
    break;
} else {
    document.write (`Tu numero  ${numero} es mas alto que el numero al Azar Te quedan ${oportunidades} oportunidades `)
   
}

   if (numero ==aleatorio) {
    document.write (`Wow Ganaste Adivinaste el Numero ${numero}`)
} else {
    document.write (`Perdiste!! Se te acabaron los intentos! El número era: ${aleatorio}`)

}

}

 */




