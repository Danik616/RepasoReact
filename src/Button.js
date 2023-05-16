import PropTypes from "prop-types"

export function Button ({text, name= "Juan"}){
    return <button>
        {text} -{name}
    </button>
}

Button.propTypes= {
    text: PropTypes.string.isRequired
}


