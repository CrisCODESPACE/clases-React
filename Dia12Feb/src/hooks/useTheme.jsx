import { useEffect, useState } from "react";

function useTheme(defaultTheme = "light") {
  const [state, setState] = useState(defaultTheme);

  const handleTheme = () => {
    setState((prev) => (prev === "light" ? "dark" : "light"));

    console.log("Handle theme");
  };

  const themeChangeBackground = state === "light" ? "white" : "black";

  document.body.style.backgroundColor = themeChangeBackground;

  //   useEffect(() => {
  //     const themeChangeBackground = state === "light" ? "white" : "black";
  //     document.body.style.backgroundColor = themeChangeBackground;
  //     console.log("hola desde useEffect");
  //   }, [state]);

  return { state, handleTheme };
}

export default useTheme;
