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
 async function promise () {
    try {
        let respuesta= await getUsuarios
        console.log(respuesta);
        
    } catch (error) {
        console.log(error);
        
    }
 }
promise();
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
 
 async function tareas() {
    try {
        let respuesta=await getTareas
        console.log(respuesta);
        
    } catch (error) {
        console.log(error);
        
    }
 } tareas(); 

