import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeButton = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>
        {darkMode ? "Modo Claro" : "Modo Oscuro"}
      </button>
    </div>
  );
};

export default ThemeButton;
