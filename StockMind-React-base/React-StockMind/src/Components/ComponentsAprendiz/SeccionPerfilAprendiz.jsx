import '../../StylesComponents/StylesAprendiz/PerfilAprendiz.css'
import AprendizPerfilp from '../../assets/aprendizlogo copy.png'
import { Link } from 'react-router-dom'
const SeccionPerfilAprendiz = () => {
  return (
       <main className="contenidoPerfilAprendiz">
        <div className="perfil-contenedorAprendiz">
            
            <div className="perfil-headerAprendiz">
                <div className="perfil-infoPerfil">

                    <div className="avatar-aprendizPerfil">
                        <img src={AprendizPerfilp} alt="Perfil Aprendiz" className="avatar-imgPerfil"/>
                        <button className="fotoAprendizPerfil"><i className="bi bi-camera"></i></button>
                    </div>
                    <div className="texto-perfilPerfil">
                        <h1>Juan Estrada</h1>
                        <span className="rolPerfil">Aprendiz - Etapa Lectiva</span>
                        <p>Juanestrada@soysena.edu.co</p>
                    </div>
                </div>
                
                <div className="grupo-accionesPerfil">
                    <Link to="/notificacionesaprendiz" className="campana-linkPerfil">
                        <i className="bi bi-bell"></i>
                    </Link>
                    
                    <Link to="/editarperfilaprendiz" className="boton-editarPerfil">
                        <i className="bi bi-pencil"></i><span>Editar Datos</span></Link>
                </div>

            </div>

            <div className="perfil-subtitulo">
                <section className="perfil-cards">
                    <h3><i className="bi bi-person-lines-fill"></i>Información Personal</h3>

                    <div className="losDatos">

                        <div className="dato">
                            <label>Primer Nombre</label>
                            <div className="dato-falso"><i className="bi bi-person"></i>Juan</div>
                        </div>
                        <div className="dato">
                            <label>Segundo Nombre</label>
                            <div className="dato-falso"><i className="bi bi-person"></i>Andres</div>
                        </div>
                        <div className="dato">
                            <label> Primer Apellido</label>
                            <div className="dato-falso"><i className="bi bi-person-badge"></i>Estrada</div>
                        </div>
                        <div className="dato">
                            <label>Segundo Apellido</label>
                            <div className="dato-falso"><i className="bi bi-person-badge"></i>Erazo</div>
                        </div>
                        <div className="dato">
                            <label>Tipo Documento</label>
                            <div className="dato-falso">C.C.</div>
                        </div>
                        <div className="dato">
                            <label>Número Documento</label>
                            <div className="dato-falso"><i className="bi bi-card-text"></i> 10058191</div>
                        </div>
                        <div className="dato">
                            <label>Ficha</label>
                            <div className="dato-falso"><i className="bi bi-hash"></i> 2558394</div>
                        </div>
                        <div className="dato">
                            <label>Teléfono</label>
                            <div className="dato-falso"><i className="bi bi-telephone"></i> 310 123 4567</div>
                        </div>
                        <div className="dato-ancho">
                            <label>Centro de Formacion</label>
                            <div className="dato-falso"><i className="bi bi-bank"></i>Centro Comercio y Servicios</div>
                        </div>
                        <div className="dato-ancho">
                            <label>Programa de Formación</label>
                            <div className="dato-falso"><i className="bi bi-mortarboard"></i> Análisis y Desarrollo de Software</div>
                        </div>
                        <div className="dato-ancho">
                            <label>Correo Electrónico</label>
                            <div className="dato-falso"><i className="bi bi-envelope"></i> juanestrada@soysena.edu.co</div>
                        </div>
                    </div>
                </section>

                <section className="perfil-barraLateral">
                    <div className="perfil-cards">
                        <h3><i className="bi bi-shield-lock"></i> Seguridad</h3>

                        <div className="botones-seguridad">
                            <a href="#" className="btn-seguridad btn-password">
                                <i className="bi bi-shield-lock"></i> Cambiar Contraseña
                            </a>
                            
                            <a href="#" className="btn-seguridad btn-logout">
                                <i className="bi bi-box-arrow-right"></i> Cerrar Sesión
                            </a>
                            <a href="#" className="btn-seguridad btn-delete"><i className="bi bi-trash3"></i> Eliminar Cuenta</a>
                        </div>
                    </div>

                    <div className="perfil-cards">
                        <h3><i className="bi bi-gear"></i> Preferencias</h3>
                        <div className="opcion-oscuro">
                            <span>Modo Oscuro</span>
                            <label className="switch">
                                <input type="checkbox" id="check-oscuro"/>
                                <span className="slider"></span>
                            </label>
                        </div>
                        <div className="opcion-oscuro">
                            <span>Notificaciones</span>
                            <label className="switch">
                                <input type="checkbox" id="check-notificaciones" checked/> <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </main>
  )
}

export default SeccionPerfilAprendiz
