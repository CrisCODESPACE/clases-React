import { useReducer } from "react";

const initialState = { isOn: false };

function reducer(state, action) {
  switch (action.type) {
    case "toggle":
      return { isOn: !state.isOn };
    default:
      return state;
  }
}

const ToggleSwitch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Estado: {state.isOn ? "ON" : "OFF"}</p>
      <button onClick={() => dispatch({ type: "toggle" })}>
        Cambiar estado
      </button>
    </div>
  );
};

export default ToggleSwitch;

reducer(initialState, { type: "loquesea" });
