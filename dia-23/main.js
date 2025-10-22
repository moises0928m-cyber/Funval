/* console.log("baño");
console.log("Secarme");
console.log("Ropa interior");
console.log("pantalon");
console.log("camisa");
console.log("medias");
console.log("zapato");
console.log("cinturon");
/*  ------------------------------------------- */
/* console.log("descargar un juego");
console.log("Revisar mensajes");
console.log("Revisar redes");
console.log("cargar telefono");

setTimeout(() => {
    console.log("Telefono cargado");
},10000) 
setTimeout(() => {
    console.log("Se descargo el juego");
},5000) 
  */

/* let eterno =(prompt("Te portaste bien Si o No")).toLocaleLowerCase();

let promesaeterno = new Promise((si , no ) => {
setTimeout(()=>{
    
 if (eterno === "si") {
    si("Tienes una famila eterna en el reino celestial")
 } else if(eterno === "no") {
    no("Te portaste mal vas al infierno");
 }
 else {
    prompt("Si o No")
    
 }
},4000 ) 

} )

/* ---------------------- */
/* promesaeterno.then((repuesta) =>{
    console.log(repuesta);
    
} ).catch((error)=>{
    console.log(error);
    
} ) */  

let cards = document.querySelector("#cards")
    // 1. Promesa que retorna un array de productos
const getProductos = new Promise((resolve, reject) => {
  setTimeout(() => {
    const productos = [
      { id: 1, nombre: "Laptop", precio: 1200 },
      { id: 2, nombre: "Mouse", precio: 25 },
      { id: 3, nombre: "Teclado", precio: 45 },
    ];
    resolve(productos);
  }, 1000);
});

// 2. Promesa que retorna un array de notas de estudiantes
const getNotas = new Promise((resolve, reject) => {
  setTimeout(() => {
    const notas = [
      { estudiante: "Ana", notas: [18, 15, 19] },
      { estudiante: "Luis", notas: [12, 14, 16] },
      { estudiante: "María", notas: [20, 19, 18] },
    ];
    resolve(notas);
  }, 1500);
});

// 3. Promesa que puede fallar aleatoriamente
const getUsuarios = new Promise((resolve, reject) => {
  setTimeout(() => {
    const exito = Math.random() > 0.3; // 70% de éxito
    if (exito) {
      resolve([
        { id: 1, nombre: "Kevin" },
        { id: 2, nombre: "Carla" },
        { id: 3, nombre: "Diego" },
      ]);
    } else {
      reject("Error al obtener usuarios 😢");
    }
  }, 1200);
});

// 4. Promesa que retorna un array de cursos
const getCursos = new Promise((resolve) => {
  setTimeout(() => {
    const cursos = [
      { codigo: "INF101", nombre: "Programación I" },
      { codigo: "INF202", nombre: "Estructuras de Datos" },
      { codigo: "INF303", nombre: "Base de Datos" },
    ];
    resolve(cursos);
  }, 800);
});

// 5. Promesa que retorna un array de tareas
const getTareas = new Promise((resolve) => {
  setTimeout(() => {
    const tareas = [
      { id: 1, titulo: "Estudiar Promesas", completada: false },
      { id: 2, titulo: "Hacer ejercicio", completada: true },
      { id: 3, titulo: "Leer un libro", completada: false },
    ];
    resolve(tareas);
  }, 2000);
});

getCursos.then((respuesta)=> {
    respuesta.forEach(({nombre,codigo}) => {
        cards.innerHTML+= ` 
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Estudiante funval</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">Codigo:${codigo}-nombre del curso: ${nombre} </p>
</a>

        `
    } )
} )
