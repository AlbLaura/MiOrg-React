/* import { useState } from "react"; */
import "./MiOrg.css";

const MiOrg = (props) => {
    //Estado -> Hooks
    //useState
    //const [nombreVariable, funcionActualizaVariable] = useState(valorInicial)
    /* const [mostrar, actualizarMostrar] = useState(true);
    const manejarClick = () => {
        console.log("Mostrar/Ocultar elemento", !mostrar);
        actualizarMostrar(!mostrar);
    }; */

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/assets/add.png" alt="add button" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg;