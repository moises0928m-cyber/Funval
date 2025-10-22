/*  PRACTICA CALIFICADA 8 
 Objetivo:
Aplicar desestructuración, operador spread/rest y manipulación del DOM

Instrucciones generales:

Cada ejercicio debe implementarse en JavaScript dentro de un archivo HTML.

Usar funciones para organizar el código.

No mutar los arrays u objetos originales; usar spread/rest para crear copias cuando sea necesario.

Manipular el DOM para mostrar los resultados (tarjetas, tablas o listas según corresponda). */

/* Ejercicio 1 — Tarjetas de Usuarios
Crea una función que reciba un objeto usuario con propiedades:
{ nombre, edad, pais, ...resto }.

Desestructura las propiedades principales y usa el operador rest para capturar el resto.

Genera dinámicamente una tarjeta en el DOM mostrando todos los datos.

Cada vez que se invoque la función con un nuevo usuario, debe agregarse una nueva tarjeta al contenedor. */

 /* let user =[ {
    nombre:"Yo",
    edad:1200,
    pais:"Atlantida",
    puesto:"vende chuño"
},
 {
    nombre:"mi",
    edad:100,
    pais:"Atlantidas",
    puesto:"vende chuños"
}]
let {nombre,edad,pais,...resto}=user
let rest={...resto}

let tarjeta=document.querySelector("#formulario")

user.forEach((e)=>{
    tarjeta.innerHTML+= `

<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">nombre:${e.nombre} </h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Pais:${e.pais} </p>
    <p class="text-white font-bonld"> edad:${e.edad} </p>
        <p class="text-white font-bonld">puesto:${e.puesto} </p>
        
</div>` 

})
  */

/* Ejercicio 2 — Tabla de Productos
Crea una función renderProducto que reciba un objeto producto con propiedades:
{ nombre, precio, stock, ...rest }.

Inserta en el DOM una fila en una tabla mostrando nombre, precio, stock y las propiedades adicionales.

Agrega varios productos para mostrar la funcionalidad. */

/* let productos = [
    { nombre: "Laptop", precio: 1200, stock: 5, color: "Negro", marca: "Dell" },
    { nombre: "Teclado", precio: 50, stock: 20,  color: "Blanco", marca:"Quipus"  },
    { nombre: "Mouse", precio: 25, stock: 30, color: "Azul", marca: "Logitech" }
];

productos.forEach((producto)=> {
    let {nombre,precio,stock,...resto}=producto
      
  
    console.log("Extras:", resto); 
    

    
} )




let cards=document.querySelector("#form")
productos.forEach((pro)=>{
cards.innerHTML+=`  <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    ${pro.nombre} 
                </th>
                <td class="px-6 py-4">
                    ${pro.precio}
                </td>
                <td class="px-6 py-4 ">
                    ${pro.stock}
                </td>
                <td class="px-6 py-4">
                    ${pro.color}
                </td>
                 <td class="px-6 py-4">
                    ${pro.marca}
                </td>
            </tr>
       
        </tbody>`
})
 */
/* Ejercicio 3 — Lista de Tareas
Crea una función agregarTarea que reciba un objeto { titulo, descripcion, ...extra }.

La función debe crear un <li> con la información principal y un botón “Ver más”.

Al hacer clic en “Ver más”, mostrar en consola las propiedades adicionales (...extra).

Mantén un array de tareas usando spread para no mutar el original. */

/* let objectos=[
    {
titulo:"Lukario",
descripcion:"Pokemon en forma de perro",
tipo:"Lucha",
altura:1.2
    }
]
let[{titulo,descripcion,...extra}]=objectos
let tyd={titulo,descripcion}
console.log(tyd);




let poke=document.querySelector("#pokemon")

objectos.forEach((mon)=> {
poke.innerHTML+=`<ul>
    <li> Nombre:${mon.titulo} </li>
    <li> Info:${mon.descripcion} </li>
    
</ul>`

} )

let boton=document.querySelector("#btn")
boton.addEventListener("click", ()=> {
console.log(extra);

} ) */

/* Ejercicio 4 — Tabla de Estudiantes
Crea una función mostrarEstudiantes(...estudiantes) que reciba varios objetos estudiantes.

Cada estudiante tiene { nombre, edad, notas }.

Desestructura para calcular el promedio de notas y genera dinámicamente una tabla en el DOM.

Usa spread para agregar estudiantes sin mutar el array original.

Bonus: agrega un botón que actualice la edad o las notas de un estudiante y vuelva a renderizar la tabla. */

/* let estudiante=[
    {
nombre:"Tuto" ,
edad:507,
notas:[12,100,100] 

},
   {
nombre:"Evo " ,
edad:507,
notas:[12,100,100] 

},
   {
nombre:"Camacho" ,
edad:507,
notas:[12,100,100] 

},
   {
nombre:"Añez" ,
edad:507,
notas:[12,100,100] 

}
]

let estudiantePro=[{
    nombre:"Moises",
    edad:21,
    notas:[100,100,100]
}]

let estux2=[...estudiante,...estudiantePro]
console.log(estux2);



let tabla = document.querySelector("#cuerpo-tabla");
let botoncito = document.querySelector("#btn");

estux2.forEach(({ nombre, edad, notas = [0] }) => {
    tabla.innerHTML += ` <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              ${nombre}
            </th>
            <td class="px-6 py-4">${edad}</td>
            <td class="px-6 py-4">${promedio(notas)}</td>
          </tr>`;
  });


function promedio(notasArray) {
  let resultado = 0;
  for (let index = 0; index < notasArray.length; index++) {
    resultado += notasArray[index];
  }
  resultado /= notasArray.length;
  return resultado.toFixed(2);
} */

/* Ejercicio 5 — Configuración de App
Crea una función configurarApp que reciba un objeto { titulo, version, ...resto }.

Desestructura las propiedades principales y usa rest para capturar las adicionales.

Muestra en el DOM el título y versión, y lista las propiedades adicionales.

Permite actualizar la configuración creando un nuevo objeto con spread y re-renderiza la información sin recargar la página */

/* let app={
    titulo:"Pedidos yema",
    vercion:"Super Saiyajin",
    habilidad:"Rasenga",
    idioma:"Español"

}
 
let{titulo,vercion,...resto}=app


let apli =document.querySelector("#apli")

apli.innerHTML+=`<div class="p-4">
<h1 class="text-2xl"> ${app.titulo} </h1>
<p>version:${app.vercion} </p>
<div><ul class="list-disc p-2">
  <li>idioma:${app.idioma} </li>
  <li>habilidad:${app.habilidad} </li>
</ul></div>

</div>`
    
 */




