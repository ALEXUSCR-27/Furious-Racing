import { useState } from "react";

export default function VehiculeSection(props) {
    const seleccionarAuto = (value) => {
        props.setVehicule(value);
        props.cambiarO();
    }



    return (
        <div>
            <h1 className="VehiculeSelection">SELECCIONE UN VEHICULO</h1>
            <button id="carro1_2.png" onClick={()=>seleccionarAuto("carro1_2.png")} className="Carro1"></button>
            <button id="carro2_1.png" onClick={()=>seleccionarAuto("carro1_2.png")} className="Carro2"></button>
            <button id="carro3_1.png" onClick={()=>seleccionarAuto("carro1_2.png")} className="Carro3"></button>
            <button id="carro4_1.png" onClick={()=>seleccionarAuto("carro4_1.png")} className="Carro4"></button>
        </div>
    );
}