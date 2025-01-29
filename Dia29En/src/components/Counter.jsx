import {useState} from 'react'

const Counter = ({evento, cuenta}) => {
    

    

    return (
        <>
        <button onClick={evento}>
            Hiciste click {cuenta} veces.
        </button>
        </>
    )
}

export default Counter