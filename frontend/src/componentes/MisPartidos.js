import React, { useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import Equipo from './Equipo';
const url = 'http://localhost:8000/'

const MisPartidos = ({ setMisPartidos, token }) => {
    const [partidos, setPartidos] = useState([])

    const cargarLocaciones = async () => {
        const respuesta = await axios.get(url + 'api/match/user', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        setPartidos([...respuesta.data.owner_matchs, ...respuesta.data.other_matchs])
    }
    useEffect(() => {
        cargarLocaciones()
    }, [])


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
                    <h1 className='misPartidos-header-titulo'>Partidos</h1>
                </div>
                <>
                    {
                        partidos.length === 0 ?
                            <div className='partidos-card-partidos'>
                                <h1 className='partidos-card-partidos-no'>No Hay Partidos Disponibles</h1>
                            </div>
                            :
                            partidos.map((partido, key) => {
                                return (
                                    <div key={key} className='misPartidos-card-partidos'>
                                        <div className='partidos-card-partidos-titulo'>
                                            <h1>{partido.nameMatch}</h1>
                                            <h4>{partido.nameSoccerField}</h4>
                                            <h4>{partido.location} - {partido.city}</h4>
                                            <h4>{partido.region}</h4>
                                        </div>
                                        <div className='misPartidos-card-partidos-equipos'>
                                            <Equipo misPartidos={true} partido={partido} token={token} />
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