

export function Examen () {
    return (
        <>
        <h1>Examen</h1>
        <h2>Una funcion para retornar algo y hacerlo mas dinamico</h2>
        <h3>Curso de React</h3>
        <h4>Desarrollador de Software y movil</h4>
        </>
    )
}


export const FirstApp = () => {


    return (
        <>

           { Examen()}
            {/* <code> { JSON.stringify(newMessage) } </code> */}
            <p>Pasante</p>
        </>
    )
}