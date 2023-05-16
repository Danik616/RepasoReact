import React from "react"
import ReactDOM from "react-dom/client"
import {Greeting} from "./Greeting"
const rootElement=document.getElementById("root")
const root= ReactDOM.createRoot(rootElement)




root.render(<div>
    <Greeting name="Sagar" />
    <Greeting name="Cosa" />
    <Greeting name="Otro" />
    <Greeting name="Nose" />
</div>)
