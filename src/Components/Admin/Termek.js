import React, { useContext } from 'react'
import { APIContext } from '../../Contexts/APIContext'

function Termek(props) {
  let {termekTorol} = useContext(APIContext);

  return (
    <tbody>
        <tr>
            <td>{props.elem.rendszam}</td>
            <td>{props.elem.marka}</td>
            <td>{props.elem.tipus}</td>
            <td>{props.elem.szin}</td>
            <td>{props.elem.fogyaszt}</td>
            <td>{props.elem.ar}</td>
            <td><button>✏️</button></td>
            <td><button onClick={termekTorol}>🗑️</button></td>
        </tr>
    </tbody>
  )
}

export default Termek