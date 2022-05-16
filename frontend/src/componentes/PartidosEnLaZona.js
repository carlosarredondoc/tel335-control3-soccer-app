import React, { useEffect, useState } from 'react';
import Partido from './Partido';
import axios from 'axios'
const url = 'http://localhost:8000/'

const PartidosEnLaZona = ({ zona, token }) => {
    const [ciudades, setCiudades] = useState([])
    const [ciudadPartido, setCiudadPartido] = useState('')

    const cargarCiudades = async () => {
        const respuesta = await axios.get(url + 'api/location/allcities')
        for (let key in respuesta.data) {
            if (key === zona) {
                setCiudades(respuesta.data[key])
            }
        }
    }
    useEffect(() => {
        cargarCiudades()
    }, [])
    return (
        <>
            <div className='partidos-card-header'>
                <div className='partidos-card-header-titulo'>
                    <h1>Partidos en {zona}</h1>
                </div>
                <div className='partidos-card-header-filtro'>
                    <select className='form-select form-select-lg partidos-card-header-filtro-select' aria-label="">
                        <option key={-1} defaultValue value={''} onClick={(e) => setCiudadPartido(e.target.value)}>Todas las Ciudades</option>
                        {
                            ciudades.map((ciudad, key) => (
                                <option key={key} value={ciudad} onClick={(e) => setCiudadPartido(e.target.value)}>{ciudad}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <Partido token={token} zona={zona} ciudadPartido={ciudadPartido} />
        </>
    );
}

export default PartidosEnLaZona;