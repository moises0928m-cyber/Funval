//  EJERCICIO 2: Sumar números >
// Dado un array de números, usa forEach para sumar todos los valores y mostrar el resultado final en consola.
/* let numeros = [5, 10, 15, 20];
 let suma=0;
numeros.forEach((num) => {
    suma+=num 
}); console.log(suma);
 */
// Tu código aquí 👇
// numeros.forEach( ... )
//  EJERCICIO 3: Mostrar índice y valor
// Dado un array de frutas, usa forEach para mostrar en consola:
// "En la posición X está la fruta Y"
/* let frutitas = ["Manzana", "Banana", "Pera", "Sandía"]; */
// Tu código aquí 👇
/* /
frutitas.forEach((fruta,i)=>{
    console.log(i,fruta);
    
})  */
/*  let estudiantesFunval = [
  "DAVID",
  "BOREN",
  "JOSE PELICO",
  "MOISES",
  "BELEN",
  "BOREN",
  "EDMUND",
  "JOSE PELICO",
  "JOSE PELICO",
  "ALFREDO", 
 ]; 
  */
 /*    utilizar map para q en los lugares donde Jose Pelico puso su nombre
    puedan cambiarlo x estudiante no registrado */

 /* let arraynew=estudiantesFunval.map((fv)=>{
    if (fv === "JOSE PELICO") {
        return "no es estudiante"
    } else{
        return fv
    }
} );
console.log(arraynew); 


/* 
    x error el profesor Kevin creo una lista de numeros primos pero algunos numeros
    se infiltraron a la lista cambiar los numeros q no son primos x el numero 1 para q todos
    los numeros sean primos
*/ let numeroPrimos = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 13, 15, 17, 19];
let arraynew=numeroPrimos.map((primo)=>{
    if (primo %2===0) {
        return 1
    } else{
        return primo
    }
})
console.log(arraynew);
/* numero  */

/* let marcas = [
  "toyota",
  "samsung",
  "lg",
  "sony",
  "paramount",
  "adidas",
  "nike",
  "funval",
]; */
/* 
    crear una lista nueva con las marcas q tengan mas de 4 letras 
*/

/* let newarray=marcas.filter((marca)=>marca.length < 4)

console.log(newarray);
 */

/* 4. Usar map para generar un nuevo array que incluya el nombre, la categoría y el precio con
descuento del 15%.
 */
// Array original (puedes ampliarlo después)
let helados = [
  { nombre: "ChocoManía", categoria: "Chocolate", precio: 12 },
  { nombre: "FresaLover", categoria: "Fruta", precio: 10 },
  { nombre: "MentaCool", categoria: "Menta", precio: 8 }
];

// Función que usa map para aplicar el descuento del 15%
function aplicarDescuento(listaHelados) {
  // Genera un nuevo array con nombre, categoría y precio con descuento
  let nuevoArray = listaHelados.map(helado => {
    let precioDescuento = helado.precio * 0.85; // 15% menos
    return {
      nombre: helado.nombre,
      categoria: helado.categoria,
      precioConDescuento: precioDescuento.toFixed(2)
    };
  });
  
  return nuevoArray;
}

// Llamamos a la función y mostramos el resultado
let heladosConDescuento = aplicarDescuento(helados);
console.log(heladosConDescuento)