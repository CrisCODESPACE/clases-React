import {useState} from 'react';

const ToggleText = () => {
    const [isVisible, setIsVisible] = useState(true);
    // setIsVisible(false);


    return (
        <>
        {isVisible && <h1>Hola, soy visible</h1>}
        <button onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? "Ocultar" : "Mostrar"}
        </button>
        </>
    )
}

export default ToggleText;