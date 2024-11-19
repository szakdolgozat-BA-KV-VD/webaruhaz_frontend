import React, { useContext } from 'react'
import Termek from './Termek'
import { AdminContext } from '../../Contexts/AdminContext'
import { Table } from 'react-bootstrap'

export default function Termekek() {
    const { lista } = useContext(AdminContext)
    console.log(lista)
    return (
            <Table striped bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th>rendszam</th>
                        <th>marka</th>
                        <th>tipus</th>
                        <th>szin</th>
                        <th>fogyaszt</th>
                        <th>ar</th>
                    </tr>
                </thead>
                {
                    lista.map((elem, index) => {
                        return (<Termek elem={elem} key={index} index={index} />)
                    })
                }

            </Table>
    )
}