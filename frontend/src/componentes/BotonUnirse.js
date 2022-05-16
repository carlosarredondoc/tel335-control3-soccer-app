import axios from 'axios';
import React from 'react';
const url = 'http://localhost:8000/'

const BotonUnirse = ({ cupos, equipo, token, id, usuariosEquipo1, setEquipo1, usuariosEquipo2, setEquipo2, pertenecer, checkUser }) => {
    const handleJoin = () => {
        axios.post(url + 'api/match/linkuserwithmatch/' + equipo, {
            id: id
        }, { headers: { 'Authorization': `Bearer ${token}` } })
        if (equipo === 1) {
            setEquipo1(usuariosEquipo1 + 1)
        } else if (equipo === 2) {
            setEquipo2(usuariosEquipo2 + 1)
        }
        checkUser()
    }
    return (
        <>
            {
                cupos === 0 ?
                    <button className='partidos-card-partidos-boton-disable' disabled >Cupos Agotados</button>
                    :
                    pertenecer ? <button className='partidos-card-partidos-boton-disable' disabled >Quiero Jugar</button>
                        :
                        <button className='partidos-card-partidos-boton' onClick={() => handleJoin()}>Quiero Jugar</button>
            }
        </>
    );
}

export default BotonUnirse;