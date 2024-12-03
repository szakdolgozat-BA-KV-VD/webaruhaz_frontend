import { createContext, useState } from "react";

export const KosarContext=createContext("");

export const KosarProvider=({children})=>{
    const [kosarLista, setkosarLista] = useState([])
    
    function kosarba(props){
        if(!kosarLista.includes(props)){
            const slista=[...kosarLista]
            slista.push(props)
            setkosarLista([...slista])
        }
    }

    function kosarbolEltavolit(props) {
        const ujKosarLista = kosarLista.filter(termek => 
          termek.marka !== props.marka || termek.tipus !== props.tipus || termek.szin !== props.szin || termek.ar !== props.ar
        );
        setkosarLista(ujKosarLista);
      }

    return(
        <KosarContext.Provider value={{kosarLista, kosarba, kosarbolEltavolit}}>
            {children}
        </KosarContext.Provider>
    );
};