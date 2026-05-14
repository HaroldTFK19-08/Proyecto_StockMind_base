import '../../StylesComponents/StylesAprendiz/SeccionReportes.css'
import { Link } from 'react-router-dom'

import Mouse from '../../assets/mouseDanado.png'
import PC from '../../assets/computadorDanado.png'
import Teclado from '../../assets/tecladoDanado.png'
import Cargador from '../../assets/cargadorDanado.png'


const SeccionReportes = () => {
  return (
        <>
        <div className='contenedor-reportes-main'>
        <main className='seccion-reportes-contenido'>
                
                <div className="quick-stats-container">
                    <div className="stat-card">
                        <div className="stat-icon reports"><i className="bi bi-file-earmark-text"></i></div>
                        <div className="stat-info">
                            <span className="stat-label">Reportes Totales</span>
                            <span className="stat-value">12</span>
                        </div>
                    </div>
                    
                    <div className="stat-card">
                        <div className="stat-icon pending"><i className="bi bi-hourglass-split"></i></div>
                        <div className="stat-info">
                            <span className="stat-label">En Revisión</span>
                            <span className="stat-value">02</span>
                        </div>
                    </div>
                    
                    <div className="stat-card">
                        <div className="stat-icon items"><i className="bi bi-pc-display"></i></div>
                        <div className="stat-info">
                            <span className="stat-label">Equipos a Cargo</span>
                            <span className="stat-value">05</span>
                        </div>
                    </div>
                </div>

                <div className="barra-busqueda-container">
                    <div className="input-busqueda-wrapper">
                        <i className="bi bi-search"></i>
                        <input type="text" placeholder="Buscar reportes (ej: Computador, Mouse...)" id="inputBusqueda"/>
                    </div>
                    
                    <button className="boton-filtro">
                        <i className="bi bi-sliders"></i>
                        <span>Filtros</span>
                    </button>
                </div>

                <section className="historial-reportes-container">
                    <div className="tarjeta-contenedor-global">
                        <div className="encabezado-historial">
                            <h3><i className="bi bi-clock-history"></i> Mis Reportes Recientes</h3>
                            <span className="total-reportes">Mostrando reportes</span>
                        </div>
                        
                        <div className="lista-reportes">
                            {/* Reporte 1 */}
                            <div className="tarjeta-reporte-item"> 
                                <div className="reporte-col-izq">
                                    <div className="header-reporte">
                                        <span className="tag-elemento">Cargador - SENA-18</span>
                                        {/* Corregido el espacio en la clase */}
                                        <span className="tag-falla-electrico">Falla Eléctrica</span>
                                    </div>
                                    <div className="cuerpo-reporte">
                                        <p className="desc-texto">
                                            <strong>Descripción:</strong> El adaptador de corriente se sobrecalienta excesivamente a los pocos minutos de conexión y emite un sonido agudo (pitido). No carga el equipo asignado.
                                        </p>
                                        <div className="meta-datos-reporte">
                                            <span><i className="bi bi-calendar3"></i> 20/04/2026</span>
                                            <span><i className="bi bi-clock"></i> 11:20 AM</span>
                                            <span><i className="bi bi-person-badge"></i> Técnico: Dante</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="reporte-col-der">
                                    <div className="estado-badge revision">En Revisión</div>
                                    <div className="contenedor-foto-reporte">
                                        <img src={Cargador} alt="Evidencia Cargador"/>
                                        <div className="zoom-icon"><i className="bi bi-zoom-in"></i></div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Reporte 2 */}
                            <div className="tarjeta-reporte-item">
                                <div className="reporte-col-izq">
                                    <div className="header-reporte">
                                        <span className="tag-elemento">PC #10</span>
                                        {/* Corregido el espacio en la clase */}
                                        <span className="tag-falla-fisico">Dano Físico</span>
                                    </div>
                                    <div className="cuerpo-reporte">
                                        <p className="desc-texto">
                                            <strong>Descripción:</strong> La pantalla del computador parpadea en color verde y se apaga después de 5 minutos de uso...
                                        </p>
                                        <div className="meta-datos-reporte">
                                            <span><i className="bi bi-calendar3"></i> 22/04/2026</span>
                                            <span><i className="bi bi-clock"></i> 14:30 PM</span>
                                            <span><i className="bi bi-person-badge"></i> Técnico: Dante</span>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="reporte-col-der">
                                    <div className="estado-badge pendiente">Pendiente</div>
                                    <div className="contenedor-foto-reporte">
                                        <img src={PC} alt="Evidencia Dano"/>
                                        <div className="zoom-icon"><i className="bi bi-zoom-in"></i></div>
                                    </div>
                                </div>
                            </div>

                            {/* Reporte 3 */}
                            <div className="tarjeta-reporte-item"> 
                                <div className="reporte-col-izq">
                                    <div className="header-reporte">
                                        <span className="tag-elemento">Mouse Logitech - M170</span>
                                        <span className="tag-falla">Falla de Periférico</span>
                                    </div>
                                    <div className="cuerpo-reporte">
                                        <p className="desc-texto">
                                            <strong>Descripción:</strong> El botón izquierdo presenta "doble clic" involuntario o clic fantasma, lo que dificulta la navegación y el uso de software de diseno.
                                        </p>
                                        <div className="meta-datos-reporte">
                                            <span><i className="bi bi-calendar3"></i> 18/04/2026</span>
                                            <span><i className="bi bi-clock"></i> 09:15 AM</span>
                                            <span><i className="bi bi-person-badge"></i> Técnico: Dante</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="reporte-col-der">
                                    <div className="estado-badge solucionado">Solucionado</div>
                                    <div className="contenedor-foto-reporte">
                                        <img src={Mouse} alt="Evidencia Mouse"/>
                                        <div className="zoom-icon"><i className="bi bi-zoom-in"></i></div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Reporte 4 */}
                            <div className="tarjeta-reporte-item"> 
                                <div className="reporte-col-izq">
                                    <div className="header-reporte">
                                        <span className="tag-elemento">Teclado Dell - Lote B</span>
                                        <span className="tag-falla">Dano Físico</span>
                                    </div>
                                    <div className="cuerpo-reporte">
                                        <p className="desc-texto">
                                            <strong>Descripción:</strong> Faltan las teclas 'Enter' y 'Shift' derecho. Al parecer fueron desprendidas durante la última jornada de formación.
                                        </p>
                                        <div className="meta-datos-reporte">
                                            <span><i className="bi bi-calendar3"></i> 24/04/2026</span>
                                            <span><i className="bi bi-clock"></i> 15:45 PM</span>
                                            <span><i className="bi bi-person-badge"></i> Técnico: Dante</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="reporte-col-der">
                                    <div className="estado-badge pendiente">Pendiente</div>
                                    <div className="contenedor-foto-reporte">
                                        <img src={Teclado} alt="Evidencia Teclado"/>
                                        <div className="zoom-icon"><i className="bi bi-zoom-in"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            </div>
        </>
  )
}

export default SeccionReportes
