import React from 'react';

const Equipo = ({ equipo, lado }) => {
    return (
        <>
        { 
            lado === 'izquierdo' ?
            <div className='partidos-card-partidos-equipo-izq'>
                <h4>Equipo {equipo}</h4>
                <h4>Jugadores: 11 (Cupos 6)</h4>
                <button className='partidos-card-partidos-boton'>Quiero Jugar</button>
            </div>
            :
            <div className='partidos-card-partidos-equipo-der'>
            <h4>Equipo {equipo}</h4>
            <h4>Jugadores: 11 (Cupos 6)</h4>
            <button className='partidos-card-partidos-boton'>Quiero Jugar</button>
        </div>
    }
    </>
    );
}

export default Equipo;