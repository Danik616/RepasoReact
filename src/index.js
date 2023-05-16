import React from "react"
import ReactDOM from "react-dom/client"

const rootElement=document.getElementById("root")
const root= ReactDOM.createRoot(rootElement)

function Greeting(){
    const user={
        firstname: "Daniel",
        surname: "Vargas"
    }
    return <h1> {JSON.stringify(user)}</h1>
}


root.render(Greeting())
