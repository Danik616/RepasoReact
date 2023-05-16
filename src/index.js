import React from "react"
import ReactDOM from "react-dom/client"

const rootElement=document.getElementById("root")
const root= ReactDOM.createRoot(rootElement)

function Greeting(){
    const user={
        firstname: "Daniel",
        surname: "Vargas"
    }
    return <div>
        <h1>Hello, {user.firstname} {user.surname}</h1>
    </div>
}


root.render(Greeting())
