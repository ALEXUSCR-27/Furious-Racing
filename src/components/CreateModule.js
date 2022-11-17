import pistas from './listaP.js';
export default function CreateModule(props) {

    return (
        <div className="container">
            <div className="squareSelection">
                <div className='cuadroT3' style={{left: "57px", top: "2px", width: "930px", height: "494px"}}>
                    <table className="table1" style={{"border-collapse": "collapse"}}>
                        <thead >
                            <tr>
                                <th>NOMBRE DE PISTA</th>
                                <th>ID DE PISTA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pistas.map((e) =>(
                                <tr className='filaT1' style={{cursor: "pointer"}} >
                                    <td>{e.Nombre}</td>
                                    <td>{e.extension}</td>
                                </tr>
                            ))}
                        </tbody>
                </table>
                </div>
                <div className='cuadroT3' style={{left:"57px", top:"500px", width: "930px", height: "274px"}}>
                    <label style={{position:"absolute", top:"0px", left:"0px"}}>CANTIDAD DE VUELTAS:</label>
                    <label style={{position:"absolute", top:"60px", left:"0px"}}>CANTIDAD DE JUGADORES:</label>
                </div>
            </div>
            <div className="squareSelectionAux">
                <button className="button" style={{left: "50px", top: "20px"}} onClick = {props.setHomeScreen}>ATRÁS</button>
                <button className="button" style={{left: "720px", top: "20px"}}>SIGUIENTE</button>
            </div>
        </div>
    )
}