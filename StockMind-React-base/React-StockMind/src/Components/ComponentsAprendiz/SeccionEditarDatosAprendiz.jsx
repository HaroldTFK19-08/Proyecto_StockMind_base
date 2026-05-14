import '../../StylesComponents/StylesAprendiz/EditarDatosAprendiz.css'
import { Link } from 'react-router-dom'
const SeccionEditarDatosAprendiz = () => {
  return (
        <main className="contenido-principalEditar">
        <div className="perfil-contenedorEditar">

            <div className="encabezado-seccionEditar">
                <div className="titulo-con-vuelta">
                    <Link to="/perfilaprendiz" className="btn-volverEditar">
                      <i className="bi bi-arrow-left"></i>
                    <span>Volver al Perfil</span>
                  </Link>
                </div>
            </div>

            <section className="tarjeta-edicionEdicion">
                <div className="encabezado-tarjetaEdicion">
                <h2><i className="bi bi-person-lines-fill"></i> Editar Información Personal</h2>
                <br/>
                <p>Actualiza tus datos de contacto y nombres registrados en el sistema.</p>
                </div>

                <form className="formulario-edicion">
                    <div className="losDatos">

                        <div className="dato">
                            <label>Primer Nombre</label>
                            <div className="input-contenedor">
                                <i className="bi bi-person"></i>
                                <input type="text" name="primerNombre" value="Juan" className="input-field"/>
                            </div>
                        </div>

                        <div className="dato">
                            <label>Segundo Nombre</label>
                            <div className="input-contenedor">
                                <i className="bi bi-person"></i>
                                <input type="text" name="segundoNombre" value="Andres" className="input-field"/>
                            </div>
                        </div>

                        <div className="dato">
                            <label>Primer Apellido</label>
                            <div className="input-contenedor">
                                <i className="bi bi-person-badge"></i>
                                <input type="text" name="primerApellido" value="Estrada" className="input-field"/>
                            </div>
                        </div>

                        <div className="dato">
                            <label>Segundo Apellido</label>
                            <div className="input-contenedor">
                                <i className="bi bi-person-badge"></i>
                                <input type="text" name="segundoApellido" value="Erazo" className="input-field"/>
                            </div>
                        </div>

                        <div className="dato">
                            <label>Teléfono</label>
                            <div className="input-contenedor">
                                <i className="bi bi-telephone"></i>
                                <input type="tel" name="telefono" value="310 123 4567" className="input-field"/>
                            </div>
                        </div>

                        <div className="dato-ancho">
                            <label>Correo Electrónico</label>
                            <div className="input-contenedor">
                                <i className="bi bi-envelope"></i>
                                <input type="email" name="correo" value="juanestrada@soysena.edu.co" className="input-field"/>
                            </div>
                        </div>

                    </div>

                    <div className="contenedor-botonesEdicion">
                        <button type="submit" className="boton-accion-primario">
                            <i className="bi bi-check-lg"></i> Guardar Cambios
                        </button>
                        <Link to="/perfilaprendiz" className="boton-cancelar">
                        Cancelar</Link>
                    </div>
                </form>
            </section>
        </div>
    </main>
  )
}

export default SeccionEditarDatosAprendiz

