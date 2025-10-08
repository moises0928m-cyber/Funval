
/* Estas comentados para que no aparescas todos los prompt en la pagina */



/* Ejercicio N#1 */

/* let nota1 = parseInt(prompt("Cual es tu 1 nota"));
let nota2 = parseInt(prompt("Cual es tu 2 nota"))
let nota3 = parseInt(prompt("Cual es tu 3 nota"))
let nota4 = parseInt(prompt("Cual es tu 4 nota"))

let suma =(nota1 + nota2 + nota3 + nota4)/4;
if (suma >= 90 && suma < 100 ) {
    console.log("Excelente");
    
} else if(suma >=75 && suma <89 ){
    console.log("Bueno");
}else if(suma >=60 && suma <74 ){
    console.log("Regular");
} else  if (
  nota1 < 0 || nota1 > 100 ||
  nota2 < 0 || nota2 > 100 ||
  nota3 < 0 || nota3 > 100 ||
  nota4 < 0 || nota4 > 100
) {
console.log("Nota no valida");

}
else {
    console.log("insuficiente");
}  */






/* ejercicio N#2 */

/* let costo = 4
let km = parseInt(prompt("cuantos kilometros recorrera"))
  let edad = parseInt(prompt("Su edad")) 
 let std = prompt("Eres estudiante").toLowerCase();

 let precio=costo;

if (edad < 18 ) {
    
    precio -=2;
} 
if (edad >60 ){
   precio -1.6;
} 
if (std === "si" ){
 precio -=3;
}  
if (km>=30  ){
  precio += 0.4;  
}
 else {
    console.log("invalido")
}
console.log("tu pasaje es de ", precio); */







/* Ejercicio 3 – */
/* let  convertir = prompt( `Menu:
1.opcion C a F
2.Opcion F a C
3.Opcion km a M
4.Opacion M a Km `)

switch (convertir) {
    case "1":
        let cl =parseFloat(prompt("Ingresa la temparatura en celsius"))
        let fl= (cl * 9/5) + 32;
        console.log("La temperatura es ", fl,"°C");
        
        break;
    case "2":
        let lf =parseFloat(prompt("Ingresa la temparatura en Fahrenheit"))
        let lc= (lf - 32) * 5/9;
        console.log("La temparatura es ", lc,"°F" );
        break;
        
    case "3":
        let km =parseFloat(prompt("Ingresa la distancia en Kilometro"))
        let me =km * 1000 ;
        console.log("La distancia es ", me, "m");
        break; 
    case "4":
        let em =parseFloat(prompt("Ingresa la distancia en Metro"))
        let mk = em / 1000 ;
        console.log("La distancia es ", mk, "Km");
        break;       
    default:
        console.log("datos no validos")
}  */











/*  Ejercicio 4  */


/* 
let precio = parseInt(prompt("total de su compra"))
let tarjeta = prompt("Si tiene tarjeta de cliente frecuente (“sí” o “no”)").toLowerCase();

let total =precio;
let recargo=precio; 
if (precio >500 ) {
     total *= 0.9;
   console.log("Su total con descuento del 10% es",total, );
     
} else{
    console.log("Su total es ", precio)
}

 if (tarjeta === "si" ){
    recargo *= 0.05;
    console.log("Se le recarg en 5% a su tarjeta total ",recargo );
    
}else{
    console.log("Gracias por visitarnos")
}
   */









 /* Ejercicio 5 

let año = parseFloat(prompt("Que año nacio"))
let actual = parseFloat(prompt("año actual"))
let cumpleaños =prompt("Cumplistes años en este año “sí” o “no” ").toLowerCase();
 
let edad= actual - año;
let aj=edad;
if(cumpleaños === "no") {
    aj= edad - 1;
} 
 if (aj <18) {
    console.log("Menor de edad",aj) 
} else if( aj <=30 ) {
    console.log("Adulto joven", aj );
} else if (aj <=59) {
    console.log("Adulto")
} else if (aj >= 60) {
    console.log("Adulto mayor", aj);
    
}else { 
 console.log("Dato invalido");
}  */