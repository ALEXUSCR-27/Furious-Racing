import MainScreen from './components/MainScreen.js'
import CreateModule from './components/CreateModule.js';
import { useState } from 'react';
import { getValue } from '@testing-library/user-event/dist/utils/index.js';
import JoinModule from './components/JoinModule.js';
import StatisticsModule from './components/StatisticsModule.js';


function App() {

    //variables de estado

    //variable para cambiar entre los modulos
    //(0:Modulo principal - 1:Modulo de crear partida - 2:Modulo de unirse a partida)
    const [moduloActual, setmoduloActual] = useState(0) //variable para cambiar entre los modulos
    const [lista1, setLista1] = useState([])
    const obtenerLista = lista1;

        const cambiarModulo = (value) => {
            setmoduloActual(value);
        };

        const home = () => {
            setmoduloActual(0);
        };

        const llenarLista = (value) => {
            setLista1(value);
        };

        return (
            <div>
                {moduloActual === 0 ?
                    <MainScreen
                        setCreateModule={cambiarModulo}
                        setJoinModule={cambiarModulo}
                        setViewStatistics={cambiarModulo}
                        setLista={llenarLista} 
                        /> : moduloActual === 1 ?
                        <CreateModule
                            setHomeScreen={home} />
                        : moduloActual === 2 ?
                            <JoinModule 
                                setHomeScreen={home}
                            />
                            : <StatisticsModule
                                setHomeScreen={home}
                                setLista={llenarLista}
                                obtenerResultados = {obtenerLista}
                                 />}
            </div>
        );
    }


export default App;
