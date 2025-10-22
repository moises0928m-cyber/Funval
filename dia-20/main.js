/* let boton=document.querySelector("#btn")
let imagen=document.querySelector("#img")

boton.addEventListener("click", ()=>{
    boton.textContent="Noche"
   imagen.classList.add("w-100","h-100");
     imagen.src="Fiona.webp";
}) */


     
     /*    una casa de cambio neceista realizar un formulario q pueda mostrar
        a sus clientes q estan de viaje cuanto seria la conversion de la moneda
        la casa de cambio trabaja en 3 paises Peru Chile y en Argentina
        si un cliente de chile se va para ARGENTINA MOSTRAR la cantidad de dinero q tendria alla
        nombre
        pais de origen    dropdown
        pais destino       dropdown
     la cantidad de dinero q tiene   */



/*      let form = document.querySelector("#formulario");

form.addEventListener("submit", (e) => {
  //console.log("hola mundo");
  e.preventDefault();
  /* console.log("hola mundo");
  console.log(e);
  let nombreEstudiante = form.nombre.value;
  let edad = form.edad.value;
  let pais = form.pais.value;
  console.log(nombreEstudiante, edad, pais);
  let mensaje = `bienvenido ${nombreEstudiante} del pais de: ${pais} de edad:${edad}`;
  console.log(mensaje); */
/*   let datos = new FormData(form);
  let nombreEstudiante = datos.get("nombre");
  let edad = datos.get("edad");
  let pais = datos.get("pais");
  let mensaje = `bienvenido ${nombreEstudiante} del pais de: ${pais} de edad:${edad}`;
  console.log(mensaje);
}); */

function conver(origen ,destino ,cantidad){
    let canti=parseFloat(cantidad);
    let rsl ;
    switch (origen) {
        case "Argentina":
            if (destino==="Argentina") rsl=canti
            else if (destino==="Peru") rsl=0.0025*canti;
            else if (destino==="Chile")  rsl=0.68*canti;
             else rsl="coversion no validad"  
            break;
    case "Chile":
        if(destino==="Chile") rsl=canti
        else if (destino==="Peru") rsl=0.0035*canti;
        else if (destino==="Argentina") rsl=canti*1.47;
        else rsl="Conversion no validad"
          break;
    case "Peru":
        if(destino==="Peru") rsl=canti
        else if (destino==="Chile") rsl=canti*282.34
        else if (destino==="Argentina") rsl=canti*1.47;
        else rsl="Conversion no validad"
        break;
            default:
    }
    return rsl
}




let parrafo = document.querySelector("#parrafo");
let form =document.querySelector("#formulario");
form.addEventListener("submit", (e) => {
    e.preventDefault();

   let datos=new FormData(form)
   let nombre=datos.get("nombre")
   let pais1=datos.get("pais1")
   let pais2=datos.get("pais2")
   let canti =datos.get("dinero")
   rsl = conver(pais1, pais2, canti);

parrafo.textContent = `${nombre}, tu dinero de ${pais1} ${canti} en ${pais2} es de ${rsl.toFixed(2)}`;
   
});
