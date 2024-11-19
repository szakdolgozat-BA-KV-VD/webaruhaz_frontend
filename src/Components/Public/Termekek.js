import React from 'react'
import Termek from './Termek';

function Termekek() {
    const autok = [
        {
          "marka": "Toyota",
          "tipus": "Corolla",
          "rendszam": "ABC-123",
          "fogyaszt": 6.5,
          "szin": "Fehér",
          "ar": 4500000
        },
        {
          "marka": "Volkswagen",
          "tipus": "Golf",
          "rendszam": "DEF-456",
          "fogyaszt": 5.8,
          "szin": "Fekete",
          "ar": 5200000
        },
        {
          "marka": "Ford",
          "tipus": "Focus",
          "rendszam": "GHI-789",
          "fogyaszt": 7.2,
          "szin": "Kék",
          "ar": 3800000
        },
        {
          "marka": "BMW",
          "tipus": "X5",
          "rendszam": "JKL-012",
          "fogyaszt": 9.5,
          "szin": "Ezüst",
          "ar": 12000000
        },
        {
          "marka": "Tesla",
          "tipus": "Model 3",
          "rendszam": "MNO-345",
          "fogyaszt": 0,
          "szin": "Piros",
          "ar": 15000000
        },
        {
          "marka": "Audi",
          "tipus": "A4",
          "rendszam": "PQR-678",
          "fogyaszt": 6.9,
          "szin": "Szürke",
          "ar": 7000000
        },
        {
          "marka": "Skoda",
          "tipus": "Octavia",
          "rendszam": "STU-901",
          "fogyaszt": 5.5,
          "szin": "Zöld",
          "ar": 4800000
        },
        {
          "marka": "Mercedes",
          "tipus": "C200",
          "rendszam": "VWX-234",
          "fogyaszt": 8.2,
          "szin": "Fekete",
          "ar": 9500000
        },
        {
          "marka": "Honda",
          "tipus": "Civic",
          "rendszam": "YZA-567",
          "fogyaszt": 5.7,
          "szin": "Fehér",
          "ar": 4300000
        },
        {
          "marka": "Renault",
          "tipus": "Clio",
          "rendszam": "BCD-890",
          "fogyaszt": 5.3,
          "szin": "Sárga",
          "ar": 3200000
        },
        {
          "marka": "Kia",
          "tipus": "Sportage",
          "rendszam": "EFG-123",
          "fogyaszt": 7.8,
          "szin": "Ezüst",
          "ar": 6000000
        },
        {
          "marka": "Hyundai",
          "tipus": "i30",
          "rendszam": "HIJ-456",
          "fogyaszt": 6.1,
          "szin": "Kék",
          "ar": 4700000
        },
        {
          "marka": "Mazda",
          "tipus": "CX-5",
          "rendszam": "KLM-789",
          "fogyaszt": 7.5,
          "szin": "Piros",
          "ar": 8500000
        },
        {
          "marka": "Suzuki",
          "tipus": "Vitara",
          "rendszam": "NOP-012",
          "fogyaszt": 6.2,
          "szin": "Narancs",
          "ar": 4900000
        },
        {
          "marka": "Peugeot",
          "tipus": "3008",
          "rendszam": "QRS-345",
          "fogyaszt": 5.9,
          "szin": "Zöld",
          "ar": 5400000
        },
        {
          "marka": "Nissan",
          "tipus": "Qashqai",
          "rendszam": "TUV-678",
          "fogyaszt": 6.3,
          "szin": "Szürke",
          "ar": 6200000
        },
        {
          "marka": "Opel",
          "tipus": "Astra",
          "rendszam": "WXY-901",
          "fogyaszt": 6.0,
          "szin": "Kék",
          "ar": 4500000
        },
        {
          "marka": "Volvo",
          "tipus": "XC90",
          "rendszam": "ZAB-234",
          "fogyaszt": 8.8,
          "szin": "Fekete",
          "ar": 13000000
        },
        {
          "marka": "Fiat",
          "tipus": "Panda",
          "rendszam": "CDE-567",
          "fogyaszt": 4.9,
          "szin": "Fehér",
          "ar": 2800000
        },
        {
          "marka": "Chevrolet",
          "tipus": "Spark",
          "rendszam": "FGH-890",
          "fogyaszt": 5.1,
          "szin": "Piros",
          "ar": 3000000
        }
      ];
  return (
    <div className='row d-flex justify-content-center align-items-center'>
      {autok.map((elem, index) =>{
        return(<Termek key={index} marka={elem.marka} tipus={elem.tipus} rendszam={elem.rendszam} fogyaszt={elem.fogyaszt} szin={elem.szin} ar={elem.ar}/>)
      })}
    </div>
  )
}

export default Termekek

