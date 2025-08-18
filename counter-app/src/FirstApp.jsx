// export function Examen () {
//     return (
//         <>
//         <h2>Esta es mi primera vez entrando a una aplicacion real de REACT.</h2>
//         {/* <iframe 
//             src="https://giphy.com/embed/d9QiBcfzg64Io" 
//             width="480" 
//             height="480" 
//             frameBorder="0" 
//             className="giphy-embed" 
//             allowFullScreen
//             title="Pacman GIF"
//         ></iframe>
//         <p><a href="https://giphy.com/gifs/pacman-gba-d9QiBcfzg64Io">via GIPHY</a></p> */}
//         </>
//     )
// }

// props = propiedades

import PropTypes from 'prop-types';


export const FirstApp = ({ title = 'No hay titulo', subtitle = 5 }) => {

    return (
        <>
        {/* <h1>{ title }</h1> */}
           {/* { Examen()} */}
            {/* <code> { JSON.stringify(newMessage) } </code> */}
            <h4 className='soy'>Gerardo Rmz - Pasante de Desarrollador de Software</h4>
            {/* <p>{subtitle}</p> */}
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.number
}

