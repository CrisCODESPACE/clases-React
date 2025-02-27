import "./App.css";
import { CarritoComponent } from "./components/CarritoComponent";
import ListaProductos from "./components/ListaProductos";
import { ContextoProvider } from "./context/ContextoProducto";

function App() {
  return (
    <>
      <h1>APPLE</h1>
      <ContextoProvider>
        <ListaProductos />
        <CarritoComponent />
      </ContextoProvider>
    </>
  );
}

export default App;
