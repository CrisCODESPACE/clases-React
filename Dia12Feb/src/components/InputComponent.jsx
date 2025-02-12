import useInput from "../hooks/useInput";

const InputComponent = () => {
  const { value, handleOnChange } = useInput("");
  //   const name = useInput("");

  return (
    <div>
      <h2>FORMULARIO</h2>
      <input
        type="text"
        placeholder="Introduce tu nombre..."
        value={value}
        onChange={handleOnChange}
        // {...name}
      />
      <p>Nombre ingresado: {value}</p>
    </div>
  );
};

export default InputComponent;
