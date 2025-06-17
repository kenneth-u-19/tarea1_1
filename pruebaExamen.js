// function contarPares(arreglo){
//     contador = 0

//     for(let i=arreglo.length-1; i>=0 ; i-- ){

//         if(arreglo[i]%2 === 0){
//             contador++
//         }
//     }

//     return contador
// }

// arr = [2,3,4,5,6,7,8,10]
// console.log(contarPares(arr))

texto = 'hola que hace'

function contarVocales(cadena){

    contador = 0

    texto1 = cadena.toLowerCase()

    for(let i=texto1.length-1; i>=0 ; i-- ){
        if(texto1[i] === 'a' || texto1[i] === 'e' || texto1[i] === 'i'
            || texto1[i] === 'o' || texto1[i] === 'u'
        ){
            contador++
        }
    }

    return contador
}

console.log(contarVocales(texto))