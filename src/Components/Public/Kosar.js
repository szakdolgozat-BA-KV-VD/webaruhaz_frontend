import React, { useContext } from 'react';
import KosarTermek from './KosarTermek';
import { KosarContext } from '../../Contexts/KosarContext';

function Kosar() {
  const { kosarLista } = useContext(KosarContext);

  return (
    <div className='row d-flex justify-content-center align-items-center border border-primary'>
      {kosarLista.length === 0 ? (
        <p>A kosár üres.</p>
      ) : (
        kosarLista.map((elem, index) => (
          <KosarTermek 
            key={index} 
            marka={elem.marka} 
            tipus={elem.tipus} 
            szin={elem.szin} 
            ar={elem.ar} 
          />
        ))
      )}
    </div>
  );
}

export default Kosar;