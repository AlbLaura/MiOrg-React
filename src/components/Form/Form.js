import { useState } from "react";
import "./Form.css";
import InputForm from "../InputForm"; //El archivo al llamarse "index.js" no hace falta nombrarlo en la importacion
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Form = () => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

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
    console.log(datosAEnviar);
    };
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
            />
            <Boton>
                Crear colaborador
            </Boton>
        </form>
    </section>;
}

export default Form;