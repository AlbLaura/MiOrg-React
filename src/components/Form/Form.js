import { useState } from "react";
import "./Form.css";
import InputForm from "../InputForm"; //El archivo al llamarse "index.js" no hace falta nombrarlo en la importacion
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Form = (props) => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");

    const {registrarColaborador, crearEquipo} = props;

    //e = evento = event
    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("Manejar envio");
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
    registrarColaborador(datosAEnviar);
    };

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({titulo, colorPrimario: color});
    }

    //titulo-placeholder ejemplos de Props
    return <section className="form">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <InputForm 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                valor={nombre} 
                setValor={setNombre} 
                required
            /> 
            <InputForm 
                titulo="Puesto" 
                placeholder="Ingresar puesto"
                valor={puesto} 
                setValor={setPuesto} 
                required
            />
            <InputForm 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                valor={foto} 
                setValor={setFoto} 
                required
            />
            <ListaOpciones
                valor={equipo}
                setValor={setEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear colaborador
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <InputForm 
                titulo="Titulo" 
                placeholder="Ingresar titulo" 
                valor={titulo} 
                setValor={setTitulo}
            /> 
            <InputForm 
                titulo="Color" 
                placeholder="Ingresar el color en HEX"
                valor={color} 
                setValor={setColor}
                type="color"
            />
            <Boton>
                Registrar equipo
            </Boton>
        </form>
    </section>;
}

export default Form;