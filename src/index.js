import React from "react"
import ReactDOM from "react-dom/client"
import { TaskCard } from "./Task"
import { Button } from "./Button"
const rootElement=document.getElementById("root")
const root= ReactDOM.createRoot(rootElement)


/*Se utiliza el evento onSubmit para poder enviar la informacion de un formulario por
medio de un botón, usamos la propiedad e.preventDefault para poder evitar que la página se
refresque y que envie por consola la información */
root.render(<div>
    <TaskCard ready={false}/>
    <Button text="Saludar"/>

    <form onSubmit={(e) => {
        e.preventDefault()
        console.log("Se ha enviado correctamente")
    }}>
        <h1>Formulario de registro</h1>
        <button>Send</button>
    </form>
</div>)

