import React, { useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
const url = 'http://localhost:8000/'

const CrearPartido = ({ setCrearPartido, token }) => {
    const [regiones, setRegiones] = useState([])
    const [ciudades, setCiudades] = useState([])
    const [region, setRegion] = useState('')
    const [data, setData] = useState()

    const cargarLocaciones = async () => {
        const respuesta = await axios.get(url + 'api/location/allcities')
        setRegiones(Object.keys(respuesta.data).map((region) => (
            region
        )))
        setData(respuesta.data)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(url + 'api/match', {
            'nameMatch': e.target[0].value,
            'firstTeamName': e.target[1].value,
            'secondTeamName': e.target[2].value,
            'numberOfPlayers': e.target[3].value,
            'nameSoccerField': e.target[4].value,
            'location': e.target[5].value,
            'region': e.target[6].value,
            'city': e.target[7].value
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        setCrearPartido(false)
    };

    useEffect(() => { cargarLocaciones() }, [])
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
                    <button className='partidos-nav-volver' onClick={() => setCrearPartido(false)}><FontAwesomeIcon icon={faCaretLeft} className='partidos-nav-icon' /></button>
                </div>
                <div className='partidos-nav-der'>
                    <label className='crearPartido-nav'>Crear Partido</label>
                </div>
            </Navbar>
            <div className='partidos-card'>
                <form className='crearPartido-formulario' onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <div className='crearPartido-label'>
                            <input
                                type='text'
                                name='nombre_partido'
                                id='nombre_partido'
                                className='crearPartido-input'
                                placeholder='Nombre del partido'
                            />
                        </div>
                        <div className='crearPartido-label'>
                            <input
                                type='text'
                                name='nombre_equipo_1'
                                id='nombre_equipo_1'
                                className='crearPartido-input'
                                placeholder='Nombre del equipo 1'
                            />
                        </div>
                        <div className='crearPartido-label'>
                            <input
                                type='text'
                                name='nombre_equipo_2'
                                id='nombre_equipo_2'
                                className='crearPartido-input'
                                placeholder='Nombre del equipo 2'
                            />
                        </div>
                        <div className='crearPartido-label'>
                            <input
                                type='text'
                                name='cantidad_de_personas_por_equipo'
                                id='cantidad_de_personas_por_equipo'
                                className='crearPartido-input'
                                placeholder='Cantidad de personas por equipo'
                            />
                        </div>
                        <div className='crearPartido-label'>
                            <input
                                type='text'
                                name='nombre_cancha'
                                id='nombre_cancha'
                                className='crearPartido-input'
                                placeholder='Nombre de la Cancha'
                            />
                        </div>
                        <div className='crearPartido-label'>
                            <input
                                type='text'
                                name='nombre_calle'
                                id='nombre_calle'
                                className='crearPartido-input'
                                placeholder='Ubicacion (Calle)'
                            />
                        </div>
                        <div className='crearPartido-label'>
                            <select className='crearPartido-select'>
                                <option value={''} defaultValue onClick={(e) => setRegion(e.target.value)}>Seleccione una Region</option>
                                {
                                    regiones.map((region, key) => (
                                        <option key={key} value={region} onClick={(e) => setRegion(e.target.value)}>{region}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='crearPartido-label'>
                            <select className='crearPartido-select'>
                                {
                                    region ?
                                        <>
                                            <option defaultValue>Seleccione una Ciudad</option>
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
                        </div>
                    </div>
                    <div className='crearPartido-recuadro-boton'>
                        <button className='crearPartido-boton' type='submit'> Crear Partido</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CrearPartido;