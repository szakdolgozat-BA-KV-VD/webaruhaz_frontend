import React, { createContext, useEffect, useState } from 'react'
import { myAxios } from './MyAxios'

export const APIContext = createContext("")

export const APIProvider = ({ children }) => {
    const [lista, setLista] = useState([])
    const [panelBool, setPanelAllapot] = useState(false)
    const [arValue, setAr] = useState(0)
    const [markaValue, setMarka] = useState('');
    const [tipusValue, setTipus] = useState('');
    const [szinValue, setSzin] = useState('');
    const [fogyasztValue, setFogyaszt] = useState(0);

    function panelAllapotValtoztat() {
        let panelAllapot = [panelBool]
        if (panelAllapot === false) {
            panelAllapot = true
        } else {
            panelAllapot = false
        }
        console.log("Kattintottál rám!")
        setPanelAllapot(panelAllapot)
    }

    function termekHozzaad() {
        let ujLista = lista
        let megadottMarka = markaValue
        let megadottTipus = tipusValue
        let megadottSzin = szinValue
        let megadottFogyasztas = fogyasztValue
        let megadottAr = arValue
        if (megadottAr < 0) {
            setAr(100);
        }
        const ujTermek = {
            marka: megadottMarka,
            tipus: megadottTipus,
            szin: megadottSzin,
            fogyaszt: megadottFogyasztas,
            ar: megadottAr
        }
        
        ujLista.push(ujTermek)
        setLista(ujLista)
        postAdat('/zsautos/add', ujTermek);
    }



    const getAdat = async (vegpont, callback) => {
        try {
            const response = await myAxios.get(vegpont);
            callback(response.data)
            console.log(response.data)
        } catch (err) {
            console.log("Hiba történt az adat küldésekor!", err)
        } finally {
            console.log(":)")
        }

    }

    const postAdat = async (vegpont, adat) => {
        try {
            const response = await myAxios.post(vegpont, adat);
        } catch (err) {
            console.log("Hiba történt az adat küldésekor!", err)
        } finally {
            console.log(":)")
        }

    }

    useEffect(() => {
        getAdat("zsautos", setLista)
    }, [])

    return (<APIContext.Provider value={{ lista, setAr, setMarka, setTipus, setSzin, setFogyaszt, panelAllapotValtoztat, termekHozzaad }}>{children}</APIContext.Provider>)
}