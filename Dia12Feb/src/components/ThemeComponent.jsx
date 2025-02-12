import useTheme from "../hooks/useTheme";

const ThemeComponent = () => {
  const { state, handleTheme } = useTheme();

  return (
    <button onClick={handleTheme}>
      {state === "light" ? "modo oscuro" : "modo claro"}
    </button>
  );
};

export default ThemeComponent;
