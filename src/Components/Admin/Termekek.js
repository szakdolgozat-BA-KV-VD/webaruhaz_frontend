import React, { useContext } from 'react'
import Termek from './Termek'
import { AdminContext } from '../../Contexts/AdminContext'
import { Table } from 'react-bootstrap'

export default function Termekek() {
    const { lista } = useContext(AdminContext)
    console.log(lista)
    return (
        <>
            <button>Felvisz</button>
            <Table striped bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th>Rendszám</th>
                        <th>Márka</th>
                        <th>Tipus</th>
                        <th>Szin</th>
                        <th>Fogyasztás (l/100km)</th>
                        <th>Ár</th>
                        <th>Módosít</th>
                        <th>Eltávolít</th>
                    </tr>
                </thead>
                {
                    lista.map((elem, index) => {
                        return (<Termek elem={elem} key={index} index={index} />)
                    })
                }

            </Table>
        </>

    )
}