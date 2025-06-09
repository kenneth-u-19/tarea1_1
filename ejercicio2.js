function obtenerUsuario(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const objeto = {
                1: 'Juan',
                2: 'Maria'
            };

            if(objeto[id]){
                resolve({id: id, nombre: objeto[id]});
            }
            else{
                reject('Nombre no encontrado');
            }
        },2000)
    })
}

obtenerUsuario(1).then(nombre1 =>{
    return obtenerUsuario(2).then(nombre2 =>{
        console.log(`Usuarios cargados: ${nombre1.nombre} y ${nombre2.nombre}`);
    });
}).catch(error => {
    console.log("error", error);
});