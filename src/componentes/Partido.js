import React from 'react';
import Equipo from './Equipo';

const Partido = () => {
    return (
        <div className='partidos-card-partidos'>
            <div className='partidos-card-partidos-titulo'>
                <h1>Partido E12</h1>
                <h4>Cancha</h4>
                <h4>Direccion</h4>
            </div>
            <div className='partidos-card-partidos-equipos'>
                <Equipo equipo={1} lado={'izquierdo'} />
                <Equipo equipo={2} lado={'derecho'} />
            </div>
        </div>
    );
}

export default Partido;