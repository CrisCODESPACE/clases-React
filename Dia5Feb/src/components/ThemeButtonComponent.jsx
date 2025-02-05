import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeButtonComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#333" : "#fff",
        }}
      >
        Cambiar a tema {theme === "light" ? "oscuro" : "claro"}
      </button>
    </>
  );
}
