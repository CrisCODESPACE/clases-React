// import { useState, useEffect } from "react";

// const Temporizador = () => {
//   const [currentValue, setCurrentValue] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentValue((prev) => prev + 1);
//     }, 3000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return <h1>Contador: {currentValue}</h1>;
// };

// export default Temporizador;

//Contador por segundo

import { useState, useEffect } from "react";

function ContadorPorSegundo() {
  const [contador, setContador] = useState(0);
  const [intervalRef, setIntervalRef] = useState(null);
  const [reanudar, setReanudar] = useState(false);
  //estado para controlar el intervalo
  // const [activo, setActivo] = useState(true);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setContador((prev) => prev + 1);
    }, 1000);

    setIntervalRef(intervalo);
    // Limpieza del intervalo cuando el componente se desmonte
    return () => clearInterval(intervalo);
  }, [reanudar]);

  const detenerContador = () => {
    if (intervalRef) {
      clearInterval(intervalRef);
      setIntervalRef(null);
    }
  };

  const reanudarContador = () => {
    setReanudar(!reanudar);
  };

  return (
    <div>
      <h2>Contador por Segundos: {contador}</h2>
      <button onClick={() => setContador(0)}>Reset to 0</button>
      <button onClick={detenerContador}>Parar intervalo</button>
      <button onClick={reanudarContador}>Reanudar</button>
    </div>
  );
}

export default ContadorPorSegundo;
