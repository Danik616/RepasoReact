import PropTypes from "prop-types"

export function Button ({text, name= "Juan"}){
    return <button onClick={function () {
        console.log("Hola mundo")
    }}>
        {text} -{name}
    </button>
}

Button.propTypes= {
    text: PropTypes.string.isRequired
}


