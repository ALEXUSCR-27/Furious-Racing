export default function StatisticsModule(props) {
    return (
        <div className="container">
            <div className="squareSelection"></div>
            <div className="squareSelectionAux">
                <button className="button" style={{left: "50px", top: "20px"}} onClick = {props.setHomeScreen}>ATRÁS</button>
            </div>
        </div>
    )
}