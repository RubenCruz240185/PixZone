import { useState } from "react"
import "./App.css"
import Encabezado from "./Encabezado"
import Contenido from "./Contenido"
import PieDePagina from "./PieDePagina"

function App() {
  const [seccionActual, setSeccionActual] = useState("inicio")

  return (
    <div className="App">
      <Encabezado onNavigate={setSeccionActual} />
      <Contenido seccion={seccionActual} />
      <PieDePagina />
    </div>
  );
}
export default App;