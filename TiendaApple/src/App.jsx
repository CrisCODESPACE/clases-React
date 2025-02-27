import "./App.css";
import ListaProductos from "./components/ListaProductos";
import { ContextoProvider } from "./context/ContextoProducto";
import { ProductDetails } from "./components/ProductDetails";
import { useContext } from "react";
import { ContextoProducto } from "./context/ContextoProducto";

const AppRenderizado = ()=>{
  const {productoSeleccionado} = useContext(ContextoProducto);

  return(
    <div>
        {
          productoSeleccionado ? <ProductDetails/> : <ListaProductos />
        }
    </div>
  )
}

function App() {

  return (
    <>
      <h1>APPLE</h1>
      <ContextoProvider>
        <AppRenderizado />
      </ContextoProvider>
    </>
  );
}

export default App;
