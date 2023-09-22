import "./InputForm.css";

const InputForm = (props) => { // props = datos externos
    const placeholderModificado = `${props.placeholder}...`;
    return <div className="input-form">
        <label>{ props.titulo }</label>
        <input placeholder={placeholderModificado} required={props.required}></input>
    </div>;
}

export default InputForm;