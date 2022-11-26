import pistas from './listaP.js';
export default function GameTrack(props) {
    return (
        <div>
            <h1 className="VehiculeSelection">SELECCIONE UNA PARTIDA</h1>
            <table id="listaPartidas" className='table2' style={{"border-collapse": "collapse", position:"relative", top:"100px"}}>
                <thead>
                    <tr>
                        <th>Nombre de Jugador</th>
                        <th>Posicion final</th>
                    </tr>
                </thead>
                <tbody>
                {pistas.map((e) =>(
                        <tr className='filaT1'>
                            <td>{e.Nombre}</td>
                            <td>{e.extension}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}