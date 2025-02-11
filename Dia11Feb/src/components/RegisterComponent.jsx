import LoginButtonComponent from "./LoginButtonComponent";

const RegisterComponent = () => {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <label for="firstName">First name:</label>
        <input type="text" placeholder="First name..." id="firstName" />
        <label for="lastName">Last name:</label>
        <input type="text" placeholder="Last name..." id="lastName" />
        <label for="email">Email:</label>
        <input type="email" placeholder="Email..." id="email" />
        <label for="userPassword">Password:</label>
        <input type="password" placeholder="Password..." id="password" />

        <button type="submit">Register</button>
      </form>
      <LoginButtonComponent mensaje="Ya tengo cuenta" />
    </div>
  );
};

export default RegisterComponent;
