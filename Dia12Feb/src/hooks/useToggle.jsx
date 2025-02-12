import { useState } from "react";

function useToggle() {
  const [state, setState] = useState(false);

  const handleToggle = () => setState((prev) => !prev);

  return [state, handleToggle, setState];
}

export default useToggle;
