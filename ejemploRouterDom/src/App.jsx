import { Routes, Route } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";
// import NavbarComponent from "./components/NavbarComponent";
import LoginComponent from "./components/LoginComponent";
import "./App.css";

function App() {
  return (
    <>
      <LoginComponent />
      {/* <NavbarComponent /> */}
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
      </Routes>
    </>
  );
}

export default App;
