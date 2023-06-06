import './App.css';
import './index.css';
import LoginM from './pages/InicioSesionModeradores/loginM';
import LoginScanner from './pages/InicioSesionEmpleadoS/loginScanner';
import LoginEst from './pages/InicioSesionEstadisticas/loginEst';
import Inicial from './pages/PaginaDeInicio/PaginaInicial';
import EventosSU from './pages/EventosSU/EventosSU';
import InfoEventosSU from './pages/InfoEvento/InfoEventoSU';
import EventosEstadisticas from './pages/EventosEstadisticas/EventosEstadisticas';
import Estadistica from './pages/Estadistica/Estadistica';
import AddEvento from './pages/AddEvento/AddEvento';

function App() {
  return (
    <div className="App">
      <AddEvento />
    </div>
  );
}

export default App;