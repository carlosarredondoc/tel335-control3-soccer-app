import React from 'react';
import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import balon from './../images/balon.png'

const ListaPartidos = ({ setSelectZona }) => {
    return (
        <div className='partidos-contenedor'>
            <Navbar className='partidos-navbar'>
                <div className='partidos-nav-izq'>
                    <button className='partidos-nav-volver' onClick={() => setSelectZona(false)}><FontAwesomeIcon icon={faCaretLeft} className='partidos-nav-icon' /></button>
                </div>
                <div className='partidos-nav-der'>
                    <button className='partidos-nav-mios'>Mis Partidos</button>
                    <button className='partidos-nav-crear' ><img src={balon} className="partidos-nav-crear-icon" alt='balon' />Crear Partido</button>
                </div>
            </Navbar>
            <div className='partidos-card'>
                <div className='partidos-card-header'>
                    <div className='partidos-card-header-titulo'>
                        <h1>Partidos en la V Region</h1>
                    </div>
                    <div className='partidos-card-header-filtro'>
                        <select className='form-select form-select-lg' aria-label="">
                            <option defaultValue>Todas las Ciudades</option>
                            <option value={1} onClick={() => setSelectZona(true)}>Zona 1</option>
                            <option value={2}>Zona 2</option>
                            <option value={3}>Zona 3</option>
                            <option value={4}>Zona 4</option>
                        </select>
                    </div>
                </div>
                <div className='partidos-card-partidos'>
                    <div className='partidos-card-partidos-titulo'>
                        <h1>Partido E12</h1>
                        <h4>Cancha</h4>
                        <h4>Direccion</h4>
                    </div>
                    <div className='partidos-card-partidos-equipos'>
                        <div className='partidos-card-partidos-equipo-izq'>
                            <h4>Equipo 1</h4>
                            <h4>Jugadores: 11 (Cupos 6)</h4>
                            <button className='partidos-card-partidos-boton'>Quiero Jugar</button>
                        </div>
                        <div className='partidos-card-partidos-equipo-der'>
                            <h4>Equipo 2</h4>
                            <h4>Jugadores: 11 (Cupos 4)</h4>
                            <button className='partidos-card-partidos-boton'>Quiero Jugar</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ListaPartidos;