import { Component } from "react";


export default function MainScreen(props) {
        return (
            <div className="container">
                <div className="titulo">
                </div>
                <button className="button" onClick = {() => props.setCreateModule(1)} style={{left: "90px", top: "630px"}}>CREAR PARTIDA</button>
                <button className="button" onClick = {() => props.setJoinModule(2)} style={{left: "90px", top: "710px"}}>UNIRSE</button> 
                <button className="button" onClick = {() => props.setJoinModule(3)} style={{left: "90px", top: "790px"}}>ESTADISTICAS</button>
            </div>
        )
}