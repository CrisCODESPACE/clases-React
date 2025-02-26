import "./App.css";
import ListaProductos from "./components/ListaProductos";
import { ContextoProvider } from "./context/ContextoProducto";

function App() {
  return (
    <>
      <h1>APPLE</h1>
      <ContextoProvider>
        <ListaProductos />
      </ContextoProvider>
    </>
  );
}

export default App;
