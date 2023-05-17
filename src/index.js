import React from "react";
import ReactDOM from "react-dom/client";
import { TaskCard } from "./Task";
import { Button } from "./Button";
import { Post } from "./Posts";
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

function Counter(){
    const [count, setCount] = React.useState(0);
    /* Se esta usando un metodo llamado useState, que permite por medio de una arreglo, en su primer elemento poder ponerle nombre a la variable que se va a manejar y en la segunda variable ponerle el nombre al metodo que va a hacerle los cambios a esa variable*/
    return (
        <>
        <h1>Counter: {count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        </>
    );
}

root.render(
  <Counter/>
);
