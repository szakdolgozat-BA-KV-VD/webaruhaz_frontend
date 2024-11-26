import React, { createContext, useEffect, useState } from 'react'
import { myAxios } from './MyAxios'

export const APIContext = createContext("")

export const APIProvider = ({children}) => {
    const [lista, setLista] = useState([])
    const [panelBool, setPanelAllapot] = useState(false)
    const [arValue, setAr] = useState(0)
    const [markaValue, setKategoria] = useState('');
    const [tipusValue, setTipus] = useState('');
    const [szinValue, setSzin] = useState('');
    const [fogyasztValue, setFogyaszt] = useState(0);

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
        getAdat("zsautos", setLista)
    }, [])

    return(<APIContext.Provider value={{lista}}>{children}</APIContext.Provider>)
}