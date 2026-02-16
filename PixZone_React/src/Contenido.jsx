import "./Contenido.css"
import Inicio from "./Inicio"
import Galeria from "./Galeria"
import Productos from "./Productos"
import SobreNosotros from "./SobreNosotros"

function Contenido({ seccion }) {
    const renderizarSeccion = () => {
        switch(seccion) {
            case "galeria":
                return <Galeria />
            case "productos":
                return <Productos />
            case "sobre":
                return <SobreNosotros />
            case "inicio":
            default:
                return <Inicio />
        }
    }

    return (
        <main className="contenido">
            <div className="container">
                {renderizarSeccion()}
            </div>
        </main>
    );
}
export default Contenido;