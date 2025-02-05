import { useEffect, useRef, useState } from "react";

import "./App.css";

// useRef --------------------------------------------
// function App() {
//   const inputRef = useRef(null);

//   // useEffect(() => {
//   //   inputRef.current.focus();
//   // }, []);

//   function buttonFocus() {
//     inputRef.current.focus();
//   }

//   return (
//     <>
//       <input ref={inputRef} placeholder="Escribe aquí" />
//       <button onClick={buttonFocus}>Haz foco</button>
//     </>
//   );
// }

// function App() {
//   const [count, setCount] = useState(0);
//   const renderCount = useRef(0);

//   renderCount.current++;

//   return (
//     <>
//       <h1>Has renderizado este componente {renderCount.current} veces</h1>
//       <h1>Contador: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Aumentar contador</button>
//     </>
//   );
// }

// function App() {
//   const [count, setCount] = useState(0);
//   const valorPrevio = useRef(count);

//   useEffect(() => {
//     valorPrevio.current = count;
//   }, [count]);

//   return (
//     <>
//       <p>Valor actual: {count}</p>
//       <p>Valor previo: {valorPrevio.current}</p>
//       <button onClick={() => setCount(count + 1)}>Actualizar</button>
//     </>
//   );
// }

// useContext (Prop Drilling)
// import HijoComponent from "./components/HijoComponent";

// function App() {
//   const [theme, setTheme] = useState("light");

//   return (
//     <>
//       <HijoComponent theme={theme} setTheme={setTheme} />
//     </>
//   );
// }

// useContext

import { ThemeProvider } from "./context/ThemeContext";
import ThemeButtonComponent from "./components/ThemeButtonComponent";

function App() {
  return (
    <>
      <ThemeProvider>
        <h1>Ejemplo de useContext</h1>
        <ThemeButtonComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
