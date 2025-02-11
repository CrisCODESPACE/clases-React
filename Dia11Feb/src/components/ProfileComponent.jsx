import { Link } from "react-router-dom";
import RegisterButtonComponent from "./RegisterButtonComponent";

const ProfileComponent = ({ setAuth }) => {
  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    setAuth(true);
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label for="userName">User name:</label>
        <input type="text" placeholder="User Name" id="userName" />
        <label for="password">Password:</label>
        <input type="text" placeholder="Password" id="password" />
        <button>
          <Link to="/home">Login</Link>
        </button>
      </form>
      {/* <button>
        <Link to="/register">Register</Link>
      </button> */}
      <RegisterButtonComponent mensaje="¿Aún no tienes cuenta?" />
    </div>
  );
};

export default ProfileComponent;
