import { Link, Outlet } from "react-router-dom";

const ProfileComponent = () => {
  return (
    <div>
      <h1>Perfil del usuario</h1>

      <nav>
        <ul>
          <li>
            <Link to="info">Ver información del usuario</Link>
          </li>
          <li>
            <Link to="configuracion">Configuración</Link>
          </li>
        </ul>
      </nav>
      <h1>Aqui se generará el outlet</h1>
      <Outlet />
    </div>
  );
};

export default ProfileComponent;
