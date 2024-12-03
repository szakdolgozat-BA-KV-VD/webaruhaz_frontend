import React, { useContext } from 'react'
import Termekek from '../Components/Admin/Termekek'
import { UrlapPanel } from '../Components/Admin/UrlapPanel'
import { APIContext } from '../Contexts/APIContext'

function Admin() {
    let {panelAllapotValtoztat} = useContext(APIContext)
  return (
    <>
      <main>
        <Termekek/>
        {
        panelAllapotValtoztat && <UrlapPanel/>
        }
      </main>
    </>
  )
}

export default Admin