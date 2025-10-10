
// BUCLE FOR (EJERCICIOS 1 - 15)
// =======================================================

/*
1. Muestra los números del 1 al 10 usando un bucle for.
*/
// RESPUESTA AQUÍ 👇

/* for (let n = 1; n <=10 ; n++){
console.log(n);
} 
/*
2. Muestra los números del 10 al 1 en orden descendente usando un bucle for.
*/
// RESPUESTA AQUÍ 👇

/* for (let n = 10; n >=1  ; n--){
console.log(n);
} */
 
/*
3. Muestra solo los números pares del 1 al 20 usando un bucle for.
*/
// RESPUESTA AQUÍ 👇

/* for (let m = 0; m <=20; m +=2 ){
console.log(m);
} */

/*
4. Muestra solo los números impares del 1 al 20 usando un bucle for.
*/
// RESPUESTA AQUÍ 👇
/* for (let m = 1; m <=20; m +=2 ){
console.log(m);
} */
/*
5. Muestra la tabla de multiplicar del 5 (del 1 al 10).
*/
// RESPUESTA AQUÍ 👇
/* let numero =5;
for (let m = 1; m <= 10; m++ ){
console.log(numero," x ",m, "=" ,(numero*m));
} */
/*
6. Calcula la suma de los números del 1 al 100 usando un bucle for.
*/
// RESPUESTA AQUÍ 👇
 /* let nm =0;
for (let m = 1; m <= 100; m++ ){
nm+=m;
} console.log(nm); */
/*
7. Muestra los múltiplos de 3 entre 1 y 30 usando un bucle for.
*/
// RESPUESTA AQUÍ 👇

/* for (let m=0; m <=30; m+=3 ){
console.log(m)
} */
/*
8. Calcula el factorial de un número (por ejemplo 5) usando for.
*/
// RESPUESTA AQUÍ 👇

/* let  nmr =6 
let factorial=1
for (let n=1 ; n<=nmr ;n++ ){
    factorial *=n;
}
console.log(nmr,"! = ",factorial) */
/*

9. Muestra los primeros 10 números cuadrados (1², 2², 3²…).
*/
// RESPUESTA AQUÍ 👇

/* for(let i=1; i<=10; i++){
   console.log(i,"² = ",(i*i))
} 
 */
/*
10. Muestra los números del 1 al 50 y muestra "Múltiplo de 10" cuando corresponda.
*/
// RESPUESTA AQUÍ 👇
/* for (let i = 1; i <= 50; i++) {
  if (i % 10 === 0) {
    console.log(i + " → Múltiplo de 10");
  } else {
    console.log(i);
  }
} */
/*  */
/*
11. Calcula la suma de los números pares entre 1 y 50.
*/
// RESPUESTA AQUÍ 👇
/* let suma=0;
for(let i=2; i<=50; i+=2){
suma +=i
}
console.log("la suma de los pares del 1 al 50 =",suma); */
/*
12. Calcula la suma de los números impares entre 1 y 50.
*/
// RESPUESTA AQUÍ 👇
/* let sum=0;
for(let i=1; i<=50; i+=2){
sum +=i
}
console.log("la suma de los pares del 1 al 50 =",sum); */

/*
13. Muestra los números del 1 al 20 e indica si cada uno es "par" o "impar".
*/
// RESPUESTA AQUÍ 👇
/* for(let i=1; i<=20; i++ ){
   if (i%2===0) {
      console.log(i,"es par")
   } else {
      console.log(i,"es impar")
   }
} */
/*
14. Muestra los números del 1 al 30 e indica si son múltiplos de 3.
*/
// RESPUESTA AQUÍ 👇
/* for(let i=1; i<=30; i+=2){
   if (i%3===0) {
      console.log(i,"es multiplo");
      
   }else {
      console.log(i);
      
   }}   */
/*
15. Muestra un conteo regresivo desde 20 hasta 0.
*/
// RESPUESTA AQUÍ 👇
/*  for(let i=20; i>=0; i--){
   console.log(i)
 }
 */
