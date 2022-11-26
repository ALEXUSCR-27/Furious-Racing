import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from "react";

const ModalExito = ({show, handleClose}) => {
    return (
    <Modal  backdrop="static" keyboard={false} centered animation={true} show={show} onHide={handleClose}>
        <Modal.Header style={{"font-family": "Anton, sans-serif"}}>
            <Modal.Title>AVISO</Modal.Title>
        </Modal.Header>
        <Modal.Body>SE REGISTRÓ LA PARTIDA DE FORMA EXITOSA</Modal.Body>
        <Modal.Footer>
          <button className='buttonCerrar' onClick={handleClose}>
            CERRAR
          </button>
        </Modal.Footer>
    </Modal>
    );
};

export default ModalExito;