import '../../StylesComponents/Home/SeccionNosotros.css'

const SeccionNosotros = () => {
  return (
        <section id="Nosotros" className="seccion-nosotros">
                <div className="nosotros-info">
                    <div className="texto-nosotros">
                        <span className="principal-nosotros">Nuestra Misión</span>
                        <h2>Gestión Inteligente para el SENA</h2>
                        <p>
                            StockMind nace para transformar la administración de recursos institucionales. 
                            Facilitamos el registro detallado de cada elemento, permitiendo un control preciso de su 
                            <strong> identificación, estado y responsable</strong> en tiempo real.
                        </p>
                        <p>
                            Nuestra plataforma no solo organiza; optimiza la toma de decisiones mediante reportes 
                            detallados y una gestión integral de entradas y salidas, garantizando que cada herramienta 
                            esté donde debe estar.
                        </p>
                    </div>
                    <div className="stats-nosotros">
                        <div className="stat-item highlight">
                            <h3>100%</h3>
                            <p>Control Digital</p>
                        </div>
                        <div className="stat-item highlight">
                            <h3>Real-Time</h3>
                            <p>Consultas</p>
                        </div>
                    </div>
                </div>
                <div className="proceso-inicio">
                    <div className="cabecera-proceso">
                        <h3 className="subtitulo">Proceso de Inicio</h3>
                        <h2>¿Cómo empezar en StockMind?</h2>
                    </div>
                    <div className="pasos-container">
                        <div className="pasos">
                            <div className="paso-card">
                                <div className="circulo-icono"><i className="bi bi-person-badge-fill"></i></div>
                                <h4>1. Elección de Rol</h4>
                                <p>Selecciona tu perfil (Aprendiz, Instructor o Cuenta Dante) para adaptar el sistema a tus necesidades.</p>
                            </div>
                            <div className="paso-card">
                                <div className="circulo-icono"><i className="bi bi-pencil-square"></i></div>
                                <h4>2. Registro de Datos</h4>
                                <p>Ingresa tu información personal y académica vinculada a tu rol institucional en el SENA.</p>
                            </div>

                            <div className="paso-card">
                                <div className="circulo-icono"><i className="bi bi-shield-check"></i></div>
                                <h4>3. Verificación</h4>
                                <p>El sistema valida que tus datos sean correctos para garantizar la integridad de la plataforma.</p>
                            </div>

                            <div className="paso-card">
                                <div className="circulo-icono"><i className="bi bi-ui-checks"></i></div>
                                <h4>4. Funcionalidades</h4>
                                <p>Accede a herramientas exclusivas diseñadas para la gestión de bienes según tu perfil.</p>
                            </div>

                            <div className="paso-card">
                                <div className="circulo-icono"><i className="bi bi-graph-up-arrow"></i></div>
                                <h4>5. Gestión Activa</h4>
                                <p>Registra movimientos y genera reportes para contribuir al control eficiente del inventario.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default SeccionNosotros
