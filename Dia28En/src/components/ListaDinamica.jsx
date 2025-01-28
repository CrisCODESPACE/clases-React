import { useState } from "react";

const ListaDinamica = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const addItem = () => {
        if(inputValue.trim() !== ""){
            setItems([...items, inputValue]); 
            setInputValue("");
        } else {
            alert("No se puede agregar una tarea vacía")
        }
    };

    return (
        <div>
            <input type="text" placeholder="Añade tu tarea" value={inputValue} onChange={(event) => {setInputValue(event.target.value)}}/>
            <button onClick={addItem}>Añadir</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListaDinamica;