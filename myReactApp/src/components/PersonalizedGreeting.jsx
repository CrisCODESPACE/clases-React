function PersonalizedGreeting(props) {
    return (
        <div>
            <p>Hola, {props.name}! Tienes {props.age} años, y los ojos de color {props.color}</p>
        </div>
    )
}

export default PersonalizedGreeting;