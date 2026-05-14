import '../../StylesComponents/Home/SeccionContacto.css'

const SeccionContacto = () => {
  return (
    <>
    <section id="contacto" className="seccion-contacto">
                <div className="contenedor-contacto">
                    <div className="info-principal">
                        <span className="titulo-verde">Contacto Directo</span>
                        <h2>Hablemos de <br /><span className="texto-resaltado">Gestión Eficiente</span></h2>
                        <p>Estamos ubicados en el corazón de Popayán.</p>
                        
                        <div className="lineas-contacto">
                            <div className="item-contacto">
                                <i className="bi bi-geo-alt"></i>
                                <div className="detalles">
                                    <span>Visítanos</span>
                                    <p>SENA Centro de Comercio y Servicios, Popayán</p>
                                </div>
                            </div>

                            <div className="item-contacto">
                                <i className="bi bi-envelope-at"></i>
                                <div className="detalles">
                                    <span>Escríbenos</span>
                                    <p>soporte.stockmind@sena.edu.co</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="social-side">
                        <div className="circulo-decorativo"></div>
                        <div className="redes">
                            <p>Síguenos en @SENACauca</p>
                            <div className="enlaces">
                                <a href="https://www.facebook.com/SENACauca" target="_blank"><i className="bi bi-facebook"></i> Facebook</a>
                                <a href="https://www.instagram.com/senacomunica/" target="_blank"><i className="bi bi-instagram"></i> Instagram</a>
                                <a href="https://twitter.com/SENAComunica" target="_blank"><i className="bi bi-twitter-x"></i> Twitter / X</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default SeccionContacto
