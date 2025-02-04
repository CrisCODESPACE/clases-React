// 2 - Cambia el color de fondo de la página según la opción seleccionada por el usuario.

import { useState } from "react"

const Ejercicio2 = () => {
    const [color, setColor] = useState("white");

    // document.body.style.backgroundColor = color;

    // const cambiador = () => {
    //     const color = ["red", "green", "blue"];
    //     const randomColor = color[Math.floor(Math.random() * color.length)];
    //     console.log(randomColor);
        
    //     setColor(randomColor);

    //     document.body.style.backgroundColor = color;
    // }


    // return (
    //     <div style={{width: "200px", height: "200px", backgroundColor: color}}>
    //         <button onClick={cambiador}>cambia de color</button>
    //     </div>
    // )
    document.body.style.backgroundColor = color;

    const handlerColor = (e) => {
        setColor(e.target.value)

        document.body.style.backgroundColor = color;
    }

     return (
        <>
        <select onChange={handlerColor}>
            <option value="">Elige un color</option>
            <option value="pink">rosa</option>
            <option value="red">rojo</option>
            <option value="blue">azul</option>
            <option value="green">verde</option>
        </select>
        </>
     )

}

export default Ejercicio2