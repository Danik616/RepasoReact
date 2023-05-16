import React from "react"
import ReactDOM from "react-dom/client"
import {Greeting} from "./Greeting"
import { Button } from "./Button"
const rootElement=document.getElementById("root")
const root= ReactDOM.createRoot(rootElement)




root.render(<div>
    <Button text="click me"/>
</div>)
