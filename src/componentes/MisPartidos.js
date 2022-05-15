import React, { useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import Partido from './Partido';
import axios from 'axios'
const url = 'http://localhost:8000/'

const MisPartidos = ({ setMisPartidos, token }) => {
    const [regiones, setRegiones] = useState([])
    const [ciudades, setCiudades] = useState([])
    const [region, setRegion] = useState('')
    const [data, setData] = useState()
    const [partidos, setPartidos] = useState([])
    const [usuariosEquipo1, setEquipo1] = useState(0)
    const [usuariosEquipo2, setEquipo2] = useState(0)

    const cargarLocaciones = async () => {
        const respuesta = await axios.get(url + 'api/location/allcities')
        setRegiones(Object.keys(respuesta.data).map((region) => (
            region
        )))
        const respuesta2 = await axios.get(url + 'api/match/user', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        setPartidos([...respuesta2.data.owner_matchs, ...respuesta2.data.other_matchs])
        setData(respuesta.data)
    }
    const getUsers = async (partido) => {
        const respuesta = await axios.post(url + 'api/match/users', { id: partido.id }, { headers: { 'Authorization': `Bearer ${token}` } })
        setEquipo1(respuesta.data.firstTeam.length)
        setEquipo2(respuesta.data.secondTeam.length)
    }
    useEffect(() => { console.log(partidos) }, [partidos])
    useEffect(() => {
        cargarLocaciones()
    }, [])
    useEffect(() => {
        for (let key in data) {
            if (key === region) {
                setCiudades(data[key])
            }
        }
    }, [region])

    return (
        <div className='partidos-contenedor'>
            <Navbar className='partidos-navbar'>
                <div className='partidos-nav-izq'>
                    <button className='partidos-nav-volver' onClick={() => setMisPartidos(false)}><FontAwesomeIcon icon={faCaretLeft} className='partidos-nav-icon' /></button>
                </div>
                <div className='partidos-nav-der'>
                    <label className='misPartidos-nav'>Mis Partidos</label>
                </div>
            </Navbar>
            <div className='partidos-card'>
                <div className='misPartidos-header'>
                    <h1 className='misPartidos-header-titulo'>Partidos en </h1>
                    <select className='form-select form-select-lg misPartidos-header-filtros' aria-label="">
                        {
                            region ?
                                <>
                                    <option defaultValue>Ciudad</option>
                                    {
                                        ciudades.map((ciudad, key) => (
                                            <option key={key} value={ciudad}>{ciudad}</option>
                                        ))
                                    }
                                </>
                                :
                                <option defaultValue>---</option>
                        }

                    </select>
                    <select className='form-select form-select-lg misPartidos-header-filtros' aria-label="">
                        <option value={''} defaultValue onClick={(e) => setRegion(e.target.value)}>Region</option>
                        {
                            regiones.map((region, key) => (
                                <option key={key} value={region} onClick={(e) => setRegion(e.target.value)}>{region}</option>
                            ))
                        }
                    </select>
                </div>
                <>
                    {
                        partidos.length == 0 ?
                            <div className='partidos-card-partidos'>
                                <h1 className='partidos-card-partidos-no'>No Hay Partidos Disponibles</h1>
                            </div>
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
                                            </div>
                                            <div className='partidos-card-partidos-equipo-der'>
                                                <h4>{partido.secondTeamName}</h4>
                                                <h4>Jugadores: {partido.numberOfPlayers} (Cupos {partido.numberOfPlayers - usuariosEquipo2})</h4>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                    }

                </>
            </div>
        </div>
    );
}

export default MisPartidos;