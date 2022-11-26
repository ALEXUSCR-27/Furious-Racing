import { React, useState } from 'react';
import pistas from './listaP.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ModalExito from './ModalExito.js';

export default function CreateModule(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const crearPartida = () => {
        let cantidadvueltas = document.getElementById("cantidadvueltas");
        let cantidadjugadores = document.getElementById("cantidadjugadores");
        const objeto = {
            nombre: pistas.Nombre
        }
        //axios.post("https://ee03-201-202-14-140.ngrok.io/estadisticas", "nada")
		//.then(response => { 
        //const datosE = response.data;
        //})
        //.catch(error => console.log(error));

        handleShow();

        cantidadvueltas.value = "";
        cantidadjugadores.value = "";
    }

    return (
        <div className='mainStyle'>
            <ModalExito show={show} handleClose={handleClose}/>
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
                    <label style={{position:"absolute", top:"0px", left:"0px", "font-size":"30px"}}>CANTIDAD DE VUELTAS:</label>
                    <input id = "cantidadvueltas" className='inputC' style={{position:"absolute", top:"3px", left:"255px"}} type="number"></input>
                    <label style={{position:"absolute", top:"60px", left:"0px", "font-size":"30px"}}>CANTIDAD DE JUGADORES:</label>
                    <input id = "cantidadjugadores"className='inputC' style={{position:"absolute", top:"63px", left:"290px"}} type="number"></input>
                </div>
            </div>
            <div className="squareSelectionAux">
                <img style={{position:"relative", top:"20px", left:"395px", width:"250px"}} src='logo2.png'></img>
                <button className="button" style={{left: "50px", top: "20px"}} onClick = {props.setHomeScreen}>ATRÁS</button>
                <button className="button" style={{left: "720px", top: "20px"}} onClick= {()=>crearPartida()}>CREAR PARTIDA</button>
            </div>
        </div>
    )
}