Algoritmo aprender_while
	Definir nAzar, intentos, nUser Como Entero
	
	nAzar = Aleatorio(1,10);
	
	intentos = 3;
	
	Mostrar "Adivina número del 1 al 10, tienes: " intentos " intentos";
	
	Escribir "Ingresa un número"
	Leer nUser;
	
	Mientras (nAzar <> nUser y intentos > 1) Hacer
		Si (nAzar > nUser) Entonces
			Mostrar "Muy bajo";
		SiNo
			Mostrar "Muy alto";
		Fin Si
		intentos = intentos - 1;
		Mostrar "Te quedan " intentos " intento(s)!";
		leer nUser;
	Fin Mientras
	
	Si (nAzar == nUser) Entonces
		Mostrar "Adivinaste!! El número era " nAzar;
	SiNo
		Mostrar "Perdiste!! Se te acabaron los intentos! El número era: " nAzar;
	Fin Si
	
FinAlgoritmo
