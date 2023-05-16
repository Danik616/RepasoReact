// Se hace la instalacion de prop-types. npm i prop-types

import PropTypes from "prop-types"

export function Button ({text, name}){
    return <button>
        {text} -{name}
    </button>
}

//Lo que se esta diciendo aquí, es que si se pasa una propiedad hacia una funcion, debe ser String y ademas requerido
Button.propTypes= {
    text: PropTypes.string.isRequired
}

Button.defaultProps= {
    name: "Juan"
}