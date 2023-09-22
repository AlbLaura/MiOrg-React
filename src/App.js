import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header'; // Llamando/Importando el componente
import Form from './components/Form/Form';
import MiOrg from './components/MiOrg/index';

function App() {
  const [mostrarFormulario, actualizarMostrar]  = useState(true);

  //Ternario -> condicion ? seMuestra : noSeMuestra
  //condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  return (
    <div>
      <Header/>
      {/* Formas de representarlo
        { mostrarFormulario === true ? <Form/> : <div></div> }
        { mostrarFormulario ? <Form/> : <></> }
        { mostrarFormulario && <Form/> }
      */}
      { mostrarFormulario === true ? <Form/> : <div></div> }
      <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;
