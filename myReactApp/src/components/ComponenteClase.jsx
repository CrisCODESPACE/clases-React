import React, {Component} from 'react';

class ComponenteClase extends Component {
    // constructor de la clase
    constructor(props){
        super(props);
        this.state = {
            mensaje: "Hola desde un componente de clase"
        };
    }

    //método obligatorio para renderizar la nueva interfaz de usuario

    render(){
        return (
            <div>
                <h1>{this.state.mensaje}</h1>
                <button onClick={() => this.setState({mensaje: "Estado actualizado"})}>Actualizar msj</button>
            </div>
        )
    }
}

export default ComponenteClase;
