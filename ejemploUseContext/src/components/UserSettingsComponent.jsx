import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function UserSettingsComponent() {
  const { changeUserName } = useContext(UserContext);
  const [newName, setNewName] = useState("");

  const handleSubmit = (evento) => {
    evento.preventDefault();
    changeUserName(newName);
    setNewName("");
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px" }}>
      <h2>Configuración de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nuevo nombre"
          value={newName}
          onChange={(evento) => setNewName(evento.target.value)}
        />
        <button type="submit">Actualizar Nombre</button>
      </form>
    </div>
  );
}
