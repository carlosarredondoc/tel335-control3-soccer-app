import React from 'react';
import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import Partido from './Partido';

const MisPartidos = ({ setMisPartidos }) => {
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
                        <option defaultValue>Comuna</option>
                        <option value={1} >Zona 1</option>
                        <option value={2}>Zona 2</option>
                        <option value={3}>Zona 3</option>
                        <option value={4}>Zona 4</option>
                    </select>
                    <select className='form-select form-select-lg misPartidos-header-filtros' aria-label="">
                        <option defaultValue>Region</option>
                        <option value={1} >Zona 1</option>
                        <option value={2}>Zona 2</option>
                        <option value={3}>Zona 3</option>
                        <option value={4}>Zona 4</option>
                    </select>
                </div>
                <Partido/>
                <Partido/>
            </div>
        </div>
    );
}

export default MisPartidos;