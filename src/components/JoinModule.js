import { useState } from "react";
import NameSection from "./NameSection.js";
import VehiculeSection from "./VehiculeSection.js";
import GameTrack from "./GameTrack.js"
export default function JoinModule(props) {
    const [opcionActual, setOpcionActual] = useState(0);
    const [nombre, setNombre] = useState("");

    const cambiarOpcion = (value) => {
        setOpcionActual(value);
        if (document.getElementById("carro1_2.png").onclick(true)) {console.log("si");}
    };

    const guardarNombre = () => {
        setNombre(document.getElementById("inputN").value);
    }

    const setNombreJ = (value) => {
        setNombre(value);
    }

    return (
        <div className="joinModule">
            <div className="squareSelection">
                {
                    opcionActual===0 ?
                    <NameSection
                    /> : opcionActual === 1 ? <VehiculeSection/>
                    : opcionActual === 2 ? <GameTrack/>
                    : <GameTrack/>
                }
            </div>
            <div className="squareSelectionAux">
                <img style={{position:"relative", top:"20px", left:"395px", width:"250px"}} src='logo2.png'></img>
                <button className="button" style={{left: "50px", top: "20px"}} onClick = {props.setHomeScreen}>ATRÁS</button>
                <button className="button" style={{left: "720px", top: "20px"}} onClick = {()=>cambiarOpcion(opcionActual+1)}>SIGUIENTE</button>
            </div>
        </div>
    )
}