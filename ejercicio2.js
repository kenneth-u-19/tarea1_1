function obtenerUsuario(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('hola mundo');
        },2000)
    })
}

console.log(obtenerUsuario(1));