const elementos = [
 { id: 1, nombre: 'A' },
 { id: 2, nombre: 'B' },
 { id: 1, nombre: 'A' }
 ];


 function eliminarDuplicados(elementos, id){
    let contador = 0;
    let listaFinal = [];

    return elementos.filter((elemento) => {
        if(listaFinal.includes(elemento[id])){
            return false;
        }
        else{
            listaFinal.push(elemento[id]);
            return true;
        }
    });
 }


 const resultado = eliminarDuplicados(elementos, 'id');
 console.log(resultado);