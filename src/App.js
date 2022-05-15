import React, { useState } from 'react';
import ListaPartidos from './componentes/ListaPartidos';
import Login from './componentes/Login';
import SelectorZona from './componentes/SelectorZona';

const App = () => {
  const [sesion, setSesion] = useState(true)
  const [selectZona, setSelectZona] = useState(true)
  return (
    <>
      {
        sesion ?
          selectZona ?
            <ListaPartidos setSelectZona={setSelectZona} />
            :
            <SelectorZona setSelectZona={setSelectZona} setSesion={setSesion} />
          :
          <Login setSesion={setSesion} />
      }
    </>
  );
}

export default App;