
 

let tarea=document.querySelector("#tareas")
let Agregar=document.querySelector("#agregar")
let aceptar=document.querySelector("#aceptar")

aceptar.addEventListener("click", () => {
  tarea.innerHTML+=`<li data-id="" 
          class="flex justify-between items-center bg-gray-50 border border-gray-300 rounded-lg p-3 gap-4 ">
        <span >${Agregar.value}</span>
        <div class="flex gap-2">
          <button class="btn-completar ">✔</button>
          <button class="btn-editar ">✏️</button>
          <button class="btn-eliminar ">🗑️</button>
        </div>
      </li>`
  Agregar.value="";
} )

tarea.addEventListener("click", (e)=>{
  if (e.target.classList.contains("btn-eliminar")) {
    let eliminar = e.target.closest("li");
    eliminar.remove();
}
if (e.target.classList.contains("btn-completar")) {
  let completado = e.target.closest("li")
  completado.classList.add("opacity-50", "line-through")
}
if (e.target.classList.contains("btn-editar")) {
  let editar=e.target.closest("li").querySelector("span")
  let nuevo= prompt("Editar:",editar.textContent)
   if (nuevo !== null && nuevo.trim() !== "") {
      editar.textContent = nuevo;
    }
}
} )


