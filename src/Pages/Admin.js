import React, { useContext } from 'react'
import Termekek from '../Components/Admin/Termekek'
import { UrlapPanel } from '../Components/Admin/UrlapPanel'
import { APIContext } from '../Contexts/APIContext'

function Admin() {
  const {panelBool, panelAllapotValtoztat} = useContext(APIContext)
  return (
    <>
      <main>
        <button onClick={panelAllapotValtoztat}>Nézetváltás</button>
        {panelBool ? (<UrlapPanel/>) : (<Termekek/>)}
      </main>
    </>
  )
}

export default Admin