let padre=document.querySelector("#padre")
let nieto=document.querySelector("#nieto")
let opaco=document.querySelector("#opaco")
padre.addEventListener( "click", (e) =>{
if (e.target.id === "padre") {
    console.log("Padre");
}
 if (e.target.id === "nieto") {
   opaco.classList.add("line-through", "opacity-40")
 
} 
}
   )