import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import UserList from "../components/UserList";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const [listaUsuarios, setListaUsuarios] = useState([]);
  //   const navigate = useNavigate();
  const [error, setError] = useState(false);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        setError(true);
        throw new Error("Error", response.status);
      }

      const data = await response.json();
      setListaUsuarios(data);
    } catch (err) {
      console.error(err.message);
      setError(true);
    }
  };

  useEffect(() => {
    // if (!user) {
    //   console.log("hola");
    //   navigate("/login");
    //   return;
    // }

    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((data) => setListaUsuarios(data));

    fetchUsers();
  }, [user]);

  return (
    <div>
      {user ? (
        <h2>¡Bienvenido/a {user.name}!</h2>
      ) : (
        <h2>Cargando usuario...</h2>
      )}
      <button onClick={logout}>Cerrar Sesión</button>
      {error ? (
        <p>Error al realizar la peticion</p>
      ) : (
        <UserList users={listaUsuarios} />
      )}
    </div>
  );
};

export default Dashboard;
