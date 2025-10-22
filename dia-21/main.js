/* let yo ={
    nombre :"moises",
    edad : 21,
    altura : 1.70
}
let x2 ={...yo}
console.log(x2); */
/* -------------------------------------------- */
/* let añadir = {...yo, sud:"si", cabello:"oscuro"}
console.log(añadir); */
/* --------------------------------------- */
/* let otro={
    nombre:"pepe",
    edad:19,
    altura:1.70,
    cabello:"verde"
}
let otros={
    nombre:"Jose",
    edad:19,
    altura:1.70, 
}
let fusion ={...otro,...otros}
console.log(fusion);
 */

let estudiantesFunval = [
  {
    nombre: "ALFREDO",
    edad: 35,
    pais: "Mexico",
    notas: [35, 67, 89],
  },
  {
    nombre: "David",
    edad: 25,
    pais: "Chile",
    notas: [12, 98, 64],
  },
  {
    nombre: "Emanuel",
    edad: 28,
    pais: "Peru",
    notas: [67, 39, 100],
  },
  {
    nombre: "Gerardo",
    edad: 22,
    pais: "El Salvador",
    notas: [89, 77, 66],
  },
];
let tabla = document.querySelector("#cuerpo-tabla");
let botoncito = document.querySelector("#btn");
let cerrar = document.querySelector("#close");
let modal = document.querySelector(".modal");
let formulario = document.querySelector("#formulario-estudiante");

botoncito.addEventListener("click", (e) => {
  /* let estudianteNuevo = {
    nombre: "kevin",
    edad: 28,
    pais: "Bolivia",
    notas: [10, 20, 30],
  };
  estudiantesFunval = [...estudiantesFunval, estudianteNuevo];
  mostrarEstudiantes(); */
  modal.classList.remove("hidden");
});
mostrarEstudiantes();
cerrar.addEventListener("click", (e) => {
  modal.classList.add("hidden");
});
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  console.log("hola funval");
  let nombre = formulario.nombre.value;
  let edad = formulario.edad.value;
  let pais = formulario.pais.value;
  let objNuevo = { nombre, pais, edad };
  estudiantesFunval = [...estudiantesFunval, objNuevo];
  modal.classList.add("hidden");
  formulario.reset();
  mostrarEstudiantes();
});
function mostrarEstudiantes() {

  estudiantesFunval.forEach(({ nombre, edad, pais, notas = [0] }) => {
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
            <td class="px-6 py-4">${pais}</td>
            <td class="px-6 py-4">${promedio(notas)}</td>
          </tr>`;
  });
}

function promedio(notasArray) {
  let resultado = 0;
  for (let index = 0; index < notasArray.length; index++) {
    resultado += notasArray[index];
  }
  resultado /= notasArray.length;
  return resultado.toFixed(2);
}