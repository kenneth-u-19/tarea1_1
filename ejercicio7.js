const palabras = ['hola', 'adiós', 'hola', 'gracias', 'hola', 
'gracias'];

function contarPalabras(lista){
    
    let objeto = {};
    let contador = 0;

    for(palabra1 of lista){
        contador = 0;

        for(palabra2 of lista){
            if(palabra2 === palabra1){
                contador++;
            }
        }

        if(contador >= 1){
            objeto[palabra1] = contador;
        }
        
    }

        
    

    return objeto;
    
}

const resultado = contarPalabras(palabras);

console.log(resultado);
