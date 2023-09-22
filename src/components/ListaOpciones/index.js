import './ListaOpciones.css';

const ListaOpciones = () => {
    /*Metodo map -> arreglo.map( (equipo, index) => { 
        return <option></option>
    })
    */
    const equipos = [
        'Programacion',
        'Front End',
        'Data Science',
        'DevOps',
        'UX y Diseño',
        'Móvil',
        'Innovación y Gestión'
    ];

    return <div className="lista-opciones">
        <label>Equipo</label>
        <select>
            { equipos.map((equipo, index) => <option key={index}>{equipo}</option>) };
        </select>
    </div>;
};

export default ListaOpciones;