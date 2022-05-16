import React, { useEffect, useState } from 'react';
import axios from 'axios'
import BotonUnirse from './BotonUnirse';
const url = 'http://localhost:8000/'

const Equipo = ({ partido, token, misPartidos }) => {
    const [usuariosEquipo1, setEquipo1] = useState(0)
    const [usuariosEquipo2, setEquipo2] = useState(0)
    const [pertenecerPartido, setPertenecer] = useState(false)

    const checkUser = async () => {
        const respuesta = await axios.post(url + 'api/match/user/checkexist', { id: partido.id }, { headers: { 'Authorization': `Bearer ${token}` } })
        setPertenecer(respuesta.data.exist)
    }

    const getUsers = async () => {
        const respuesta = await axios.post(url + 'api/match/users', { id: partido.id }, { headers: { 'Authorization': `Bearer ${token}` } })
        setEquipo1(respuesta.data.firstTeam.length)
        setEquipo2(respuesta.data.secondTeam.length)
    }
    useEffect(() => {
        getUsers()
        checkUser()
    }, [])
    return (
        misPartidos ?
            <div className='partidos-card-partidos-equipos'>
                <div className='partidos-card-partidos-equipo-izq'>
                    <h4>{partido.firstTeamName}</h4>
                    <h4>Jugadores: {partido.numberOfPlayers} (Cupos {partido.numberOfPlayers - usuariosEquipo1})</h4>
                </div>
                <div className='partidos-card-partidos-equipo-der'>
                    <h4>{partido.secondTeamName}</h4>
                    <h4>Jugadores: {partido.numberOfPlayers} (Cupos {partido.numberOfPlayers - usuariosEquipo2})</h4>
                </div>
            </div>
            :
            <div className='partidos-card-partidos-equipos'>
                <div className='partidos-card-partidos-equipo-izq'>
                    <h4>{partido.firstTeamName}</h4>
                    <h4>Jugadores: {partido.numberOfPlayers} (Cupos {partido.numberOfPlayers - usuariosEquipo1})</h4>
                    <BotonUnirse checkUser={checkUser} pertenecer={pertenecerPartido} usuariosEquipo1={usuariosEquipo1} setEquipo1={setEquipo1} id={partido.id} token={token} equipo={1} cupos={partido.numberOfPlayers - usuariosEquipo1} />
                </div>
                <div className='partidos-card-partidos-equipo-der'>
                    <h4>{partido.secondTeamName}</h4>
                    <h4>Jugadores: {partido.numberOfPlayers} (Cupos {partido.numberOfPlayers - usuariosEquipo2})</h4>
                    <BotonUnirse checkUser={checkUser} pertenecer={pertenecerPartido} usuariosEquipo2={usuariosEquipo2} setEquipo2={setEquipo2} id={partido.id} token={token} equipo={2} cupos={partido.numberOfPlayers - usuariosEquipo2} />
                </div>
            </div>
    );
}

export default Equipo;