import { Link } from "react-router-dom";

const RegisterButtonComponent = (props) => {
  return (
    <button>
      <Link to="/register">{props.mensaje}</Link>
    </button>
  );
};

export default RegisterButtonComponent;
