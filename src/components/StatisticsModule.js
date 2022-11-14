import ej1 from './listaEj1.js'
export default function StatisticsModule(props) {

    const preparaLista  = () => {
    let lista = [];
    lista.push(ej1.IdentificadorPartida);
    lista.push(ej1.NombrePista);
    lista.push(ej1.cantidadJugadores);
    let tabla = document.getElementById("tablaE");
    let cuerpo = document.createElement("tbody");

    lista.forEach(p=> {
        let fila = document.createElement("tr");
        let td = document.createElement("td");
        td.innerText = p[0];
        fila.appendChild(td);
        cuerpo.appendChild(fila);
    })
    lista.appendChild(cuerpo);
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
                                <tr className='filaT1'>
                                    <td style={{padding:"30px"}}>{e.NombrePista}</td>
                                    <td>{e.IdentificadorPartida}</td>
                                    <td>{e.cantidadJugadores}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="squareStatistics1" style={{left: "1100px", top: "20px"}}>

            </div>
            <button className="buttonHome" style={{left: "950px", top: "800px"}} onClick = {props.setHomeScreen}></button>
        </div>
    )
}
