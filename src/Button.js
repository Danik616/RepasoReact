// Se hace la instalacion de prop-types. npm i prop-types

import PropTypes from "prop-types"

//El valor por defecto se puede declarar como se habia hecho anteriormente con defalutProps, pero se puede hacer así
export function Button ({text, name= "Juan"}){
    return <button>
        {text} -{name}
    </button>
}

//Lo que se esta diciendo aquí, es que si se pasa una propiedad hacia una funcion, debe ser String y ademas requerido
Button.propTypes= {
    text: PropTypes.string.isRequired
}


