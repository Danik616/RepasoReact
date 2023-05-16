import React from "react"
import ReactDOM from "react-dom/client"
import { TaskCard } from "./Task"
import { Button } from "./Button"
const rootElement=document.getElementById("root")
const root= ReactDOM.createRoot(rootElement)

root.render(<div>
    <TaskCard ready={false}/>
    <Button/>
</div>)

