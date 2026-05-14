import '../../StylesComponents/Home/SeccionServicios.css'
const SeccionServicios = () => {
  return (
    <>
    <section id="Servicios" className="seccion-servicios">
            <div className="cabecera-servicios">
                    <span className="pricipal-servicios">Nuestros Servicios</span>
                    <h2>Soluciones a tu Medida</h2>
                    <p>Explora las funcionalidades diseñadas específicamente para cada integrante de la comunidad SENA.</p>
                </div>
                <div className="servicios-contenedor">
                    <div className="servicio-card">
                        <div className="servicio-icono"><i className="bi bi-mortarboard"></i></div>
                        <h3>Aprendices</h3>
                        <ul>
                            <li><i className="bi bi-check2-circle"></i> Consulta de materiales disponibles.</li>
                            <li><i className="bi bi-check2-circle"></i> Solicitud de préstamos de elementos rápida.</li>
                            <li><i className="bi bi-check2-circle"></i> Historial de herramientas usadas.</li>
                        </ul>
                    </div>
                    <div className="servicio-card destacado">
                        <div className="servicio-icono"><i className="bi bi-person-workspace"></i></div>
                        <h3>Instructores</h3>
                        <ul>
                            <li><i className="bi bi-check2-circle"></i> Gestión de ambientes de formación.</li>
                            <li><i className="bi bi-check2-circle"></i> Reporte de novedades y daños.</li>
                            <li><i className="bi bi-check2-circle"></i> Control de insumos por ficha.</li>
                        </ul>
                        <span className="badge-destacado">Más Popular</span>
                    </div>
                    <div className="servicio-card">
                        <div className="servicio-icono"><i className="bi bi-database-fill-gear"></i></div>
                        <h3>Cuenta Dante</h3>
                        <ul>
                            <li><i className="bi bi-check2-circle"></i> Auditoría total de inventario.</li>
                            <li><i className="bi bi-check2-circle"></i> Generación de reportes legales.</li>
                            <li><i className="bi bi-check2-circle"></i> Gestión de altas y bajas de bienes.</li>
                        </ul>
                    </div>
                </div>
        </section>
    </>
  )
}

export default SeccionServicios
