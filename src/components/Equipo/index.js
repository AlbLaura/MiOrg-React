import "./Equipo.css";
import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {

    const { colorPrimario, colorSecundario, titulo } = props.datos;
    const { colaboradores, eliminarColaborador, actualizarColor } = props;
    const estiloFondo = { backgroundColor: hexToRgba(colorPrimario, 0.4)}
    const estiloTitulo = { borderColor: colorPrimario }

    return <>
    { 
        colaboradores.length > 0 &&
        <section className="equipo" style={estiloFondo}>
            <input
                type="color"
                className="input-color"
                value={colorPrimario}
                onChange={(e) => {
                    actualizarColor(e.target.value, titulo);
                }}
            />
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