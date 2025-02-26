// import "./App.css";
// import Temporizador from "./components/Temporizador";
// // import Contador from "./components/BotonComponent";

// function App() {
//   return (
//     <>
//       {/* <h1>Reutilización de un componente</h1> */}
//       {/* <Contador /> */}
//       {/* <BotonComponent
//         manejador={() => console.log("Click en el segundo botón")}
//         text={"segundo botón"}
//       /> */}
//       <Temporizador />
//     </>
//   );
// }

// export default App;

//APP
import React from "react";
import ContadorPorSegundo from "./components/Temporizador";

function App() {
  return (
    <div>
      <h2>Contador por Segundos</h2>
      <ContadorPorSegundo />
    </div>
  );
}

export default App;
