// import { useState, useEffect } from "react";
// import axios from "axios";
import "./App.css";

// PETICION CON FETCH Y PROMESAS THEN
// function App() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Error en la respuesta del servidor");
//         }
//         return response.json();
//       })
//       .then((datos) => {
//         setData(datos);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Cargando...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <>
//       <h1>Lista de usuarios</h1>
//       <ul>
//         {data.map((usuario) => (
//           <li key={usuario.id}>{usuario.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// PETICION CON FETCH, ASYNC/AWAIT y TRY/CATCH
// function App() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchDatos = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/users"
//         );

//         if (!response.ok) {
//           throw new Error("Error en la respuesta del servidor");
//         }

//         const result = await response.json();
//         setData(result);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDatos();
//   }, []);

//   if (loading) return <p>Cargando...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <>
//       <ul>
//         {data.map((usuario) => (
//           <li key={usuario.id}>{usuario.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// PETICION CON AXIOS Y PROMESAS

// function App() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         setData(response.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Cargando...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <>
//       <ul>
//         {data.map((usuario) => (
//           <li key={usuario.id}>{usuario.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// PETICION CON AXIOS, ASYNC/AWAIT y TRY/CATCH

// function App() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchDatos = async () => {
//       try {
//         const response = await axios.get(
//           "https://jsonplaceholder.typicode.com/users"
//         );
//         setData(response.data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDatos();
//   }, []);

//   if (loading) return <p>Cargando...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <>
//       <ul>
//         {data.map((usuario) => (
//           <li key={usuario.id}>{usuario.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

import { UserProvider } from "./context/UserContext";
import ListaUsuarioComponent from "./components/ListaUsuarioComponent";

function App() {
  return (
    <div>
      <h2 className="h2App">Soy el h2 de APP</h2>
      <UserProvider>
        <ListaUsuarioComponent />
      </UserProvider>
    </div>
  );
}

export default App;
