import "./Form.css";
import InputForm from "../InputForm"; //El archivo al llamarse "index.js" no hace falta nombrarlo en la importacion
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Form = () => {
    //e = evento = event
    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("Manejar envio", e);
    };

    //titulo-placeholder ejemplos de Props
    return <section className="form">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <InputForm titulo="Nombre" placeholder="Ingresar nombre" required/> 
            <InputForm titulo="Puesto" placeholder="Ingresar puesto" required/>
            <InputForm titulo="Foto" placeholder="Ingresar enlace de foto" required/>
            <ListaOpciones/>
            <Boton>
                Crear colaborador
            </Boton>
        </form>
    </section>;
}

export default Form;