// =======================================================
// BUCLE WHILE (EJERCICIOS 16 - 25)
// =======================================================

/*
16. Muestra los números del 1 al 10 usando un bucle while.
*/
// RESPUESTA AQUÍ 👇
/* let x=1;
while (x<=10) {
   console.log(x)
   x++;
} */
/*
17. Muestra los números pares del 2 al 20 usando while.
*/
// RESPUESTA AQUÍ 👇
/* let y=2;
while (y<=20) {
   console.log(y)
   y+=2;
} */
/*
18. Muestra los números del 10 al 1 usando while.
*/
// RESPUESTA AQUÍ 👇
/* let x=10;
while (x>=1) {
   console.log(x);
   x--;
} */
/*
19. Muestra los números del 1 al 30, pero solo los múltiplos de 5.
*/
// RESPUESTA AQUÍ 👇
/*  let y=1;

while (y<=30) {
   if (y %5=== 0) {
       console.log(y);
}
   y++;
}  */
/*
20. Calcula la suma de los números del 1 al 20 usando while.
*/
// RESPUESTA AQUÍ 👇

/* let sum=0
let i =1
while (i<=20) {
   sum+=i
   i++;
}  console.log(sum);
 */

/*
21. Muestra los números del 1 al 15 e indica si son pares o impares usando while.
*/
// RESPUESTA AQUÍ 👇
/* let x=0;
while (x<=14) {
   x++;
   if (x%2==0) {
      console.log(x,"son par")
   } else {
      console.log(x,"son impar")
   }
} */
/*
22. Muestra la tabla de multiplicar del número 7 usando while.
*/
// RESPUESTA AQUÍ 👇

/* let a=7;
let x=0
while (x<=9) {

  x++
   
   console.log(a,"x",x,"=", (a*x));
} */


/*
23. Muestra los múltiplos de 4 entre 1 y 40 usando while.
*/
// RESPUESTA AQUÍ 👇

/* let x=1;
while (x<=40) {
   if (x%4===0) {
      console.log(x)
   }
   x++;
}
 */
/*
24. Calcula el factorial de un número (por ejemplo 6) usando while.
*/
// RESPUESTA AQUÍ 👇

/* let nm=10;
let f =1;
let i=1

while (i<=nm ) {
   f *=i;
   i++

}console.log(nm,"!=",f ) */




/*
25. Muestra un conteo regresivo desde 15 hasta 0 usando while.
*/
// RESPUESTA AQUÍ 👇


/* let i =16;
while (i>=2) {
   i--
   console.log(i);
} */



// =======================================================
// BUCLE DO...WHILE (EJERCICIOS 26 - 30)
// =======================================================

/*
26. Muestra los números del 1 al 10 usando do...while.
*/
// RESPUESTA AQUÍ 👇


 /*   let i=1;
 do {
   console.log(i);
   i++;
} while (i<=10);  */ 

 

/*
27. Pide un número y muestra su tabla de multiplicar usando do...while.
*/
// RESPUESTA AQUÍ 👇

/* let nmr=parseInt(prompt("Ingrese un numero"))
let x=0;
do {
   console.log(nmr,"x",x,"=",(nmr*x));
   x++
} while (x<=10); */


/*
28. Muestra los números del 10 al 1 usando do...while.
*/
// RESPUESTA AQUÍ 👇

/* let b=10;

do {
   console.log(b);
   b--;
} while (b>=1); */



/*
29. Muestra los números del 1 al 30 y muestra un mensaje cuando sea múltiplo de 6.
*/
// RESPUESTA AQUÍ 👇

/* let y=1
do {
   y++;
   if (y%6===0) {
      console.log(y);
      
   }
} while (y<=30); */



/*
30. Calcula la suma de los números del 1 al 50 usando do...while.
*/
// RESPUESTA AQUÍ 👇

/* let suma=0;
let i =1;
do {
   suma+=i
   i++;
} while (i<=50);
console.log(suma); */

// =======================================================
// COMBINACIÓN DE TEMAS (EJERCICIOS 31 - 40)
// =======================================================

