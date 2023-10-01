import "./Colaborador.css";
import { AiFillCloseCircle } from "react-icons/ai";

const Colaborador = (props) => {
    const { nombre, puesto, foto } = props.datos;
    const { fondo, eliminarColaborador } = props
    return <div className="colaborador">
        <AiFillCloseCircle onClick={eliminarColaborador} className="eliminar"/>
        <div className="encabezado" style={{backgroundColor: fondo}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
};

export default Colaborador;