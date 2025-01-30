// sintaxis básica de un useEffect

// useEffect(() => {
//   // Código de efecto secundario
// }, [dependencias])

//---------------------------------------------

// ejemplo componentDidMount -> este useEffect se ejecutará cuando se monte(renderice) el componente
// import { useEffect } from 'react'



// function App() {
  
//   useEffect(() => {
//     console.log("El componente se ha montado");
    
//   }, []) // el array de dependencias al permanecer vacío, este useEffect solo se ejecutará una vez cuando se monte el componente
  

//   return (
//     <h1>Hola a todas!</h1>
//   )
// }

// export default App

//---------------------------------------------

//ejemplo componentDidUpdate -> este useEffect se ejecutará cada vez que se actualice el componente

// import { useEffect, useState } from 'react'



// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
    
//     console.log("El contador ha incrementado");
    
//   }, [count]) // será la "variable del useState" al actualizarse el que ejecute el useEffect de nuevo. Cada vez que cambie, este useEffect se ejecutará.
  

//   return (
//     <div>
//       <h1>Contador: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Incrementar</button>
//     </div>
//   )
// }

// export default App

//----------------------------------------------------
// limpieza de efecto -> componentDidUnmount

// import { useEffect, useState } from 'react'



// function App() {
//   const [segundos, setSegundos] = useState(0);

//   useEffect(() => {

//     const intervalo = setInterval(() => {
//       setSegundos((segundo) => segundo + 1);
//     }, 1000)

//     console.log("HOLA");
    
    
//     return () => {
//       clearInterval(intervalo) // limpiar el setInterval
//     }
    
//   }, []) 
  

//   return (
//     <p>Tiempo:{segundos} segundos</p>
//   )
// }

// export default App

//------------------------------------------------------
// import CambiarTitulo from "./components/CambiarTitulo"

// function App() {
 
//   return (
//     <>
//     <CambiarTitulo/>
//     </>
//   )
// }

// export default App

// ---------------------------------------------
// import ContadorTeclado from "./components/ContadorTeclado"

// function App() {
 
//   return (
//     <>
//     <ContadorTeclado/>
//     </>
//   )
// }

// export default App

//-----------------------------------------------------
// import ModoOscuro from "./components/ModoOscuro"

// function App() {
 
//   return (
//     <>
//     <ModoOscuro/>
//     </>
//   )
// }

// export default App

//--------------------------------------------------
import CargaDatos from "./components/CargaDatos"

function App() {
 
  return (
    <>
    <CargaDatos/>
    </>
  )
}

export default App
