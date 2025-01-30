import ProductRow from "./ProductRow"
import ProductCategoryRow from "./ProductCategoryRow"

const ProductTable = ({products, filterText, inStockOnly}) => {
    const rows = []
    let lastCategory = null;

    products.forEach((producto, index) => {
        let productoEnObjeto = producto.name.toLowerCase();
        let productoEnBusqueda = filterText.toLowerCase();

        console.log("Producto actual en esta iteración:" , productoEnObjeto);
        console.log("Producto introducido por el usuario en el searchBar", productoEnBusqueda);
        
        
        if(productoEnObjeto.indexOf(productoEnBusqueda) === -1) {
            return;
        } // Si indexOf devuelve un -1, significa que el texto de búsqueda no se encuentra en el nombre del producto. En este caso, la condicion if(...) se evalúa como true y la función forEach salta a la siguiente iteración sin agregar el producto actual a la lista de rows.
        if(inStockOnly && !producto.stocked){
            return;
        }
        if(producto.category !== lastCategory){
            rows.push(
                <ProductCategoryRow category={producto.category} key={index}/>
            )
        }
        rows.push(<ProductRow product={producto} key={producto.name}/>)
        lastCategory = producto.category;
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default ProductTable