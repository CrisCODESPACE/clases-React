import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ThemeButton from "./ThemeButton";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#333",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{darkMode ? "MODO OSCURO" : "MODO CLARO"}</h1>
      <ThemeButton />
    </div>
  );
};

export default Home;
