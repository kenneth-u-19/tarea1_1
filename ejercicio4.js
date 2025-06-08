const persona = { nombre: 'Luis', edad: 30 };

function modificarPersona(objeto, valor){
    let nuevapersona = {...objeto};

    nuevapersona.nombre = valor;
    nuevapersona.edad = nuevapersona.edad + 1;

    return nuevapersona;
}

console.log(modificarPersona(persona,'Carlos'));