 const lista1 = ['manzana', 'pera', 'banana'];
 const lista2 = ['pera', 'uva', 'manzana', 'sandía'];

 function combinarListasSinRepetir(lista1, lista2){
    let listaTemp = [];
    let listaFinal = [];
    let contador = 0;

    listaTemp = lista1.concat(lista2);

    for(valor1 of listaTemp){
        contador = 0;
        for(valor2 of listaFinal){
            if(valor2 === valor1){
                contador++;
            }
        }

        if(contador === 0){
            listaFinal.push(valor1);
        }
    }

    return listaFinal;
 }



 const resultado = combinarListasSinRepetir(lista1, lista2);
console.log(resultado);