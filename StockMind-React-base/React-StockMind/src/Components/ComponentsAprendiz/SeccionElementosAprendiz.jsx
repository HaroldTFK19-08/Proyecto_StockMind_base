import { Link } from 'react-router-dom'
import '../../StylesComponents/StylesAprendiz/SeccionElementosAprendiz.css'

const SeccionElementosAprendiz = () => {
  return (
    <div className="elem-wrapper">
        <main className="elem-contenido-principal">
            <div className="elem-elementos-contenedor">
                <h2 className="elem-titulo-seccion">
                    <i className="bi bi-box-seam"></i> Mis Elementos Asignados
                </h2>
                <br/>
                
                <div className="elem-barra-busqueda-container">
                    <div className="elem-input-busqueda-wrapper">
                        <i className="bi bi-search"></i>
                        <input 
                            type="text" 
                            placeholder="Buscar por elemento, ambiente o instructor..." 
                            id="elem-inputBusqueda"
                        />
                    </div>
                    <button className="elem-boton-filtro">
                        <i className="bi bi-sliders"></i>
                        <span>Filtros</span>
                    </button>
                </div>

                <h3 className="elem-subtitulo-tabla">
                    <i className="bi bi-pin-angle-fill"></i> Elementos para tu formación
                </h3>
                
                {/* Tabla 1 */}
                <section className="elem-tarjeta-tabla">
                    <div className="elem-tabla-responsiva">
                        <table className="elem-tabla">
                            <thead>
                                <tr>
                                    <th>Elemento</th>
                                    <th>Centro / Ambiente</th>
                                    <th>Instructor</th>
                                    <th>Fecha Asignación</th>
                                    <th>Hora</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="elem-info-elemento">
                                            <strong>Computador de Mesa</strong>
                                            <span>PC #10</span>
                                        </div>
                                    </td>
                                    <td>Centro Comercio y Servicios/Ambiente 204</td>
                                    <td>Carlos Pérez</td>
                                    <td>22/04/2026</td>
                                    <td>07:30 AM</td>
                                    <td><span className="elem-tag-estado">Activo</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <br/>
                
                {/* Tabla 2 */}
                <section className="elem-tarjeta-tabla">
                    <div className="elem-tabla-responsiva">
                        <table className="elem-tabla">
                            <thead>
                                <tr>
                                    <th>Elemento</th>
                                    <th>Centro / Ambiente</th>
                                    <th>Instructor</th>
                                    <th>Fecha Asignación</th>
                                    <th>Hora</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="elem-info-elemento">
                                            <strong>Cargador</strong>
                                            <span>Numero: SENA-18</span>
                                        </div>
                                    </td>
                                    <td>Centro Comercio y Servicios/Ambiente 204</td>
                                    <td>Carlos Pérez</td>
                                    <td>21/04/2026</td>
                                    <td>01:30 PM</td>
                                    <td><span className="elem-tag-estado">Activo</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <br/>
                
                {/* Tabla 3 */}
                <section className="elem-tarjeta-tabla">
                    <div className="elem-tabla-responsiva">
                        <table className="elem-tabla">
                            <thead>
                                <tr>
                                    <th>Elemento</th>
                                    <th>Centro / Ambiente</th>
                                    <th>Instructor</th>
                                    <th>Fecha Asignación</th>
                                    <th>Hora</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="elem-info-elemento">
                                            <strong>Mouse Óptico</strong>
                                            <span>Numero: SENA-23</span>
                                        </div>
                                    </td>
                                    <td>Centro Comercio y Servicios/Ambiente 204</td>
                                    <td>Carlos Pérez</td>
                                    <td>21/04/2026</td>
                                    <td>01:25 PM</td>
                                    <td><span className="elem-tag-estado">Activo</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </main>
    </div>
  )
}

export default SeccionElementosAprendiz;