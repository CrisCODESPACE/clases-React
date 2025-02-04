// 4 - Crea un formulario donde el usuario pueda ingresar su nombre y su correo.

import { useState } from "react"

// import { useState } from "react";

// const Ejercicio4 = () => {
//     const [inputValueName, setInputValueName] = useState("");
//     const [inputValueMail, setInputValueMail] = useState("");

//     const addName = () => {
//         if(inputValueName !== ""){
//             alert("Nombre añadido: " + inputValueName)
//         } else {
//             alert("Introduce un nombre.")
//         }
//     }

//     const addMail = () => {
//         if(inputValueMail !== ""){
//             alert("Mail añadido: " + inputValueMail)
//         } else {
//             alert("Introduce un mail.")
//         }
//     }

//     const cleanForm = () => {
//         setInputValueName("");
//         setInputValueMail("");
//     }

//     const sendForm = () => {
//         addName();
//         addMail();
//         cleanForm();
//     }

//     return (
//         <div>
//             <input type="text" placeholder="Escribe tu nombre." value={inputValueName} onChange={(evento) => {
//                 setInputValueName(evento.target.value);
//             }} />
//             <input type="text" placeholder="Escribe tu mail." value={inputValueMail} onChange={(evento) => {
//                 setInputValueMail(evento.target.value);
//             }} required/>
//             <button type="submit" onClick={sendForm}>Submit</button>
//             <button type="button" onClick={cleanForm}>Eliminar</button>
//         </div>
//     )
// } 


// export default Ejercicio4;

const Ejercicio4 = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handlerSubmit = (evento) => {
        evento.preventDefault();

        alert(`Nombre: ${name}, Email: ${email}`);
    }


    return (
        <form onSubmit={handlerSubmit}>
            <label>Nombre:</label>
            <input type="text" value={name} placeholder="Escribe tu nombre..." onChange={(evento) => setName(evento.target.value)}/>
            <hr />
            <label>Email:</label>
            <input type="text" value={email} placeholder="Escribe tu email..." onChange={(evento) => setEmail(evento.target.value)}/>
            <hr />
            <button type="submit">Enviar</button>
        </form>
    )

}

export default Ejercicio4