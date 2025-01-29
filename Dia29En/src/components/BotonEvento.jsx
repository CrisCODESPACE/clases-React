const BotonEvento = () => {
    // const handlerClick = () => {
    //     console.log("has hecho click en el boton");
     
    // }

    function handlerClick() {
        console.log("has hecho click en el boton");
    }

    return (
        <button onClick={handlerClick}>Hazme click</button>
    )
}

export default BotonEvento;