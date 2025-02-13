import { useReducer, useState } from "react";
import { reducer, initialState } from "../reducers/reducer";

const TaskListComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [task, setTask] = useState("");

  const addTaskHandler = () => {
    if (task.length < 1) {
      alert("Añade una tarea");
    } else {
      dispatch({ type: "add", payload: task });
      setTask("");
    }
  };

  return (
    <div>
      <h3>Lista de Tareas</h3>
      <input
        type="text"
        value={task}
        onChange={(evento) => setTask(evento.target.value)}
      />
      <button onClick={addTaskHandler}>Agregar tarea</button>
      <button onClick={() => dispatch({ type: "clear" })}>Borrar todo</button>

      <ul>
        {state.map((tarea) => (
          <li key={tarea.id}>
            {tarea.text}
            <button
              onClick={() => dispatch({ type: "remove", payload: tarea.id })}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskListComponent;
