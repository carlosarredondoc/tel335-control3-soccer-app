import React, { useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import balon from './../images/balon.png'
import axios from 'axios'
const url = 'http://localhost:8000/'

const SelectorZona = ({ setSelectZona, setSesion, setZona }) => {
    const [regiones, setRegiones] = useState([])
    
    const getRegiones = async () => {
        const respuesta = await axios.get(url + 'api/location/allcities')
        setRegiones(Object.keys(respuesta.data).map((region) => (
            region
        )))
    }

    useEffect(() => {
        getRegiones()
    }, [])
    const handleZona = (e) => {
        setZona(e.target.value)
        setSelectZona(true)
    }
    return (
        <div className='selector-contenedor'>
            <Navbar>
                <button className='selector-navbar-boton' onClick={() => setSesion(false)}><img src={balon} className="selector-navbar-logo-balon" alt='balon' />Cerrar Sesión</button>
            </Navbar>
            <div>
                <img src={balon} className="selector-logo" alt='balon' />
                <select className='form-select form-select-lg selector-select'>
                    <option defaultValue>Zona Mas Cercana</option>
                    {
                        regiones.map((region,key) => (
                            <option key={key} value={region} onClick={(e) => handleZona(e)}>{region}</option>
                        ))
                    }
                </select>
            </div>
        </div>

    );
}

export default SelectorZona;