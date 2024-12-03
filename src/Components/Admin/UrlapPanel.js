import { useContext } from "react";
import { APIContext } from "../../Contexts/APIContext";

export function UrlapPanel() {

    let {
        setMarka,
        setTipus,
        setSzin,
        setFogyaszt,
        setAr,
        termekHozzaad
    } = useContext(APIContext)

    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <div data-bs-theme="dark">
                    <div className="form-control">
                        <div>
                            <h3>Termék felviteli panel</h3><br/>
                        </div>
                        <div>
                            <label htmlFor="marka">Márka</label>
                            <input className="form-control form-control-sm" type="text" placeholder="márka" onChange={(e) => setMarka(e.target.value)} />
                            <label htmlFor="tipus">Típus</label>
                            <input className="form-control form-control-sm" type="text" placeholder="típus" onChange={(e) => setTipus(e.target.value)} />
                            <label htmlFor="szin">Szín</label>
                            <input className="form-control form-control-sm" type="text" placeholder="szín" onChange={(e) => setSzin(e.target.value)} />
                            <label htmlFor="fogyaszt">Fogyasztás</label>
                            <input className="form-control form-control-sm" type="number" placeholder="Fogyasztás 100 kilométeren" onChange={(e) => setFogyaszt(e.target.value)} />
                            <label htmlFor="ar">Ár</label>
                            <input className="form-control form-control-sm" type="number" placeholder="Ár" onChange={(e) => setAr(e.target.value)} /><br/>
                            <button onClick={termekHozzaad} className="btn btn-success">Termék hozzáadása</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}