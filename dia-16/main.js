 /*    dado una lista de edades de la compañia funval 
    let edades=[65,26,33,20,35,67,78]
    funval quiere saber la cantidad de personas q deben recibir el bono antiguedad
    este bono se da a las personas q tiene mas de 34 años 
    crear una lista de las edades q ingresan a el bono
    resl=[65,35,67,78]
 */

/* let edad =[65,26,33,20,33,67,78]
let resultado= [];
for (let j = 0; j < edad.length; j++) {
  if (edad[j]>34) {
    resultado.push(edad[j])
  }
} console.log(resultado);
 */

/* 
    crear un programa q reciba una matriz cuadrada de cualquier dimensaion ejemplo
    let mat=
    y realizar la suma de la diagonal principal y en otra variable la diagonal secundaria
*/
/* let mat =[[2,3,7],[35,78,2],[57,35,28]]
let resultado1 = 0
let resultado2=0;
for(let i=0; i<mat.length; i++){
resultado1 += mat[i][i]
 resultado2 +=  mat[i][mat.length - 1 - i];
}
console.log(resultado1)
console.log(resultado2) */

// 1. Crea un array con 5 nombres y muestra el primero y el último elemento en consola.
/* let nombres = ["Juan", "Pedro", "Carlos", "Martin", "Fernando"];
console.log(nombres[0]);
console.log(nombres[nombres.length - 1]); */

// 2. Agrega un elemento al final del array usando push y muestra el nuevo array.
/* let ele = ["Juan", "Pedro", "Carlos", "Martin", "Fernando"];
ele.push=["Moises"]
console.log(ele); */

// 3. Quita el último elemento usando pop y muestra el elemento eliminado y el array final.
// 4. Agrega un elemento al inicio del array usando unshift y muestra el resultado.

 /*  let ele =["Juan", "Pedro", "Carlos", "Martin", "Fernando"]; */
/* ele.unshift("Javier")
console.log(ele); 
  */
// 5. Elimina el primer elemento con shift y muestra el elemento eliminado.
// 6. Crea un array de números y muestra cuántos elementos tiene con length.
/* let numeros =[1,2,3,4,5] */

/* console.log(numero.length); */

// 7. Recorre un array de frutas con un bucle for y muestra cada fruta en consola.
// 8. Recorre un array de números con for of y muestra el doble de cada número.
/*  
 for (const numero of numeros) {
  console.log(numero*2)
}  */
// 9. Crea un array de colores y muestra el índice y el valor de cada elemento usando for.
// 10. Crea un array vacío y agrega 5 elementos con push dentro de un bucle for.
/* let vacio =[];/* (2) */
/* for(let i=1; i<5; i++){
vacio.push(prompt("numero"))
}
console.log(vacio)  */

// 11. Crea un array de 5 números y suma todos sus valores usando un bucle for.
// 12. Crea un array de palabras y cuenta cuántas tienen más de 4 letras.
/* let resul=0;

for(let i =0; i<ele.length; i++){
  if (ele[i].length >4 ) {
   resul+=1; 
  }
}
console.log(resul);
 */
// 13. Crea un array con nombres y verifica si existe un nombre específico recorriéndolo.
// 14. Crea un array con edades y muestra solo las edades mayores a 18.
/*  let edad =[0,26,15,20,33,67,78]
let resultado=[];
for (let j = 0; j < edad.length; j++) {
  if (edad[j]>18) {
    resultado.push(edad[j])
  }
} console.log("Edad de mayores de 18",resultado); */
// 15. Crea un array de números y crea un nuevo array con el triple de cada número.

/* let nmer2= [];
for (let i = 0; i < nmr.length; i++) {
  nmer2.push(nmr[i]*3)
     
}console.log(nmer2) */

// 16. Crea un array de precios y calcula el total sumando todos sus elementos.
/* let suma;
for (let i = 0; i < nmr.length; i++) {
suma+=nmr[i]
suma++
  
}console.log(suma) */

// 17. Crea un array de 10 números y cuenta cuántos son pares.

/* let numero =[1,2,3,4,5,6,7,8,9,]  
let par = 0;
 
for (let i = 0; i < numero.length; i++) {
  if (numero[i]%2===0) {
    par++;
    
  }
  
  
}console.log(par) */

