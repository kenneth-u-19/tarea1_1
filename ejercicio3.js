const notas = [
 { valor: 90, peso: 0.5 },
 { valor: 80, peso: 0.3 },
 { valor: 70, peso: 0.2 }
 ];

 function promedioPonderado(arreglo){
    let promedio = 0.0;

    for(elemento of arreglo){
        promedio = promedio + (elemento.valor * elemento.peso);
    }

    return promedio;
 }

 console.log(promedioPonderado(notas));