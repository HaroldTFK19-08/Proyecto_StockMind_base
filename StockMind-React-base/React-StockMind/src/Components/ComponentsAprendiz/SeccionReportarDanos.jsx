import { Link } from 'react-router-dom'
import '../../StylesComponents/StylesAprendiz/SeccionReportarDanos.css'
import StockMind from '../../assets/minilogo.png'
const SeccionReportarDanos = () => {
  return (

        <main className="bloque-principal-reportes">

            {/* Contenedor del formulario y banners */}
            <div className="contenedor-falla-reporte">
                
                {/* Banner informativo */}
                <div className="banner-notificaciones-falla">
                    <div className="banner-contenido-falla">
                        <div className="banner-texto-falla">
                            <h1>Centro de Reportes</h1>
                            <p>Gestiona las fallas técnicas de tus elementos asignados.</p>
                            <img src={StockMind} alt="Logo StockMind" className="imagen-logo-mini" />
                        </div>
                    </div>
                </div>
                
                {/* Sección del formulario de reportes */}
                <section className="tarjeta-formulario-falla">
                    
                    <div className="encabezado-tarjeta-falla">
                        <h2 className="titulo-seccion-falla"><i className="bi bi-exclamation-triangle"></i> Reportar Daño o Falla</h2>
                        <h3><i className="bi bi-megaphone"></i> Nuevo Reporte para: <strong>Dante</strong></h3>
                        <p>Describe el inconveniente detalladamente. Dante recibirá esta información para procesar la revisión técnica.</p>
                    </div>
                    
                    <form className="formulario-registro-falla">
                        <div className="grilla-datos-falla">
                            
                            {/* Campo: Elemento afectado */}
                            <div className="campo-formulario-ancho">
                                <label>Elemento afectado</label>
                                <div className="contenedor-entrada-icono">
                                    <i className="bi bi-box-seam"></i>
                                    <select name="elementoDanado" className="campo-seleccion-personalizado">
                                        <option value="" disabled defaultValue>Selecciona el elemento que presenta la falla...</option>
                                        <option value="1">Computador de Mesa - PC #10</option>
                                        <option value="2">Cargador - SENA-18</option>
                                        <option value="3">Mouse Óptico - SENA-23</option>
                                    </select>
                                </div>
                            </div>
                            
                            {/* Campo: Tipo de Falla */}
                            <div className="campo-formulario-normal">
                                <label>Tipo de Falla</label>
                                <div className="contenedor-entrada-icono">
                                    <i className="bi bi-tools"></i>
                                    <select name="tipoFalla" className="campo-seleccion-personalizado">
                                        <option value="fisico">Dano Físico (Rotura, golpe)</option>
                                        <option value="electrico">Falla Eléctrica (No prende, corto)</option>
                                        <option value="software">Software (Virus, error de sistema)</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </div>
                            </div>

                            {/* Campo: Fecha del suceso */}
                            <div className="campo-formulario-normal">
                                <label>Fecha del Suceso</label>
                                <div className="contenedor-entrada-icono">
                                    <i className="bi bi-calendar-event"></i>
                                    <input type="date" name="fechaDano" className="campo-entrada-texto" />
                                </div>
                            </div>

                            {/* Campo: Hora aproximada */}
                            <div className="campo-formulario-normal">
                                <label>Hora Aproximada</label>
                                <div className="contenedor-entrada-icono">
                                    <i className="bi bi-clock"></i>
                                    <input type="time" name="horaDano" className="campo-entrada-texto" />
                                </div>
                            </div>

                            {/* Campo: Descripción del problema */}
                            <div className="campo-formulario-ancho">
                                <label>Descripción del problema</label>
                                <div className="contenedor-entrada-icono contenedor-textarea-falla">
                                    <i className="bi bi-chat-left-text"></i>
                                    <textarea 
                                        name="descripcion" 
                                        placeholder="Ej: La pantalla del computador parpadea en color verde y se apaga después de 5 minutos de uso..." 
                                        className="campo-entrada-texto"
                                    ></textarea>
                                </div>
                            </div>

                            {/* Campo: Evidencia Fotográfica */}
                            <div className="campo-formulario-ancho">
                                <label>Evidencia Fotográfica (Opcional)</label>
                                <div className="area-carga-evidencia" id="drop-area">
                                    <input type="file" name="fotoDano" id="fotoDano" accept="image/*" hidden />
                                    <label htmlFor="fotoDano" className="contenido-zona-carga">
                                        <i className="bi bi-cloud-arrow-up"></i>
                                        <div className="indicaciones-carga">
                                            <strong>Haz clic para subir</strong> o arrastra la foto aquí 
                                            <br />
                                            <span>PNG, JPG (Máx. 5MB)</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Botonera inferior */}
                        <div className="bloque-botones-accion">
                            <button type="submit" className="boton-enviar-falla">
                                <i className="bi bi-send-check"></i> Enviar Reporte a Dante
                            </button>
                            {/* Reemplazado por Link para volver a la vista de elementos asignados */}
                            <Link to="/miselementos" className="boton-cancelar-reporte">
                                Volver
                            </Link>
                        </div>
                    </form>
                </section>
            </div>
        </main>
  )
}

export default SeccionReportarDanos
