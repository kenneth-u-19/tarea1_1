function verificarMayoresDeEdad(lista){
    
    const tamanoLista = lista.length;
    let contador = 0;
    
    for(const valor of lista){

        if(valor >= 18){
            contador++;
        }
    }

    if(contador === tamanoLista){
        return true;
    }
    else{
        return false;
    }
}


const edades = [19, 25, 32, 17];


const resultado = verificarMayoresDeEdad(edades);

console.log(resultado);