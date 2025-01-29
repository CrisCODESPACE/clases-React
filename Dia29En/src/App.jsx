// exportación nombrada con alias
// import {MiBoton as Pepe, Botoncito as Button} from './components/MiBoton.jsx'
// exportación nombrada
// import {MiBoton, Botoncito} from './components/MiBoton.jsx'
//exportación por defecto. Aquí podremos llamar al componente como queramos.
// import MiBoton from './components/MiBoton.jsx';

//----------------------------------------------

// import Login from './components/Login.jsx'
// import Register from './components/Register.jsx'

// import {useState} from 'react'

// const productos = [
//   {title: "Manzana",  isFruit: true},
//   {title: "Tomate", isFruit: false},
//   {title: "Pimiento",  isFruit: false},
//   {title: "Berenjena",  isFruit: false},
//   {title: "Cereza", isFruit: true},
// ]


// function App() {

//   return (
//     <>
//       <h1 className="clase-titulo">Soy la aplicación REACT.</h1>
//       <ul>
//         {productos.map((producto, index) =>
//           <li key={index} style={{color: producto.isFruit ? "green" : "red"}}>{producto.title}</li>
//         )}
//       </ul>
//     </>
//   )
// }

// export default App
// import BotonEvento from "./components/BotonEvento"
// import { useState } from "react"
// import Counter from "./components/Counter"

// function App() {
//   const [count, setCount] = useState(0)

//   function handleCount() {
//     setCount(count + 1);
//   }

//   return (
//     <>
//       <h1 className="clase-titulo">Soy la aplicación REACT.</h1>
//       {/* <BotonEvento/> */}
//       <Counter evento={handleCount} cuenta={count}/>
//       <Counter evento={handleCount} cuenta={count}/>
      
//     </>
//   )
// }

// export default App 
import SearchBar from "./components/SearchBar"
import ProductTable from "./components/ProductTable"
import { useState } from "react"

const products = [
  {category: "Frutas", price: "1€", stocked: true, name: "Manzana"},
  {category: "Frutas", price: "1.5€", stocked: true, name: "Fruta del Dragón"},
  {category: "Frutas", price: "2€", stocked: false, name: "Melocotón"},
  {category: "Verduras", price: "0.5€", stocked: true, name: "Espinaca"},
  {category: "Verduras", price: "4€", stocked: false, name: "Calabaza"},
  {category: "Verduras", price: "2€", stocked: true, name: "Guisantes"},
]


function App() {
  const [filterText, setFilterText] = useState("");
  
  return (
    <>
      <h1>Admin panel</h1>
      <SearchBar filterText={filterText} onFilterText={setFilterText}/>
      <ProductTable products={products} filterText={filterText}/>
    </>
  )
}

export default App 


