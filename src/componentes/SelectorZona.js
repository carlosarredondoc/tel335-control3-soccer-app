import React from 'react';
import { Navbar } from 'react-bootstrap';
import balon from './../images/balon.png'

const SelectorZona = ({ setSelectZona, setSesion }) => {
    return (
        <div className='selector-contenedor'>
            <Navbar>
                <button className='selector-navbar-boton' onClick={() => setSesion(false)}><img src={balon} className="selector-navbar-logo-balon" alt='balon' />Cerrar Sesión</button>
            </Navbar>
            <img src={balon} className="selector-logo" alt='balon' />
            <div className='selector-select'>
                <select className='form-select form-select-lg' aria-label="">
                    <option defaultValue>Zona Mas Cercana</option>
                    <option value={1} onClick={() => setSelectZona(true)}>Zona 1</option>
                    <option value={2}>Zona 2</option>
                    <option value={3}>Zona 3</option>
                    <option value={4}>Zona 4</option>
                </select>
            </div>
        </div>

    );
}

export default SelectorZona;