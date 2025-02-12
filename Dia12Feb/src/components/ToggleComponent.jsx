import { useEffect } from "react";
import useToggle from "../hooks/useToggle";

const ToggleComponent = () => {
  const [state, handleToggle, setState] = useToggle();

  useEffect(() => {
    setState(true);
  }, []);

  return (
    <div>
      <p>Estado: {state ? "Encendido" : "Apagado"}</p>
      <button onClick={handleToggle}>{state ? "Ocultar" : "Mostar"}</button>
      {state && <p>Hola, soy visible</p>}
    </div>
  );
};

export default ToggleComponent;
