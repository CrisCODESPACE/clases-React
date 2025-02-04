// 5 - Crea una lista de tareas donde los usuarios puedan agregar y eliminar elementos.

import { useState } from "react"

const Ejercicio5 = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const addTask = () => {
        setTasks([...tasks, task]);
        setTask("");
    }

    // const removeTask = (index) => {
    //     let deleted = tasks.filter((_, i) => i !== index)
    //     setTasks(deleted);
    // }

    const deleteItem = (itemToDelete) => {
        setTasks(tasks.filter(item => item !== itemToDelete)); // Eliminar item (filter crea un array nuevo con los elementos que sean distintos al itemToDelete)
    };

    return(
        <div>
            <input type="text" value={task} onChange={(evento) => setTask(evento.target.value)} />
            <button onClick={addTask}>Agregar tarea</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}
                    <button onClick={() => deleteItem(task)}>borrar</button></li>
                ))}
            </ul>
        </div>
    )
}

export default Ejercicio5