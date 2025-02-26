import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "../styles/listaUsuarios.css";

// recibirá los datos desde el contexto y renderizará la lista de los usuarios

const ListaUsuarioComponent = () => {
  const { users, loading, error } = useContext(UserContext);

  if (loading) return <p>Cargando usuarios...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className="h2List">Lista de usuarios</h2>
      {users.map((usuario) => (
        <li key={usuario.id}>
          {usuario.first_name} {usuario.last_name}
        </li>
      ))}
    </div>
  );
};

export default ListaUsuarioComponent;
