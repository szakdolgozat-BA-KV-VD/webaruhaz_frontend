import React, { useContext } from 'react'
import Termek from './Termek'
import { APIContext } from '../../Contexts/APIContext'
import { Table } from 'react-bootstrap'
import { UrlapPanel } from './UrlapPanel'

export default function Termekek() {
    const { lista } = useContext(APIContext)
    return (
        <>
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