import MainScreen from './components/MainScreen.js'
import CreateModule from './components/CreateModule.js';
import { useState } from 'react';
import { getValue } from '@testing-library/user-event/dist/utils/index.js';
import JoinModule from './components/JoinModule.js';

function App() {

    //variables de estado

    //variable para cambiar entre los modulos
    //(0:Modulo principal - 1:Modulo de crear partida - 2:Modulo de unirse a partida)
    const [moduloActual, setmoduloActual] = useState(0) //variable para cambiar entre los modulos

    const cambiarModulo = (value) => {
        setmoduloActual(value)
    }

    const home = () => {
        setmoduloActual(0)
    }

    return (
        <div>
            {
                moduloActual === 0 ? 
                <MainScreen
                    setCreateModule = {cambiarModulo}
                    setJoinModule = {cambiarModulo}
                    setViewStatistics = {cambiarModulo}
                /> : moduloActual === 1 ?
                <CreateModule
                    setHomeScreen = {home}
                />
                :<JoinModule/>
            }
        </div>
    );
}


export default App;
