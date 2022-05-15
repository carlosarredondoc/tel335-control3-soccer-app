import React, { useEffect, useState } from 'react';
import axios from 'axios'
import BotonUnirse from './BotonUnirse';
const url = 'http://localhost:8000/'

const Partido = ({ ciudadPartido, token, zona, misPartidosB }) => {
    const [partidos, setPartidos] = useState([])
    const [usuariosEquipo1, setEquipo1] = useState(0)
    const [usuariosEquipo2, setEquipo2] = useState(0)
    const [misPartidos, setMisPartidos] = useState([])

    const cargarPartido = async () => {
        const respuesta = await axios.get(url + 'api/match/region/' + zona, { headers: { 'Authorization': `Bearer ${token}` } })
        setPartidos(respuesta.data.match)
    }
    const getUsers = async (partido) => {
        const respuesta = await axios.post(url + 'api/match/users', { id: partido.id }, { headers: { 'Authorization': `Bearer ${token}` } })
        setEquipo1(respuesta.data.firstTeam.length)
        setEquipo2(respuesta.data.secondTeam.length)
    }

    useEffect(() => {
        cargarPartido()
    }, [])
    return (
        <>
            {
                partidos.length == 0 ?
                    <div className='partidos-card-partidos'>
                        <h1 className='partidos-card-partidos-no'>No Hay Partidos Disponibles</h1>
                    </div>
                    :
                    ciudadPartido ? partidos.map((partido, key) => {
                        getUsers(partido)
                        return (
                            ciudadPartido == partido.city ?
                                <div key={key} className='partidos-card-partidos'>
                                    <div className='partidos-card-partidos-titulo'>
                                        <h1>{partido.nameMatch}</h1>
                                        <h4>{partido.nameSoccerField}</h4>
                                        <h4>{partido.location}</h4>
                                    </div>
                                    <div className='partidos-card-partidos-equipos'>
                                        <div className='partidos-card-partidos-equipo-izq'>
                                            <h4>{partido.firstTeamName}</h4>
                                            <h4>Jugadores: {partido.numberOfPlayers} (Cupos {partido.numberOfPlayers - usuariosEquipo1})</h4>
                                            <BotonUnirse cupos={partido.numberOfPlayers - usuariosEquipo1} />
                                        </div>
                                        <div className='partidos-card-partidos-equipo-der'>
                                            <h4>{partido.secondTeamName}</h4>
                                            <h4>Jugadores: {partido.numberOfPlayers} (Cupos {partido.numberOfPlayers - usuariosEquipo2})</h4>
                                            <BotonUnirse cupos={partido.numberOfPlayers - usuariosEquipo2} />
                                        </div>
                                    </div>
                                </div>
                                :
                                <></>
                        )
                    })
                        :
                        partidos.map((partido, key) => {
                            getUsers(partido)
                            return (
                                <div key={key} className='partidos-card-partidos'>
                                    <div className='partidos-card-partidos-titulo'>
                                        <h1>{partido.nameMatch}</h1>
                                        <h4>{partido.nameSoccerField}</h4>
                                        <h4>{partido.location}</h4>
                                    </div>
                                    <div className='partidos-card-partidos-equipos'>
                                        <div className='partidos-card-partidos-equipo-izq'>
                                            <h4>{partido.firstTeamName}</h4>
                                            <h4>Jugadores: {partido.numberOfPlayers} (Cupos {partido.numberOfPlayers - usuariosEquipo1})</h4>
                                            <BotonUnirse cupos={partido.numberOfPlayers - usuariosEquipo1} />
                                        </div>
                                        <div className='partidos-card-partidos-equipo-der'>
                                            <h4>{partido.secondTeamName}</h4>
                                            <h4>Jugadores: {partido.numberOfPlayers} (Cupos {partido.numberOfPlayers - usuariosEquipo2})</h4>
                                            <BotonUnirse cupos={partido.numberOfPlayers - usuariosEquipo2} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
            }

        </>
    );
}

export default Partido;