/*
31. Pide un número y muestra todos los números desde 1 hasta ese número.
   Si es múltiplo de 3, muestra "Fizz", si es múltiplo de 5, muestra "Buzz".
*/
// RESPUESTA AQUÍ 👇

/* let nmr=parseInt(prompt("Ingrese un numero"))

for(let i=1; i<=nmr; i++ ){
   if (i%3===0 &&i%5===0 ) {
      console.log(i,"FizzBuzz");
   } else if(i%3===0){
      console.log(i,"Fizz");
   }
    else if(i%5===0){
      console.log(i,"Buzz");
   }
   else {
      console.log(i);
   }
}
 */


/*
32. Pide al usuario un número y calcula su factorial usando un bucle.
*/
// RESPUESTA AQUÍ 👇

/* let nm=parseInt(prompt("Ingresa un numero"));
let factoria=1;

for(let i=1; i<=nm; i++ ){
factoria *=i;
}
console.log(nm,"! = ",factoria); */


/*
33. Pide nombre de usuario y contraseña.
   Si usuario es "Kevin" o "Belen" y contraseña es "1234",
   muestra "Acceso autorizado", de lo contrario "Denegado".
*/
// RESPUESTA AQUÍ 👇

/* let nmr;
let pass;

do {
   nmr=prompt("Nombre de usuario").toLowerCase();
   pass =parseInt(prompt("Contraseña"))
if ((nmr !== "kevin" && nmr !== "Belen") ||  pass !== 1234) {
   
   console.log("Acesso denegado");
}
}

 while ((nmr !== "kevin" && nmr !== "Belen") ||  pass !== 1234) 
   console.log("Acceso autorizado");
 
 */ /* no pude quitarle el prompt cuando acceso denegado */



/*
34. Pide un número y muestra todos los pares hasta ese número.
   Luego muestra la cantidad total de pares encontrados.
*/
// RESPUESTA AQUÍ 👇


/* let nmr=parseInt(prompt("Ingresa el numero"))

for(let i=0; i<=nmr; i+=2 ){
console.log(i);


}nmr/=2
console.log ("Total de los pares",nmr); */


/*
35. Calcula la suma de todos los múltiplos de 3 y 5 entre 1 y 100.
*/
// RESPUESTA AQUÍ 👇

/* let nmr=0;
for(let i=1; i<=100; i++){
if (i%3===0) {
   nmr+=i
}
} console.log(nmr)

let suma=0;
for(let i=1; i<=100; i++){
if (i%5===0) {
   suma+=i
}
} console.log(suma)

 */

/*
36. Pide un número y muestra si es primo o no, usando un bucle para verificar divisores.
*/
// RESPUESTA AQUÍ 👇
 


/*
37. Simula un inicio de sesión:
   Tienes 3 intentos para ingresar correctamente usuario="admin" y contraseña="1234".
   Si falla los 3 intentos, muestra "Acceso bloqueado".
*/
// RESPUESTA AQUÍ 👇

/*
38. Pide 5 números y calcula su suma total y promedio.
*/
// RESPUESTA AQUÍ 👇



/*
39. Muestra los números del 1 al 50.
   Si el número es divisible por 3 muestra "Fizz",
   si es divisible por 5 muestra "Buzz",
   si es divisible por ambos muestra "FizzBuzz".
*/
// RESPUESTA AQUÍ 👇

 /* let nmr=parseInt(prompt("Ingrese un numero"))

for(let i=1; i<=nmr; i++ ){
   if (i%3===0 &&i%5===0 ) {
      console.log(i,"FizzBuzz");
   } else if(i%3===0){
      console.log(i,"Fizz");
   }
    else if(i%5===0){
      console.log(i,"Buzz");
   }
   else {
      console.log(i);
   }
} */ /* lo copie de copie de arriba */


/*
40. Juego de adivinar número:
   Genera un número aleatorio entre 1 y 10.
   Usa un bucle para pedir al usuario que adivine.
   Da pistas si el número es mayor o menor.
   El juego termina cuando adivina.
*/
/* // RESPUESTA AQUÍ  /* 👇 */
