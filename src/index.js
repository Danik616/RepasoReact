import React from "react"
import ReactDOM from "react-dom/client"

const rootElement=document.getElementById("root")
const root= ReactDOM.createRoot(rootElement)

function Greeting(){
    const name="Ejemplo"
    return <h1> {name}</h1>
}


root.render(Greeting())
