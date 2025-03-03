import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (evento) => {
    evento.preventDefault();
    login(userName);
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre usuario"
          value={userName}
          onChange={(evento) => setUserName(evento.target.value)}
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
