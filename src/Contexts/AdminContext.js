import React, { createContext, useState } from 'react'
import { AdminList } from '../Components/Admin/AdminIDGList'

export const AdminContext = createContext("")

export const AdminProvider = ({children}) => {
    const [lista, setLista] = useState(AdminList)
    console.log(lista)
    return(<AdminContext.Provider value={{lista}}>{children}</AdminContext.Provider>)
}