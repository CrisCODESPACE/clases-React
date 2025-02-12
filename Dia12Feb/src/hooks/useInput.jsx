import { useState } from "react";

function useInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  const handleOnChange = (evento) => {
    setValue(evento.target.value);
  };

  return { value, handleOnChange };
}

export default useInput;
