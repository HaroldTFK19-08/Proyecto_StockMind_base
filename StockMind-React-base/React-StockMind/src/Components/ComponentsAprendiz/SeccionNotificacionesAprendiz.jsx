import '../../StylesComponents/StylesAprendiz/NotificacionesAprendiz.css'

const SeccionNotificacionesAprendiz = () => {
  return (
    <main className="contenido-principalNotificaciones">
        <div className="contenedor-notificaciones">
        <section className="encabezado-seccion">
            <h1>Centro de Notificaciones</h1>
            <p>Gestiona y revisa los elementos asignados a tu nombre en el ambiente de formación.</p>
        </section>

        <div className="barra-busqueda-container">
            <div className="input-busqueda-wrapper">
                <i className="bi bi-search"></i>
                <input type="text" placeholder="Buscar notificaciones (ej: Computador, Mouse, Instructor...)" id="inputBusqueda"
                />
            </div>
            <button className="boton-filtro">
                <i className="bi bi-sliders"></i>
                <span>Filtros</span>
            </button>
        </div>
        <section className="lista-notificaciones">
            <div className="tarjeta-notificacion nueva">
                <div className="icono-tipo">
                    <i className="bi bi-laptop"></i>
                </div>
                <div className="info-notificacion">
                    <div className="titulo-fila">
                        <h3>Equipo Asignado: PC #10</h3>
                        <span className="etiqueta-nueva">Nuevo</span>
                    </div>
                    <p>El Instructor <strong>Carlos Pérez</strong> te ha asignado el equipo del ambiente 204. Por favor, verifica el estado del hardware al recibirlo.</p>
                    <div className="metadatos">
                        <span><i className="bi bi-calendar3"></i> 22 Abril 2026</span>
                        <span><i className="bi bi-geo-alt"></i> Centro Comercio y Servicios</span>
                    </div>
                </div>
            </div>

            <div className="tarjeta-notificacion">
                <div className="icono-tipo">
                    <i className="bi bi-mouse3"></i>
                </div>
                <div className="info-notificacion">
                    <h3>Periférico Asignado: Mouse Óptico</h3>
                    <p>El instructor <strong>Carlos Pérez</strong> te ha registrado la entrega de un mouse Genius (Numero: SENA-23) ambiente 204, para complementar tu estación de trabajo.</p>
                    <div className="metadatos">
                        <span><i className="bi bi-calendar3"></i> 21 Abril 2026</span>
                        <span><i className="bi bi-geo-alt"></i> Centro Comercio y Servicios</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </main>
  )
}

export default SeccionNotificacionesAprendiz
