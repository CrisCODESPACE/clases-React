import { Routes, Route } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
// import AboutComponent from "./components/AboutComponent";
// import ContactComponent from "./components/ContactComponent";
// import NavbarComponent from "./components/NavbarComponent";
// import LoginComponent from "./components/LoginComponent";
// import ProductDetailsComponent from "./components/ProductDetailComponent";
import ProfileComponent from "./components/ProfileComponent";
import Info from "./components/Info";
import Config from "./components/Config";
import "./App.css";

function App() {
  return (
    <>
      {/* <LoginComponent /> */}
      {/* <NavbarComponent /> */}
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/perfil" element={<ProfileComponent />}>
          {/* Aqui irán las rutas hijas de ProfileComponent */}
          <Route path="info" element={<Info />} />
          <Route path="configuracion" element={<Config />} />
        </Route>
        {/* <Route path="/about" element={<AboutComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/productos/:id" element={<ProductDetailsComponent />} /> */}
      </Routes>
    </>
  );
}

export default App;
