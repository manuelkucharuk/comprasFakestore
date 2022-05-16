export async function getAllProductos(categoria){
    let jsonProductos = await fetch('https://fakestoreapi.com/products/category/'+categoria).then(res=>res.json())
    return jsonProductos
}