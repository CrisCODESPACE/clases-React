// IMPORTACIONES
import { createContext, useState, useEffect } from "react";

// CREAMOS CONTEXTO

export const ThemeContext = createContext();

// CREAMOS EL PROVEEDOR DE CONTEXTO

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // funcion que alternará entre un tema u otro
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  //useEffect que aplicará el cambio del tema cada vez que theme se actualice
  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "#fff" : "#000";
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};
