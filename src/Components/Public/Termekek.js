import React from 'react'
import Termek from './Termek';

function Termekek() {
    const autok = [
        {
          marka: "Toyota",
          tipus: "Corolla",
          rendszam: "ABC-123",
          fogyaszt: 6.5,
          szin: "Fehér",
          ar: 4500000
        },
        {
          marka: "Volkswagen",
          tipus: "Golf",
          rendszam: "DEF-456",
          fogyaszt: 5.8,
          szin: "Fekete",
          ar: 5200000
        },
        {
          marka: "Ford",
          tipus: "Focus",
          rendszam: "GHI-789",
          fogyaszt: 7.2,
          szin: "Kék",
          ar: 3800000
        },
        {
          marka: "BMW",
          tipus: "X5",
          rendszam: "JKL-012",
          fogyaszt: 9.5,
          szin: "Ezüst",
          ar: 12000000
        },
        {
          marka: "Tesla",
          tipus: "Model 3",
          rendszam: "MNO-345",
          fogyaszt: 0,
          szin: "Piros",
          ar: 15000000
        }
      ];
  return (
    <div className='row'>
      {autok.map((elem, index) =>{
        return(<Termek key={index} marka={elem.marka} tipus={elem.tipus} rendszam={elem.rendszam} fogyaszt={elem.fogyaszt} szin={elem.szin} ar={elem.ar}/>)
      })};
    </div>
  )
}

export default Termekek

