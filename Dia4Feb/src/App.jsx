import { useState } from 'react'
import './App.css'
// import HijoComponent from './components/HijoComponent'
import ContadorComponent from './components/ContadorComponent'
import ContadorDosComponent from './components/ContadorDosComponent';

// function App() {
//   const [contador, setContador] = useState(0);

//   const handlerIncremento = () => {
//     setContador(contador + 1);
//     console.log(contador);
//   }

//   const handlerDecremento = () => {
//     setContador(contador - 1);
//     console.log(contador);
//   }

//   return (
//     <>
//       <ContadorComponent value={contador} incremento={handlerIncremento} decremento={handlerDecremento}/>
//       <ContadorDosComponent value={contador} incremento={handlerIncremento} decremento={handlerDecremento}/>
//     </>
//   )
// }

// export default App

// EJERCICIOS

// import Ejercicio2 from './components/ejercicios useState/Ejercicio2.jsx'

// import Ejercicio3 from './components/ejercicios useState/Ejercicio3';

import Ejercicio5 from './components/ejercicios useState/Ejercicio5'

function App() {

  return (
    <>
      <Ejercicio5/>
    </>
  )
}

export default App
