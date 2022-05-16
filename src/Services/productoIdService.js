export async function getProductoById(id){
    let jsonProducto = await fetch('https://fakestoreapi.com/products/'+id).then(res=>res.json())
    return jsonProducto
}