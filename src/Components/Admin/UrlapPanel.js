import { useContext } from "react";
import { APIContext } from "../../Contexts/APIContext";

export function UrlapPanel() {
    
    let {
        panelAllapotValtoztat, 
        setMarka,
        setTipus,
        setSzin,
        setFogyaszt,
        setAr,
        termekHozzaad
    } = useContext(APIContext)    
    
    return(
        <>
        <div className="urlapPanel">
            <div className="fejlec">
                <p>Termék felviteli panel</p>
                <button onClick={panelAllapotValtoztat}>X</button>
            </div>
            <div className="adatok">
                <label htmlFor="marka">Márka</label>
                <input type="text" placeholder="márka" onChange={(e) => setMarka(e.target.value)} />
                <label htmlFor="tipus">Típus</label>
                <input type="text" placeholder="típus" onChange={(e) => setTipus(e.target.value)} />
                <label htmlFor="szin">Szín</label>
                <input type="text" placeholder="szín" onChange={(e) => setSzin(e.target.value)} />
                <label htmlFor="fogyaszt">Fogyasztás</label>
                <input type="number" placeholder="Fogyasztás 100 kilométeren" onChange={(e) => setFogyaszt(e.target.value)} />
                <label htmlFor="ar">Ár</label>
                <input type="number" placeholder="Ár" onChange={(e) => setAr(e.target.value)} />
                <button onClick={termekHozzaad}>Termék hozzáadása</button>
            </div>
        </div>
    </>

    )
}