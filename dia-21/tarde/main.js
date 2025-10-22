  // 1. Dado un objeto usuario con {usuario, edad, direccion: {ciudad, pais}},
// desestructura todos los valores y muestra un mensaje con ellos.
/* let usuario = {
  usuario: "juan",
  edad: 18,
  direccion: {
    ciudad: "Santiago",
    pais: "Chile",
  },
};

let {
  usuario,
  edad,
  direccion: { ciudad, pais },
} = usuario;

let mensaje = `hola ${usuario} de edad ${edad} de la ciudad de ${ciudad} del pais ${pais}`;
alert(mensaje); */

// 2. Dado un array de estudiantes con objetos {usuario, edad, notas: [..]},
// desestructura para obtener usuario y calcular promedio de notas.


/* let estudiantes = [
  { usuario: "Ana", edad: 20, notas: [80, 90, 100] },
  { usuario: "Luis", edad: 22, notas: [70, 85, 90] },
  { usuario: "Moises", edad: 21, notas: [100, 95, 98] },
];


function promedio(notasArray) {
  let resultado = 0;
  for (let index = 0; index < notasArray.length; index++) {
    resultado += notasArray[index];
  }
  resultado /= notasArray.length;
  return resultado.toFixed(2);
} 
for (let {usuario,notas} of estudiantes ) {
    console.log(`${usuario} tu promedio es de ${promedio(notas)}`);
    
}
 */

// 3. Desestructura el primer y último elemento de un array sin usar índices directos.

// 4. Dado un objeto producto con muchas propiedades, usa desestructuración con rest
// para extraer "usuario" y "precio" y guardar el resto en otra variable.

 let producto = {
  usuario: "Laptop Gamer",
  precio: 1500,
  marca: "ASUS",
  stock: 25,
  categoria: "Tecnología",

};

let {usuario,precio, ...resto}=producto
let nyp ={usuario,precio}
console.log(nyp);
console.log(resto);
 







// 5. Usa desestructuración en parámetros de una función para recibir
// un objeto con {usuario, rol, activo} y mostrar solo usuario y rol.

// 6. Dado un array anidado [[1,2],[3,4],[5,6]], desestructura para obtener el número 6 directamente.
/* let array=[[1,2],[3,4],[5,6]]

let[,,[,ultimo]]=array
console.log(ultimo); */




// 7. Desestructura un array de 10 elementos para obtener solo los primeros 3
// y el resto guardarlo en otra variable con rest.

// 8. Dado un objeto con propiedades anidadas (empresa → departamento → empleado),
// desestructura en una sola línea para obtener el usuario del empleado.
/*  let nmr= {
  
    empresa: "TechCorp",
    departamento: "Desarrollo",
    empleado: {
      usuario: "Ana",
      edad: 28,
      puesto: "Frontend Developer"
    
  }
}

let {
    empleado:{usuario}
} = nmr;

let mensaje=`Su usuario es ${usuario}`
console.log(mensaje);  */


// 9. Usa desestructuración para intercambiar el valor de dos variables sin usar una variable temporal.

// 10. Desestructura una función que retorna un array [estado, setEstado],
// similar a como hace React con useState().



//  BLOQUE 2: Operador Spread aplicado
// Objetivo: crear, combinar y actualizar datos sin mutar.

// 11. Combina dos arrays de objetos (estudiantes y nuevosEstudiantes)
// en uno solo usando spread y muestra la lista combinada.

// 12. A partir de un array de productos, agrega un nuevo producto usando spread
// sin usar push.
/* let productos=[
    "Desodorante",
    "Champu",
    "Perfume"
]
let fusion =[...productos,"Jabon"]
console.log(fusion);
 */



// 13. A partir de un objeto usuario, crea uno nuevo con un rol adicional "admin"
// sin modificar el original.


// 14. Dado un array de usuarios, reemplaza el usuario con id = 3
// con uno nuevo usando map + spread.

/* let usuarios=[
  { id: 1, usuario: "Ana" , tiempo:"3 meses"},
  { id: 2, usuario: "Moises", tiempo:"10 meses" },
  { id: 3, usuario: "Luis", tiempo:"1 año" },
  { id: 4, usuario: "Carla", tiempo:"500 años" },
  { id: 5, usuario: "Pepe", tiempo:"10000 año" }
]
let remplazar ={id:3, usuario:"Pepito"}
console.log( remplazar);

let nuevo=usuarios.map((user)=>{
if (user.id === 3) {
  return  {...user,...remplazar}
} 
return user
})
console.log(nuevo); */

 


// 15. Combina las propiedades de dos objetos que tienen claves repetidas
// y observa qué propiedad prevalece.

// 16. Crea una copia profunda de un array de objetos usando spread
// y modifica uno de ellos sin afectar el original.

// 17. A partir de un array de notas, usa spread para agregar múltiples notas de una sola vez.

// 18. Clona un objeto anidado y modifica solo una propiedad interna sin alterar el original.

// 19. Crea un nuevo objeto "pedido" combinando los datos de un cliente y un producto.

// 20. Usa spread para clonar un array grande y ordénalo sin modificar el original.

//  BLOQUE 3: Casos prácticos combinando Desestructuración + Spread
// Objetivo: simular casos reales tipo mini app / lógica avanzada.

// 21. Dado un array de estudiantes con notas, crea una función que
// devuelva un nuevo array con todos los estudiantes que tengan promedio > 80,
// usando desestructuración y spread para crear nuevos objetos.

// 22. Crea una función "actualizarStock" que reciba un array de productos y un id,
// y retorne un nuevo array con el producto incrementado en +1 stock sin mutar.

// 23. Crea una función "agregarTarea" que reciba una lista de tareas y una nueva tarea
// y retorne una nueva lista (no mutar el original).

// 24. Crea una función que reciba un objeto usuario y retorne otro
// con la propiedad "estado: activo" agregada usando spread.

// 25. Desestructura un array de objetos libros y devuelve un nuevo array
// solo con el título y autor usando map + desestructuración.

// 26. Crea una función que desestructure los parámetros {usuario, precio}
// de un producto y devuelva un nuevo objeto con un impuesto agregado (IVA).

// 27. Combina dos arrays de objetos usuarios y usa desestructuración para
// crear un nuevo array solo con {usuario, email} de cada uno.

// 28. Desestructura un objeto anidado de configuración de app para extraer
// opciones específicas y combina con otras opciones usando spread.

// 29. Simula una “actualización masiva”: dado un array de estudiantes,
// retorna un nuevo array con +1 año en edad para todos (sin mutar el original).

// 30. Crea una función que reciba un array de órdenes de compra y devuelva
// un nuevo array con el total calculado por cada orden usando desestructuración y spread.
