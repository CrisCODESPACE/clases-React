import { Routes, Route, Navigate } from "react-router-dom";
// import { useState } from "react";
import ProfileComponent from "./components/ProfileComponent";
import RegisterComponent from "./components/RegisterComponent";
import LandingComponent from "./components/LandingComponent";
// import PrivateRouteComponent from "./components/PrivateRouteComponent";
import HomeComponent from "./components/HomeComponent";
import ProductosComponent from "./components/ProductosComponent";
import UserInfoComponent from "./components/UserInfoComponent";
import "./App.css";

function App() {
  // const [auth, setAuth] = useState(localStorage.getItem("auth") === "true");

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingComponent />} />
        <Route path="/login" element={<ProfileComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/productos/:id" element={<ProductosComponent />} />
        {/* <Route
          path="/home"
          element={
            <PrivateRouteComponent auth={auth}>
              <HomeComponent setAuth={setAuth} />
            </PrivateRouteComponent>
          }
        /> */}
        <Route path="/home" element={<HomeComponent />}>
          <Route path="userInfo" element={<UserInfoComponent />} />
        </Route>
        {/* <Route path="*" element={<Navigate to={auth ? "/home" : "/login"} />} /> */}
      </Routes>
    </>
  );
}

export default App;
