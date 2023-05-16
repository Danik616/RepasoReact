import React from "react"
import ReactDOM from "react-dom/client"

const rootElement=document.getElementById("root")
const root= ReactDOM.createRoot(rootElement)

function Greeting(){
    return <h1> Este es un componente</h1>
}


root.render(Greeting())
