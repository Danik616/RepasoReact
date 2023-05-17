// Se hace la instalacion de iconos en react. npm install react-icons

//En este caso se esta usando la libreria de visual studio code=vsc, pero hay mas.
import { VscBug } from "react-icons/vsc";
export const Post = () => {
    return <button onClick={() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))

    }}>
        <VscBug />
        Traer datos
    </button>
}