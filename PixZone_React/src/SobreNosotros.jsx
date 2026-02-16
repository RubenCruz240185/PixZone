import { useState, useEffect } from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import "./Contenido.css"
import "./SobreNosotros.css"

function SobreNosotros() {
    const [ubicacion, setUbicacion] = useState(() => {
        const ubicaciones = [
            { lat: -13.1631, lng: -72.5450, nombre: "Machu Picchu, Perú" },
            { lat: 64.8, lng: -15.0, nombre: "Aurora Boreal, Islandia" },
            { lat: -2.5, lng: 34.8, nombre: "Serengeti, Tanzania" },
            { lat: 36.4, lng: 25.4, nombre: "Santorini, Grecia" },
            { lat: 4.17, lng: 73.51, nombre: "Maldivas" },
            { lat: -44.67, lng: 168.0, nombre: "Milford Sound, Nueva Zelanda" },
            { lat: 35.36, lng: 138.73, nombre: "Monte Fuji, Japón" },
            { lat: 42.64, lng: 18.11, nombre: "Dubrovnik, Croacia" }
        ]
        return ubicaciones[Math.floor(Math.random() * ubicaciones.length)]
    })

    const mapContainerStyle = {
        width: "100%",
        height: "400px",
        borderRadius: "8px"
    }

    return (
        <>
            <section className="hero">
                <h2>Sobre PixZone</h2>
                <p>Conoce nuestra misión, valores y el equipo detrás de esta plataforma de fotografía.</p>
            </section>
            <section className="sobre-content">
                <div className="texto-sobre">
                    <p>PixZone fue fundada con la visión de crear una comunidad global donde fotógrafos de todos los niveles pueden colaborar, aprender y compartir su arte. Creemos que cada imagen tiene el poder de inspirar, conectar y transformar el mundo.</p>
                </div>
                <div className="mapa-container">
                    <h3>Ubicación Aleatoria Destacada</h3>
                    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                        <GoogleMap
                            mapContainerStyle={mapContainerStyle}
                            center={ubicacion}
                            zoom={10}
                        >
                            <Marker position={ubicacion} title={ubicacion.nombre} />
                        </GoogleMap>
                    </LoadScript>
                    <p className="ubicacion-nombre">{ubicacion.nombre}</p>
                </div>
            </section>
        </>
    );
}
export default SobreNosotros;

