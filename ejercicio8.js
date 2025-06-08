const productos = [
 { nombre: 'Camisa', categoria: 'ropa', stock: 10 },
 { nombre: 'Pantalón', categoria: 'ropa', stock: 0 },
 { nombre: 'Televisor', categoria: 'electrónica', stock: 5 }
 ];

 function filtrarDisponibles(lista, categoria){

    return listaFiltrada = lista.filter(producto => 
        producto.categoria === categoria && producto.stock > 0);
 };

 const resultado = filtrarDisponibles(productos, 'ropa');

 console.log(resultado);