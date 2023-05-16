import React from "react"
import ReactDOM from "react-dom/client"
import { TaskCard } from "./Task"
const rootElement=document.getElementById("root")
const root= ReactDOM.createRoot(rootElement)

root.render(<div>
    <TaskCard/>
</div>)

