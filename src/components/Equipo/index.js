import "./Equipo.css";
import Colaborador from "../Colaborador";

const Equipo = (props) => {

    const { colorPrimario, colorSecundario, titulo } = props.datos;
    const { colaboradores, eliminarColaborador } = props;
    const estiloFondo = { backgroundColor: colorSecundario }
    const estiloTitulo = { borderColor: colorPrimario }

    console.log(colaboradores.length > 0);

    return <>
    { 
        colaboradores.length > 0 &&
        <section className="equipo" style={estiloFondo}>
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
                { 
                    colaboradores.map( (colaborador, index) => <Colaborador 
                        datos={colaborador} 
                        key={index} 
                        fondo={colorPrimario}
                        eliminarColaborador={eliminarColaborador} 
                    />) 
                }
            </div>
        </section>
    }
    </>
};

export default Equipo;