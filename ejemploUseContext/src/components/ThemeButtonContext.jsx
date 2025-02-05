import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeButtonComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          border: "none",
          borderRadius: "5px",
          backgroundColor: theme === "light" ? "#000" : "#fff",
          color: theme === "light" ? "#fff" : "#000",
        }}
      >
        Cambiar a {theme === "light" ? "modo oscuro" : "modo claro"}
      </button>
    </>
  );
};

export default ThemeButtonComponent;
