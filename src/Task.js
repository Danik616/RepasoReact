//Para nosotros poder agregar estilos, nosotros tenemos que escribirlo en la propiedad style pero dentro de dos llaves para que no haya problema con React, la llave de adentro es un objeto tipo JSON donde van a entrar estos cambios de las propiedades
export function TaskCard(){
    return (
        <div style={{background: "#202020", color: "#fff"}}>
            <h1>Mi primer tarea</h1>
            <p>Tarea realizada</p>
        </div>
    );
}