// 18. Crea un array con nombres y agrega uno nuevo solo si no está repetido.
/* let nombre =["juan","Pedro","Juan","Moises"];
let nuevo=prompt("Ingrese el nombre");
let existe=false 
for (let j = 0; j < nombre.length; j++) {
if (nombre[j].toLocaleLowerCase( )=== nuevo.toLocaleLowerCase()) {
  existe=true;
 
}
} 
if (existe) {
console.log("El nombre ya esta")
}  else{
  nombre.unshift(nuevo)
  console.log("Nuevo nombre agregado", nuevo); 
}  

console.log(nombre) */
// 19. Crea un array con números y muestra cuál es el mayor (sin usar Math.max).
/* let nmr =[-1,-2,-3,-4,-5,-6] */
/* let mayor=0;
for (let i = 0; i < nmr.length; i++) {
if (nmr[i]>=mayor) {
  mayor=nmr[i]
}
  
}
console.log("El numero mayor es: ",mayor)  */
// 20. Crea un array con números y muestra cuál es el menor (sin usar Math.min).
/* let menor=nmr[0]
for (let j = 0; j < nmr.length; j++) {
  if (nmr[j] <= menor ) {
    menor=nmr[j]
  }
  
}console.log(menor); */

// 21. Crea un array con nombres y elimina el último elemento si hay más de 5 elementos.

/* let nombre =["juan","Pedro","Juan","Moises","Jose","Hola"];
let mas;
 
for (let i = 0; i < nombre.length; i++) {
  
  if (nombre[i],length > 5 ) {
    nombre.pop();
  }
}
console.log(nombre) */






/* let nombre =["juan","Pedro","Juan","Moises"];
let nuevo=prompt("Ingrese el nombre");
let existe=false 
for (let j = 0; j < nombre.length; j++) {
if (nombre[j].toLocaleLowerCase( )=== nuevo.toLocaleLowerCase()) {
  existe=true;
  break;
}
} 
if (existe) {
console.log("El nombre ya esta")
}  else{
  nombre.unshift(nuevo)
  console.log("Nuevo nombre agregado", nuevo); 
}  

console.log(nombre) */

// 22. Crea un array con 5 nombres y usa un bucle para mostrar cada nombre en mayúsculas.
/* let nombre= ["Juan","Pepe","Alison","Moises",];

for (let m = 0; m < nombre.length; m++) {
console.log(nombre[m].toUpperCase());
}

 */

// 23. Crea un array con 5 números y crea otro array con los números invertidos.
/*  let numero =[34,56,46,54,67]; */
/* let inver=0;

for (let j = 0 ; j < numero.length; j++) {
  inver++
for (let i = 0; i < numero[j].length; i++) {
  inver++
 inver=numero[j].numero[i]
  
  
}
  console.log(inver);
}  */
 
// 24. Crea un array de 5 números y calcula el promedio.
/* let promedio=0;
for (let j = 0; j < numero.length; j++) {
 promedio+=numero[j]
  
}promedio/=numero.length
console.log(promedio) */

// 25. Crea un array con nombres y elimina un nombre específico recorriéndolo.

// 26. Crea un array de notas (0 a 100) y cuenta cuántos aprobaron (>= 51).


// 27. Crea un array con varios animales y muestra en qué posición está “perro”.
let animal



// 28. Crea un array de frutas y cambia el valor de la segunda fruta por otra nueva.
// 29. Crea un array con 5 números y muestra solo los que estén en posiciones pares.
// 30. Crea un array con nombres y forma una cadena con todos los nombres separados por coma.

// 3. Crea un array de números y encuentra el número mayor y el menor recorriéndolo con un bucle for.

/* let nmr =[2,3,42,1,332,45]
let mayor=0;
let menor=nmr[0]
for(let i=0; i < nmr.length; i++){
if (mayor <= nmr[i]) {
  mayor=nmr[i]

}
if (menor >= nmr[i]) {
  menor=nmr[i]
}
}

console.log("El menor es:"+menor);

console.log("Es mayor es:"+mayor);
 */


