import React, { useContext } from 'react'
import Termek from './Termek';
import { APIContext } from '../../Contexts/APIContext';

function Termekek() {
  const { lista } = useContext(APIContext)
  return (
    <div className='row d-flex justify-content-center align-items-center'>
      {lista.map((elem, index) =>{
        return(<Termek key={index} marka={elem.marka} tipus={elem.tipus} rendszam={elem.rendszam} fogyaszt={elem.fogyaszt} szin={elem.szin} ar={elem.ar}/>)
      })}
    </div>
  )
}

export default Termekek

