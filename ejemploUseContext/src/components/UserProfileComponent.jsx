import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function UserProfileComponent() {
  const { userName } = useContext(UserContext);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px" }}>
      <h2>Perfil de Usuario</h2>
      <p>Nombre: {userName}</p>
    </div>
  );
}
