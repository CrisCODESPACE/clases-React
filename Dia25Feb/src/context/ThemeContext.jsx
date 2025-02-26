import { createContext, useState } from "react";

// creamos el contexto

export const ThemeContext = createContext();

//  creamos el provider

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
