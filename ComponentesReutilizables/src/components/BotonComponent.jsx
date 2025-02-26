import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  function log() {
    setContador(contador + 1);
  }

  return (
    <div>
      <h2>contador: {contador}</h2>
      <button onClick={log}>incrementar</button>
      <button>decrementar</button>
    </div>
  );
}

export default Contador;
