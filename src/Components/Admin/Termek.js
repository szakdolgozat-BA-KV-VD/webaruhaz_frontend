import React from 'react'

function Termek(props) {
  return (
    <tbody>
        <tr>
            <td>{props.elem.rendszam}</td>
            <td>{props.elem.marka}</td>
            <td>{props.elem.tipus}</td>
            <td>{props.elem.szin}</td>
            <td>{props.elem.fogyaszt}</td>
            <td>{props.elem.ar}</td>
            <button>✏️</button>
            <button>🗑️</button>

        </tr>
    </tbody>
  )
}

export default Termek