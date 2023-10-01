import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import './App.css';
import Header from './components/Header/Header'; // Llamando/Importando el componente
import Form from './components/Form/Form';
import MiOrg from './components/MiOrg/index';
import Equipo from './components/Equipo';
import Footer from './components/Footer';
/* import Colaborador from './components/Colaborador'; */

function App() {
  const [mostrarFormulario, actualizarMostrar]  = useState(false);
  const [colaboradores, setColaboradores] = useState([{
        id: uuid(),
        nombre: "Laura Albornoz",
        puesto: "Estudiante",
        foto: "https://github.com/alblaura.png",
        equipo: "Front End",
        fav: true
      },
      {
        id: uuid(),
        nombre: "Claudio Duvara",
        puesto: "Estudiante",
        foto: "https://github.com/duvarax.png",
        equipo: "Programación",
        fav: false
      }
  ]);
  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo: 'Programación',
      colorPrimario: '#57C278',
      colorSecundario: '#D9F7E9'
    },
    {
      id: uuid(),
      titulo: 'Front End',
      colorPrimario: '#82CFFA',
      colorSecundario: '#E8F8FF'
    },
    {
      id: uuid(),
      titulo: 'Data Science',
      colorPrimario: '#A6D157',
      colorSecundario: '#F0F8E2'
    },
    {
      id: uuid(),
      titulo: 'Devops',
      colorPrimario: '#E06B69',
      colorSecundario: '#FDE7E8'
    },
    {
      id: uuid(),
      titulo: 'UX y Diseño',
      colorPrimario: '#DB6EBF',
      colorSecundario: '#FAE9F5'
    },
    {
      id: uuid(),
      titulo: 'Móvil',
      colorPrimario: '#FFBA05',
      colorSecundario: '#FFF5D9'
    },
    {
      id: uuid(),
      titulo: 'Innovación y  Gestión',
      colorPrimario: '#FF8A29',
      colorSecundario: '#FFEEDF'
    }
  ]);

  //Ternario -> condicion ? seMuestra : noSeMuestra
  //condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador);
    //Spread operator => ...copia
    setColaboradores([...colaboradores, colaborador]);
  };

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    setColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo
    })
    setEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    setEquipos([...equipos, { ...nuevoEquipo, id: uuid }]) //
  }

  //Dar Me Gusta

  const like = (id) => {
    console.log("Like");
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    setColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header/>

      {/* Formas de representarlo
        { mostrarFormulario === true ? <Form/> : <div></div> }
        { mostrarFormulario ? <Form/> : <></> }
        { mostrarFormulario && <Form/> }
      */}
      { 
        mostrarFormulario && <Form 
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
        /> 
      }
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>

      {/* Recorrer un arreglo */}
      {
        equipos.map((equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaboradores => colaboradores.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          />
        )
      }
      <Footer/>

    </div>
  );
}

export default App;
