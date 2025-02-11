import { Outlet, Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="settings">Configuración de usuario</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default DashboardPage;
