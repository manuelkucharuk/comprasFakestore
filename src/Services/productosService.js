export async function getAllProductos(){
    let jsonProductos = await fetch('https://fakestoreapi.com/products/').then(res=>res.json())
    return jsonProductos

}

export async function getAllCategorias(){
    let jsonProductos = await fetch('https://fakestoreapi.com/products/categories').then(res=>res.json())
    return jsonProductos
}

export async function getProductosByCategoria(categoria){
    let jsonProductos = await fetch('https://fakestoreapi.com/products/category/'+categoria).then(res=>res.json())
    return jsonProductos
}



export async function getProductoById(id){
    let jsonProducto = await fetch('https://fakestoreapi.com/products/'+id).then(res=>res.json())
    return jsonProducto
}