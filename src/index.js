import React from "react";
import ReactDOM from "react-dom/client";
import { TaskCard } from "./Task";
import { Button } from "./Button";
import { Post } from "./Posts";
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

function Counter(){
    const [mensaje, setMensaje] = React.useState('');
    
    return (
        <>
        <input onChange={e => setMensaje(e.target.value)}/>
        <button onClick={() => {
            alert("el mensaje es: "+mensaje)
        }}></button>
        </>
    );
}

root.render(
  <Counter/>
);
