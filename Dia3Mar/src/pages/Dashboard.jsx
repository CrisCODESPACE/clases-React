import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Panel de control</h2>
      <ul>
        <li>
          <Link to="profile">Perfil</Link>
        </li>
        <li>
          <Link to="settings">Configuración</Link>
        </li>
      </ul>
      <Outlet />
      <button onClick={() => navigate("/about")}>Ir a Acerca de</button>
    </div>
  );
};

export default Dashboard;
