import React, { createContext, useState } from 'react'
import { AdminList } from '../Components/Admin/AdminIDGList'
import { myAxios } from './MyAxios'

export const AdminContext = createContext("")

export const AdminProvider = ({children}) => {
    const [lista, setLista] = useState(AdminList)
    console.log(lista)

    const getAdat = async (vegpont, callback) => {
        try{
            const response = await myAxios.get(vegpont);
            callback(response.data)
            console.log(response.data)
        }catch(err){
            console.log("Hiba történt az adat küldésekor!", err)
        }finally{
            console.log(":)")
        }
        
    }

    const postAdat = async (vegpont, adat) => {
        try{
            const response = await myAxios.post(vegpont, adat);
            console.log(response.data)
        }catch(err){
            console.log("Hiba történt az adat küldésekor!", err)
        }finally{
            console.log(":)")
        }
        
    }

    useEffect(() => {
        getAdat("/zsautos", setLista)
    }, [])
    return(<AdminContext.Provider value={{lista}}>{children}</AdminContext.Provider>)
}