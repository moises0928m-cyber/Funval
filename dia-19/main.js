/* el profesor kevin necesita ver la lista de estudiantes en una tabla 
    q tendra las siguientes columnas
    nombre edad y pais crear una tabla de forma dinamica q cargue los datos 
    de los objetos de la lista estudiantes Funval */
 /*    let estudiantesFunval = [
  {
    nombre: "Alfredo",
    pais: "Mexico",
    edad: 28,
  },
  {
    nombre: "Belen",
    pais: "Bolivia",
    edad: 28,
  },
  {
    nombre: "Boren",
    pais: "colombia",
    edad: 28,
  },
  {
    nombre: "David",
    pais: "Chile",
    edad: 28,
  },
  {
    nombre: "Ibraim",
    pais: "Mexico",
    edad: 28,
  },
  {
    nombre: "Moises",
    pais: "Bolivia",
    edad: 28,
  },
];
let contenedor= document.querySelector("#funval")
contenedor.innerHTML=`
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Nombre 
                </th>
                <th scope="col" class="px-6 py-3">
                    Edad
                </th>
                <th scope="col" class="px-6 py-3">
                    Pais
                </th>
                <th scope="col" class="px-6 py-3">
                    acciones 
                </th>
            </tr>
        </thead>
        </div>`
estudiantesFunval.forEach((estudiantes)=> {
    contenedor.innerHTML +=` 

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
       
        <tbody>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 ${estudiantes.nombre}
                </th>
                <td class="px-6 py-4">
                    ${estudiantes.edad}
                </td>
                <td class="px-6 py-4">
                   ${estudiantes.pais}
                </td>
                 <td class="px-6 py-4">
                   
                </td>
            </tr>
        </tbody>
    </table>
</div>
`
});
 */



/* 1. Selecciona un elemento por ID y cambia su color de fondo a rojo. */

/* 2. Selecciona un elemento por clase y cambia su texto por "Modificado". */

/* let titulo=document.querySelector("#funval").textContent="Modificado"; */


/* 3. Selecciona un párrafo y cambia el tamaño de su fuente. */

/* 4. Selecciona una imagen por su ID y cambia su atributo "src". */

/* let img=document.querySelector("#img") */


/* 5. Selecciona todos los elementos con una misma clase y cambia su color de texto. */


/* 6. Cambia el contenido de un div usando innerHTML. */

/* let div=document.querySelector("#div")

div.innerHTML=`<div class="bg-slate-200">Cambio</div>` */


/* 7. Cambia el contenido de un párrafo usando textContent. */

/* let pa = document.querySelector(".parrafo").textContent="hollllllaalmdwnfiwbnfjewbrfujwbngf"
 */
/* 8. Añade una nueva clase CSS a un elemento usando classList.add(). */

/* let div = document.querySelector("#div").classList.add("bg-yellow-200","text-black") */

/* 9. Elimina una clase existente usando classList.remove(). */

/* let eliminar=document.querySelector("#eli") .classList.remove("bg-amber-400") */
 
/* 10. Alterna una clase (toggle) en un elemento. */
/*  let añadir=document.querySelector("#eli") .classList.toggle("bg-slate-300") */  

/* ============================
 🟡 BLOQUE 2: NAVEGACIÓN ENTRE NODOS (Nivel Intermedio)
 Duración sugerida: 30 minutos
============================ */

/* 11. Selecciona un elemento y accede a su elemento padre con parentNode. */

/* let padre = document.querySelector("#div").parentNode

console.log(padre);
 */
/* 12. Selecciona un elemento y accede a su primer hijo usando firstElementChild. */
  
/* let hijo = document.querySelector("#div").firstElementChild
hijo.classList.add("bg-slate-300","text-red-500")  
 */
/* 13. Selecciona un contenedor y accede a su último hijo con lastElementChild. */

/* hijo = document.querySelector("#div").lastElementChild
hijo.classList.add("bg-yellow-500", "font-bold")
 */
/* 14. Selecciona un elemento de una lista y navega a su siguiente hermano con nextElementSibling. */

/* let hijo=document.querySelector("#div").nextElementSibling
hijo.classList.add("bg-red-200") */

/* 15. Selecciona un elemento de una lista y navega a su hermano anterior con previousElementSibling. */

/* let hermano=document.querySelector("#div").previousElementSibling
hermano.classList.remove("font-bold") */

/* 16. Muestra en consola el número de hijos que tiene un contenedor usando children.length. */
 
/* let hijos=document.querySelector("#div")

console.log(hijos.children);


console.log(hijos);  */


/* 17. Accede a todos los hijos de un contenedor usando children y cambia el color de cada uno. */
 
/* let hijos=document.querySelector("#div")

hijos.children.item(0).style.backgroundColor = "red"
hijos.children.item(1).style.backgroundColor = "slate"
hijos.children.item(2).style.backgroundColor = "yellow" */



/* 18. Usa firstChild para mostrar en consola el primer nodo hijo (puede ser texto o elemento). */

/* 19. Accede al nodo padre de un párrafo y cambia su color de fondo. */

/* 20. Selecciona un elemento y recorre sus hijos con un bucle for para cambiarles el estilo. */

/* ============================
 🔴 BLOQUE 3: COMBINADOS (Selectores + Modificadores + Navegación)
 Duración sugerida: 30 minutos
============================ */

/* 21. Selecciona un contenedor, accede a su primer hijo y cambia su texto. */

/* 22. Selecciona una lista (ul), accede al segundo li y cámbiale el color de fondo. */

/* 23. Selecciona el tercer hijo de un contenedor y elimina una clase de él. */

/* 24. Selecciona un contenedor y cambia el texto de todos sus hijos. */

/* 25. Selecciona un div, accede a su padre y cambia su borde. */

/* 26. Selecciona el primer elemento de una lista y cambia el texto de su siguiente hermano. */

/* 27. Selecciona un elemento, navega a su padre y luego a su primer hijo para cambiarle el estilo. */

/* 28. Selecciona un contenedor con varios elementos y alterna una clase en cada uno de sus hijos. */

/* 29. Usa innerHTML para insertar una etiqueta <strong> dentro de un párrafo hijo. */

/* 30. Recorre todos los hijos de un contenedor y cambia el contenido de cada uno con un texto numerado. */
