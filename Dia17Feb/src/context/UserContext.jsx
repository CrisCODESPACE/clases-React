import { createContext, useState, useEffect } from "react";
import axios from "axios";

// creación contexto

export const UserContext = createContext();

// creación del provider: se encarga de hacer la peti a la api, también tendrá los manejadores (handlers) para crear o borrar un usuario.

// useEffect(() => {}, [])

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //petición a la API

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/users?page=2");

        let responseFormated = response.data.data;
        console.log("respuesta", responseFormated);

        // if (!response.ok) {
        //   throw new Error("Error en la petición");
        // }

        setUsers(responseFormated);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchResponse();
  }, []);

  //   const addUser = (name) => {
  //     const newUser = {id: users.length + 1, name};
  //     setUsers([...users, newUser]);
  //   }

  //   const deleteUser = (id) => {
  //     setUsers()
  //   }

  return (
    <UserContext.Provider value={{ users, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
