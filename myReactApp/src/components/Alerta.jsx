function Alerta({mensaje, tipo}){
    const styles = {
        success: {color: "green"},
        error: {color: "red"},
        warning: {color: "orange"},
    }

    return(
        <div style={styles[tipo]}>
            <p>{mensaje}</p>
        </div>
    )
}

export default Alerta;