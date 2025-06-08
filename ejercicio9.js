const cargarDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Datos cargados correctamente.");
        },2000)
    })
}


console.log("Inicio de la promesa");

cargarDatos().then((respuesta)=>{
    console.log(respuesta);
}).catch((error)=>{
    console.log("La promesa ha fallado: " + error);
})