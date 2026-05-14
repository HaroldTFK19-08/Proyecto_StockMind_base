import '../../StylesComponents/StylesAdmin/NotificacionesAdmin.css'

const SeccionNotificacionesAdmin = () => {
  return (
    <main className="notiadmin-main">
      <section className="notiadmin-contenedor">
        <div className="notiadmin-header">
          <h1>Centro de Notificaciones</h1>
          <p>Mantente al tanto de los últimos cambios y alertas de tu inventario.</p>
        </div>

        <div className="notiadmin-grupo">
          <h3 className="notiadmin-subtitulo">
            <span className="notiadmin-circulo"></span>
            Recientes
          </h3>

          <div className="notiadmin-notificacion notiadmin-danger">
            <div className="notiadmin-icono notiadmin-danger-icon">
              <i className="bi bi-exclamation-triangle"></i>
            </div>
            <div className="notiadmin-contenido">
              <h2>Alerta de Elemento</h2>
              <p>
                El elemento <strong>Monitor Dell UltraSharp 27"</strong>
                en el Centro de Comercio y Servicios ha sufrido una falla.
              </p>
              <button className="notiadmin-button">Revisar Elemento</button>
            </div>
            <span className="notiadmin-hora">Hace 5 min</span>
          </div>

          <div className="notiadmin-notificacion notiadmin-success">
            <div className="notiadmin-icono notiadmin-success-icon">
              <i className="bi bi-arrow-left-right"></i>
            </div>
            <div className="notiadmin-contenido">
              <h2>Traslado de Inventario Completado</h2>
              <p>
                Se han movido 15 unidades de
                <strong>Teclados Mecánicos K-32</strong>
                desde el Almacén General hacia el Centro de Teleinformática.
              </p>
            </div>
            <span className="notiadmin-hora">Hace 2 horas</span>
          </div>
        </div>

        <div className="notiadmin-grupo">
          <h3 className="notiadmin-subtitulo">
            <span className="notiadmin-circulo notiadmin-gris"></span>
            Ayer
          </h3>

          <div className="notiadmin-notificacion notiadmin-success">
            <div className="notiadmin-icono notiadmin-success-icon">
              <i className="bi bi-file-earmark-text"></i>
            </div>
            <div className="notiadmin-contenido">
              <h2>Reporte Mensual Disponible</h2>
              <p>
                El informe detallado de movimientos de inventario de Octubre
                ha sido generado exitosamente.
              </p>
              <button className="notiadmin-button notiadmin-btn-secundario">
                <i className="bi bi-download"></i>
                Descargar PDF
              </button>
            </div>
            <span className="notiadmin-hora">Ayer, 18:30</span>
          </div>

          <div className="notiadmin-notificacion notiadmin-neutral">
            <div className="notiadmin-icono notiadmin-neutral-icon">
              <i className="bi bi-arrow-clockwise"></i>
            </div>
            <div className="notiadmin-contenido">
              <h2>Actualización del Sistema</h2>
              <p>
                Se han aplicado mejoras de seguridad y optimización
                de base de datos en los módulos de Reportes.
              </p>
            </div>
            <span className="notiadmin-hora">Ayer, 09:15</span>
          </div>
        </div>
        <br />
      </section>
    </main>
  )
}

export default SeccionNotificacionesAdmin