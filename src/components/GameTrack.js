import pistas from './listaP.js';
import io from 'socket.io-client';
import { useState } from 'react';
export default function GameTrack(props) {
    const socket = io.connect("http://localhost:4000");
    const [lista, setLista] = useState([]);


    socket.emit('listaPartidas', 'hola');

    socket.on('partidas', (partidas) => {
        setLista(partidas)
        console.log(partidas)
    })

    return (
        <div>
            <h1 className="VehiculeSelection">SELECCIONE UNA PARTIDA</h1>
            <table id="listaPartidas" className='table2' style={{"border-collapse": "collapse", position:"relative", top:"100px"}}>
                <thead>
                    <tr>
                        <th>ID de partida</th>
                        <th>Cantidad de jugadores</th>
                        <th>Cantidad de vueltas</th>
                    </tr>
                </thead>
                <tbody>
                {lista.map((e) =>(
                        <tr className='filaT1'>
                            <td>{e.name}</td>
                            <td>{e.jugadores}</td>
                            <td>{e.vueltas}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}