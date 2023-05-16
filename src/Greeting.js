export function Greeting(){
    const user={
        firstname: "Johan",
        surname: "Hortua"
    }
    return <div>
        <h1>Hello, {user.firstname} {user.surname}</h1>
    </div>
}