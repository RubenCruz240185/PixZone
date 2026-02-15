import "./App.css"
import Encabezado from "./Encabezado"
import Contenido from "./Contenido"
import PieDePagina from "./PieDePagina"

function App() {
  return (
    <div className="App">
      <Encabezado />
      <Contenido />
      <PieDePagina />
    </div>
  );
}
export default App;