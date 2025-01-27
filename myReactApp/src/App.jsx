// import PersonalizedGreeting from "./components/PersonalizedGreeting";
// import Greeting from "./components/Greeting";
// import Profile from "./components/Profile";
// import List from "./components/List.jsx";
import Alerta from './components/Alerta';
import './styles/App.css'

function App() {
  // const tareas = ['Sacar al perro', 'Lavar los platos', 'Jugar al padel', 'Tomarse una cerveza'];

  return (
    <div>
      <h1>ESTO ES APP</h1>
      {/* <Greeting/>
      <PersonalizedGreeting/>
      <Profile nombre="Juan" nombreUser="Juanito" email="juan@juan.com" edad={22}/> */}
      {/* <h2>Mi lista de tareas</h2>
      <List tasks={tareas}/> */}
      <Alerta mensaje="Error al cargar el componente" tipo="error"/>
      <Alerta mensaje="Éxito al cargar el componente" tipo="success"/>
      <Alerta mensaje="El componente no se ha cargado correctamente" tipo="warning"/>
    </div>
  );
}

export default App;
