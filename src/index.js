import React from "react"
import ReactDOM from "react-dom/client"
import { TaskCard } from "./Task"
import { Button } from "./Button"
import { Post } from "./Posts"
const rootElement=document.getElementById("root")
const root= ReactDOM.createRoot(rootElement)


root.render(<div>
    <Post/>
</div>)

