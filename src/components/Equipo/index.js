import "./Equipo.css";
import Colaborador from "../Colaborador";

const Equipo = (props) => {

    const { colorPrimario, colorSecundario, titulo } = props.datos;
    const estiloFondo = { backgroundColor: colorSecundario }
    const estiloTitulo = { borderColor: colorPrimario }

    return <section className="equipo" style={estiloFondo}>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
            <Colaborador/>
            <Colaborador/>
            <Colaborador/>
            <Colaborador/>
        </div>
    </section>
};

export default Equipo;