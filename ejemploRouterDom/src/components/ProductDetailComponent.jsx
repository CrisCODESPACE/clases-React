import { useParams } from "react-router-dom";

const ProductDetailsComponent = () => {
  const { id } = useParams(); // este id vendrá dado a través de la URL

  return (
    <div>
      <h1>Detalles del producto</h1>
      <p>El ID del producto es {id}</p>
    </div>
  );
};

export default ProductDetailsComponent;
