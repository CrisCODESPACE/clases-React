import { useReducer } from "react";
import { reducer, initialState } from "../reducers/cartReducer";

const CartComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const products = [
    { id: 1, name: "producto 1", price: 100 },
    { id: 2, name: "producto 2", price: 200 },
    { id: 3, name: "producto 3", price: 300 },
    { id: 4, name: "producto 4", price: 400 },
  ];

  return (
    <div>
      <h2>Carrito de la compra</h2>

      <div>
        <h3>Productos disponibles</h3>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - {product.price}
              <button
                onClick={() =>
                  dispatch({ type: "addToCart", payload: product })
                }
              >
                Agregar al carrito
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Carrito</h3>
        {state.cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <ul>
            {state.cart.map((item) => (
              <li key={item.id}>
                {item.name} - {item.price} x{item.quantity}
                <button
                  onClick={() =>
                    dispatch({ type: "removeFromCart", payload: item.id })
                  }
                >
                  Eliminar
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: "increaseQuantity", payload: item.id })
                  }
                >
                  +
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: "decreaseQuantity", payload: item.id })
                  }
                >
                  -
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CartComponent;
