import { Link } from "react-router-dom";

const LoginButtonComponent = (props) => {
  return (
    <button>
      <Link to="/login">{props.mensaje}</Link>
    </button>
  );
};

export default LoginButtonComponent;
