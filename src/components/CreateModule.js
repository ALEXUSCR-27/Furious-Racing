export default function CreateModule(props) {
    return (
        <div className="container">
            <div className="squareSelection"></div>
            <div className="squareSelectionAux">
                <button className="button" style={{left: "50px", top: "20px"}} onClick = {props.setHomeScreen}>ATRÁS</button>
                <button className="button" style={{left: "720px", top: "20px"}}>SIGUIENTE</button>
            </div>
        </div>
    )
}