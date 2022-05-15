import React from 'react';

const BotonUnirse = ({ cupos }) => {
    return (
        <>
            {
                cupos === 0 ?
                    <button className='partidos-card-partidos-boton-disable' disabled >Cupos Agotados</button>
                    :
                    <button className='partidos-card-partidos-boton'>Quiero Jugar</button>
            }
        </>
    );
}

export default BotonUnirse;