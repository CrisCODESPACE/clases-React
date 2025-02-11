import { useParams } from "react-router-dom";

const productos = [
  {
    id: 1,
    nombre: "Laptop",
    precio: 1200,
    descripcion:
      "orem ipsum dolor sit amet consectetur adipiscing elit, fringilla quisque fames curabitur class orci ut parturient, netus faucibus ligula hac dictumst dapibus. Augue risus senectus porta massa velit turpis tincidunt ad sociosqu nam cursus metus",
  },
  {
    id: 2,
    nombre: "Teléfono",
    precio: 1000,
    descripcion:
      "orem ipsum dolor sit amet consectetur adipiscing elit, fringilla quisque fames curabitur class orci ut parturient, netus faucibus ligula hac dictumst dapibus. Augue risus senectus porta massa velit turpis tincidunt ad sociosqu nam cursus metus",
  },
  {
    id: 3,
    nombre: "Tablet",
    precio: 450,
    descripcion:
      "orem ipsum dolor sit amet consectetur adipiscing elit, fringilla quisque fames curabitur class orci ut parturient, netus faucibus ligula hac dictumst dapibus. Augue risus senectus porta massa velit turpis tincidunt ad sociosqu nam cursus metus",
  },
];

const ProductosComponent = () => {
  const { id } = useParams();

  const producto = productos.find((p) => p.id === parseInt(id));

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div>
      <h1>{producto.nombre}</h1>
      <p>Precio:{producto.precio}</p>
    </div>
  );
};

export default ProductosComponent;
