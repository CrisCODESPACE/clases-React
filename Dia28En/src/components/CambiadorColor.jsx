import { useState } from "react";

const CambiadorColor = () => {
const [color, setColor] = useState("blue");

const randomizer = () => {
    const color = ["red", "green", "blue", "yellow", "purple", "orange"];
    const randomColor = color[Math.floor(Math.random() * color.length)];
    setColor(randomColor);
}
    return (
        <div>
            <div style={{width: "200px", height: "200px", backgroundColor: color}}></div>
            <button onClick={randomizer}>Cambia el color</button>
        </div>
    )
}

export default CambiadorColor;