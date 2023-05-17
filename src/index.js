import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import { TaskCard } from "./Task";
import { Button } from "./Button";
import { Post } from "./Posts";
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

function Counter(){
    const [mensaje, setMensaje] = useState('');
    const [counter, setCounter] = useState('');
    // En el dado caso de que nosotros necesitemos que se ejecute una sola vez el useEffect, nosotros de segundo valor tenemos que agregar un arreglo vacio, dentro de este arreglo este se basara en un objeto para poder ejecutarse cada vez que este objeto cambie
    useEffect(()=>{
        console.log("render")
    }, [ ])
    return (
        <>
        <input onChange={e => setMensaje(e.target.value)}/>
        <button onClick={() => {
            alert("el mensaje es: "+mensaje)
        }}>Enviar</button>

        <hr/>
        <h1>Contador: {counter}</h1>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+</button>
        </>


    );
}

root.render(
  <Counter/>
);
