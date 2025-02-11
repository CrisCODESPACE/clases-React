import LoginButtonComponent from "./LoginButtonComponent";
import RegisterButtonComponent from "./RegisterButtonComponent";

const LandingComponent = () => {
  return (
    <div>
      <h1>Welcome to</h1>
      <h2>Conecto</h2>
      <LoginButtonComponent mensaje="Go To Login" />
      <RegisterButtonComponent mensaje="Go To Register" />
    </div>
  );
};

export default LandingComponent;
