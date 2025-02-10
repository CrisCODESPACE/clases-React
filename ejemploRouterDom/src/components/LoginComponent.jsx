import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const LoginComponent = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoggedIn(true), 3000); // simulacion de login tras 3 segundos
  }, []);

  if (loggedIn) {
    return <Navigate to="/about" />;
  }

  return <h1>Iniciando sesión...</h1>;
};

export default LoginComponent;
