import { Outlet, Link } from "react-router-dom";

const HomeComponent = () => {
  // const handleLogOut = () => {
  //   localStorage.removeItem("auth");
  //   setAuth(false);
  // };

  return (
    <div>
      <h2>Welcome to your Home Page</h2>
      <li>
        <Link to="userInfo">Ver Info</Link>
      </li>
      <Outlet />
      <button>Log out</button>
    </div>
  );
};

export default HomeComponent;
