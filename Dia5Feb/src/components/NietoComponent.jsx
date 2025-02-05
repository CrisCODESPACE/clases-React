const NietoComponent = ({ theme, setTheme }) => {
  return (
    <div>
      <p>El tema actual es: {theme} </p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Cambio de tema
      </button>
    </div>
  );
};

export default NietoComponent;
