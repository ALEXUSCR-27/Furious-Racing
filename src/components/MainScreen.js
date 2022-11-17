import { Component } from "react";
import axios from 'axios';


export default function MainScreen(props) {

    const consultaEstadisticas = () => {

        axios.post("https://8f25-201-202-14-140.ngrok.io/estadisticas", "vacio")
		.then(response => { 
        const datosE = response.data;
        console.log(datosE);
        })
        .catch(error => console.log(error));
        props.setJoinModule(3);
    }


        return (
            <div className="container">
                <div className="titulo"></div>
                <button className="button" onClick = {() => props.setCreateModule(1)} style={{left: "90px", top: "630px"}}>CREAR PARTIDA</button>
                <button className="button" onClick = {() => props.setJoinModule(2)} style={{left: "90px", top: "710px"}}>UNIRSE</button> 
                <button className="button" onClick = {() => consultaEstadisticas()} style={{left: "90px", top: "790px"}}>ESTADISTICAS</button>
            </div>
        )
}

