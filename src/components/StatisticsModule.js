import ej1 from './listaEj1.js';
import deta from './detallesL.js';
export default function StatisticsModule(props) {


    const mostrarDetalles = (id) => {
        console.log("me cago en su maire");
        //pido los datos de la partida por el id
        let labelNP = document.getElementById("labelNP");
        let labelID = document.getElementById("labelID");
        let labelJG = document.getElementById("labelJG");
        let labelN = document.getElementById("labelN");
        let labelT = document.getElementById("labelT");
        let labelNV = document.getElementById("labelNV");
        let listaJ = document.getElementById("listaJ");

        let NP = document.getElementById("NP");
        let ID = document.getElementById("ID");
        let N = document.getElementById("N");
        let T = document.getElementById("T");
        let NV = document.getElementById("NV");

        labelNP.removeAttribute("hidden");
        labelID.removeAttribute("hidden");
        labelJG.removeAttribute("hidden");
        labelT.removeAttribute("hidden");
        labelN.removeAttribute("hidden");
        labelNV.removeAttribute("hidden");
        listaJ.removeAttribute("hidden");

        NP.innerHTML = deta.NombrePista; 
        ID.innerHTML = deta.IDPartida;
        N.innerHTML = deta.JGanador;
        T.innerHTML = deta.Tiempo;
        NV.innerHTML = deta.NVueltas;
        //agregar el mapeo de la lista de jugadores labelT

        
    } 

    return (
        <div className="container">
            <div className="squareStatistics1" style={{left: "200px", top: "20px"}}>
                <div className="cuadroT">
                    <table className="table1" style={{"border-collapse": "collapse"}}>
                        <thead >
                            <tr>
                                <th>NOMBRE DE PISTA</th>
                                <th>ID DE PISTA</th>
                                <th>CANTIDAD DE JUGADORES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ej1.map((e) =>(
                                <tr className='filaT1' style={{cursor: "pointer"}} onClick={() => mostrarDetalles(e.IdentificadorPartida)}>
                                    <td>{e.NombrePista}</td>
                                    <td>{e.IdentificadorPartida}</td>
                                    <td>{e.cantidadJugadores}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="squareStatistics1" style={{left: "1100px", top: "20px"}}>
                <div className='cuadroT2'>
                    <table id="listaJ" hidden={true} className='table2' style={{"border-collapse": "collapse"}}>
                        <thead>
                            <tr>
                                <th>Nombre de Jugador</th>
                                <th>Posicion final</th>
                            </tr>
                        </thead>
                        <tbody>
                        {ej1.map((e) =>(
                                <tr className='filaT1'>
                                    <td>{e.NombrePista}</td>
                                    <td>{e.IdentificadorPartida}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='cuadroE'>
                    <label id="labelNP"  hidden={true} style={{position:"absolute", top:"20px"}}>NOMBRE DE PISTA:</label>
                    <label id ="NP" style={{position:"absolute", top:"20px", left:"180px"}}></label>

                    <label id="labelID" hidden={true} style={{position:"absolute", top:"70px"}}>ID DE PARTIDA:</label>
                    <label id ="ID" style={{position:"absolute", top:"70px", left:"145px"}}></label>

                    <label id="labelJG" hidden={true} style={{position:"absolute", top:"150px"}}>JUGADOR GANADOR</label>
                    <label id="labelN" hidden={true} style={{position:"absolute", top:"200px"}}>NOMBRE:</label>
                    <label id ="N" style={{position:"absolute", top:"200px", left:"95px"}}></label>

                    <label id="labelT" hidden={true} style={{position:"absolute", top:"260px"}}>TIEMPO:</label>
                    <label id ="T" style={{position:"absolute", top:"260px", left:"85px"}}></label>

                    <label id="labelNV" hidden={true} style={{position:"absolute", top:"320px"}}>NUMERO DE VUELTAS:</label>
                    <label id ="NV" style={{position:"absolute", top:"320px", left:"205px"}}></label>
                </div>
            </div>
            <button className="buttonHome" style={{left: "950px", top: "830px"}} onClick = {props.setHomeScreen}>ATRÁS</button>
        </div>
    )
}
