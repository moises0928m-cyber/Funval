/* let corbataObj ={
    color:"Negra",
    origen:"Mexico",
    Precio:100,
    diseño :"Flores",
    hechaamano:true

}

/* /* Modificando */
/* corbataObj.diseño="Colibris" */

/* Creando */
/*  corbataObj.usado=true  */
 
/* eliminado */
 /* delete corbataObj.hechaamano;
  console.log(corbataObj);  */

  /* 
    quiero q puedan extraer el promedio de nuestro estudiante y puedan determinar
    si esta aprobado o reprobado
    en caso de estar aprobado mostrar un mensaje q diga
    "el estudiante nombre de la empresa funval tiene un promedio de promedio por lo tanto esta aprobado"
    "el estudiante nombre de la pais Bolivia tiene un promedio de promedio por lo tanto esta reprobado"
*/


  let estudianteObj = {
  nombre: "Kevin",
  edad: 28,
  matricula: 1701212,
  pais: "Bolivia",
  altura: 1.6,
  varon: true,
  empresa: {
    nombre: "Funval",
    añoFunvadion: 2005,
  },
  notas: [75, 45, 78, 80, 32, 25, 34],
};
let suma=0;
let notas=0;



for (let i = 0; i < estudianteObj.notas.length; i++) {
    
   suma+=estudianteObj.notas[i]
    
}
 
notas=suma/estudianteObj.notas.length
if (suma<=51 ) {
   console.log("el estudiante nombre de la empresa funval tiene un promedio de promedio por lo tanto esta aprobado",notas);
    
} else {
    console.log("el estudiante nombre de la pais Bolivia tiene un promedio de promedio por lo tanto esta reprobado",notas);
    
}
