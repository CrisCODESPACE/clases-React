import ProductRow from "./ProductRow"
import ProductCategoryRow from "./ProductCategoryRow"

const ProductTable = ({products, filterText}) => {
    const rows = []
    let lastCategory = null;

    products.forEach((producto, index) => {
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