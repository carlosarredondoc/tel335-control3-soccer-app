import React from 'react';
import Partido from './Partido';

const PartidosEnLaZona = ({ setSelectZona }) => {
    return (
        <>
            <div className='partidos-card-header'>
                <div className='partidos-card-header-titulo'>
                    <h1>Partidos en la V Region</h1>
                </div>
                <div className='partidos-card-header-filtro'>
                    <select className='form-select form-select-lg partidos-card-header-filtro-select' aria-label="">
                        <option defaultValue>Todas las Ciudades</option>
                        <option value={1} onClick={() => setSelectZona(true)}>Zona 1</option>
                        <option value={2}>Zona 2</option>
                        <option value={3}>Zona 3</option>
                        <option value={4}>Zona 4</option>
                    </select>
                </div>
            </div>
            <Partido />
        </>
    );
}

export default PartidosEnLaZona;