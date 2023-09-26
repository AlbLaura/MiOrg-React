import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header'; // Llamando/Importando el componente
import Form from './components/Form/Form';
import MiOrg from './components/MiOrg/index';
import Equipo from './components/Equipo';

function App() {
  const [mostrarFormulario, actualizarMostrar]  = useState(false);

  //Ternario -> condicion ? seMuestra : noSeMuestra
  //condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  //Lista de equipos
  const equipos = [
      {
        titulo: 'Programación',
        colorPrimario: '#57C278',
        colorSecundario: '#D9F7E9'
      },
      {
        titulo: 'Front End',
        colorPrimario: '#82CFFA',
        colorSecundario: '#E8F8FF'
      },
      {
        titulo: 'Data Science',
        colorPrimario: '#A6D157',
        colorSecundario: '#F0F8E2'
      },
      {
        titulo: 'Devops',
        colorPrimario: '#E06B69',
        colorSecundario: '#FDE7E8'
      },
      {
        titulo: 'UX y Diseño',
        colorPrimario: '#DB6EBF',
        colorSecundario: '#FAE9F5'
      },
      {
        titulo: 'Móvil',
        colorPrimario: '#FFBA05',
        colorSecundario: '#FFF5D9'
      },
      {
        titulo: 'Innovación y  Gestión',
        colorPrimario: '#FF8A29',
        colorSecundario: '#FFEEDF'
      }
    ];

  return (
    <div>
      <Header/>

      {/* Formas de representarlo
        { mostrarFormulario === true ? <Form/> : <div></div> }
        { mostrarFormulario ? <Form/> : <></> }
        { mostrarFormulario && <Form/> }
      */}
      { mostrarFormulario && <Form equipos={equipos.map((data) => data.titulo)}/> }
      <MiOrg cambiarMostrar={cambiarMostrar}/>

      {/* Recorrer un arreglo */}
      {
        equipos.map((data) => <Equipo datos={data} key={data.titulo}/>)
      }
    </div>
  );
}

export default App;
