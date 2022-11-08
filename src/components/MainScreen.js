import { Component } from "react";


class MainScreen extends Component {
    render() {
        return (
            <div>
                <div className="titulo">
                    <img className="imgTitulo"/>
                </div>
                <button className="button" style={{left: "90px", top: "630px"}}>CREAR PARTIDA</button>
                <button className="button" style={{left: "90px", top: "710px"}}>UNIRSE</button> 
                <button className="button" style={{left: "90px", top: "790px"}}>ESTADISTICAS</button>
            </div>
        );
    }
}

export default MainScreen;