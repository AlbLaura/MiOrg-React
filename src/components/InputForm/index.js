/* import { useState } from "react"; */
import "./InputForm.css";

const InputForm = (props) => { // props = datos externos
    /* const [valor, setValor] = useState(""); */
    const placeholderModificado = `${props.placeholder}...`;

    //Destructuracion
    const { type = "text" } = props;

    const manejarCambio = (e) => {
        props.setValor(e.target.value);
    };

    return <div className={'input'}>
        <label>{ props.titulo }</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        /> {/*value="" | Sirve para controlar el input*/}
    </div>;
}

export default InputForm;