//--Dado un arreglo de objetos, agrúpelos por el valor de una propiedad específica.
//Agrupar elementos por propiedad


function agruparPorPropiedad(arreglo, propiedad){

    const resultadoAMostrar = arreglo.reduce((grupo, elemento)=>{
        const clave = elemento[propiedad];

        if(!grupo[clave]){
            grupo[clave] = [];
        }

        grupo[clave].push(elemento);

        return grupo;
    }, {});


    return resultadoAMostrar;
}

 const datos = [
 { categoria: 'fruta', nombre: 'manzana' },
 { categoria: 'verdura', nombre: 'zanahoria' },
 { categoria: 'fruta', nombre: 'banana' },
 { categoria: 'verdura', nombre: 'lechuga' }
 ]

const resultado = agruparPorPropiedad(datos, 'categoria');
console.log(resultado);
