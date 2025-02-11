import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h2>Página de entrada</h2>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/user">User Page</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
