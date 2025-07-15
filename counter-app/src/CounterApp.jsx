import PropTypes from 'prop-types';

export const PrimerComponente = ({ title = 55654897}) => {

    return (

        <>
        <h1>CounterApp</h1>
        <h2>{ title }</h2>
            <div className='div-r' >
                <p>Este es un div</p>
                <h5>Segundo elemento</h5>
                <span>Tercer elemento</span>
                <button>Cuarto elemento</button>
                        
            </div>
                
        </>
    )

}

PrimerComponente.propTypes = {
    title: PropTypes.number
}
