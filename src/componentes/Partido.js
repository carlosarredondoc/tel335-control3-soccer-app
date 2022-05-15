import React, { useEffect, useState } from 'react';
import axios from 'axios'
const url = 'http://localhost:8000/'

const Partido = ({ ciudadPartido, token, zona }) => {
    console.log(ciudadPartido)
    const [partidos, setPartidos] = useState([])
    const cargarPartido = async () => {
        const respuesta = await axios.get(url + 'api/match/region/' + zona, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        setPartidos(respuesta.data.match)
    }

    useEffect(() => {
        cargarPartido()
    }, [])
    return (
        <>
            {
                partidos.length == 0 ?
                    <div className='partidos-card-partidos'>
                        <h1>No hay partidos Manito</h1>
                    </div>
                    :
                    ciudadPartido ? partidos.map((partido) => (
                        ciudadPartido == partido.city ?
                            <div className='partidos-card-partidos'>
                                <div className='partidos-card-partidos-titulo'>
                                    <h1>{partido.nameMatch}</h1>
                                    <h4>{partido.nameSoccerField}</h4>
                                    <h4>{partido.location}</h4>
                                </div>
                                <div className='partidos-card-partidos-equipos'>
                                    <div className='partidos-card-partidos-equipo-izq'>
                                        <h4>{partido.firstTeamName}</h4>
                                        <h4>Jugadores: {partido.numberOfPlayers} (Cupos 6)</h4>
                                        <button className='partidos-card-partidos-boton'>Quiero Jugar</button>
                                    </div>
                                    <div className='partidos-card-partidos-equipo-der'>
                                        <h4>{partido.secondTeamName}</h4>
                                        <h4>Jugadores: {partido.numberOfPlayers} (Cupos 6)</h4>
                                        <button className='partidos-card-partidos-boton'>Quiero Jugar</button>
                                    </div>
                                </div>
                            </div>
                            :
                            <></>
                    ))
                        :
                        partidos.map((partido) => (
                            <div className='partidos-card-partidos'>
                                <div className='partidos-card-partidos-titulo'>
                                    <h1>{partido.nameMatch}</h1>
                                    <h4>{partido.nameSoccerField}</h4>
                                    <h4>{partido.location}</h4>
                                </div>
                                <div className='partidos-card-partidos-equipos'>
                                    <div className='partidos-card-partidos-equipo-izq'>
                                        <h4>{partido.firstTeamName}</h4>
                                        <h4>Jugadores: {partido.numberOfPlayers} (Cupos 6)</h4>
                                        <button className='partidos-card-partidos-boton'>Quiero Jugar</button>
                                    </div>
                                    <div className='partidos-card-partidos-equipo-der'>
                                        <h4>{partido.secondTeamName}</h4>
                                        <h4>Jugadores: {partido.numberOfPlayers} (Cupos 6)</h4>
                                        <button className='partidos-card-partidos-boton'>Quiero Jugar</button>
                                    </div>
                                </div>
                            </div>
                        ))
            }

        </>
    );
}

export default Partido;