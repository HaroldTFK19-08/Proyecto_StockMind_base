import '../../StylesComponents/StylesAdmin/SedesAdmin.css'
import { Link } from 'react-router-dom';
const SeccionSedesAdmin = () => {
  return (
    <main className="main-sedes">
      <section className="parte-inicial-sedes">
        <div>
          <h1 className="titulo-principal-sedes">Gestión de Centros de Formación</h1>
          <p className="descripcion-sedes">Visualiza y administra los centros de formación técnica a nivel municipal.</p>
        </div>
        <div>
          <button className="btn-nueva-sede">
            <strong><i className="bi bi-plus-lg"></i> Nueva Sede</strong>
          </button>
        </div>
      </section>

      <section className="tarjetas-general-sedes">
        <div className="tarjeta-estadistica-sedes">
          <div className="top-tarjeta-sedes">
            <div>
              <h4 className="label-tarjeta-sedes">Sedes Totales</h4>
            </div>
            <div className="icon-contenedor-sedes">
              <i className="bi bi-building"></i>
            </div>
          </div>
          <div className="cuerpo-tarjeta-sedes">
            <p className="numero-grande-sedes">3</p>
          </div>
          <div className="pie-tarjeta-sedes">
            <p className="meta-stats-sedes"><i className="bi bi-graph-up"></i> +2 este año</p>
          </div>
        </div>

        <div className="tarjeta-estadistica-sedes">
          <div className="top-tarjeta-sedes">
            <div>
              <h4 className="label-tarjeta-sedes">Total de Ambientes</h4>
            </div>
            <div className="icon-contenedor-sedes">
              <i className="bi bi-door-open"></i>
            </div>
          </div>
          <div className="cuerpo-tarjeta-sedes">
            <p className="numero-grande-sedes">2000</p>
          </div>
          <div className="pie-tarjeta-sedes">
            <p className="meta-stats-sedes">Promedio de 12 por sede</p>
          </div>
        </div>

        <div className="tarjeta-estadistica-sedes">
          <div className="top-tarjeta-sedes">
            <div>
              <h4 className="label-tarjeta-sedes">Elementos Totales</h4>
            </div>
            <div className="icon-contenedor-sedes">
              <i className="bi bi-pc-display-horizontal"></i>
            </div>
          </div>
          <div className="cuerpo-tarjeta-sedes">
            <p className="numero-grande-sedes">50000</p>
          </div>
          <div className="pie-tarjeta-sedes">
            <p className="meta-stats-sedes">Elementos activos</p>
          </div>
        </div>
      </section>

      <section className="contenedor-lista-sedes">
        <div className="cabecera-flex-sedes">
          <div className="titulo-grupo-sedes">
            <h2 className="subtitulo-seccion-sedes">Centros de formación</h2>
            <span className="etiqueta-conteo-sedes">3 Resultados</span>
          </div>
          <div className="botones-grupo-sedes">
            <button className="btn-circular-sedes"><i className="bi bi-filter-right"></i></button>
            <button className="btn-circular-sedes seleccionado-sedes"><i className="bi bi-grid-fill"></i></button>
          </div>
        </div>

        <div className="lista-tarjetas-sedes">
          {/* Ejemplo de una tarjeta de sede */}
          <div className="tarjeta-sede-item">
            <div className="foto-sede-sedes" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg8I6dleXEJP0E-4rwbLRd4VoyEBB5wlhUmw&s')" }}>
              <span className="estado-activa-sedes"><span className="punto-sedes"></span> ACTIVA</span>
            </div>
            <div className="info-sede-sedes">
              <span className="ubicacion-sede-sedes">POPAYÁN</span>
              <h3 className="nombre-sede-sedes">Centro de Comercio y Servicios</h3>
              <div className="fila-dato-sedes">
                <span><i className="bi bi-door-open"></i> Ambientes</span>
                <span className="valor-dato-sedes">32</span>
              </div>
              <div className="fila-dato-sedes">
                <span><i className="bi bi-pc-display"></i> Equipos</span>
                <span className="valor-dato-sedes">412</span>
              </div>
              <Link to="/Centro01" className="btn-accion-sedes">Ver Ambientes <i className="bi bi-arrow-right"></i></Link>
            </div>
          </div>

          <div className="tarjeta-sede-item">
            <div className="foto-sede-sedes" style={{ backgroundImage: "url('https://www.sena.edu.co/es-co/Noticias/PublishingImages/Cauca2_19-04-2024.jpg')" }}>
              <span className="estado-activa-sedes"><span className="punto-sedes"></span> ACTIVA</span>
            </div>
            <div className="info-sede-sedes">
              <span className="ubicacion-sede-sedes">POPAYÁN</span>
              <h3 className="nombre-sede-sedes">Centro de Teleinformática</h3>
              <div className="fila-dato-sedes">
                <span><i className="bi bi-door-open"></i> Ambientes</span>
                <span className="valor-dato-sedes">24</span>
              </div>
              <div className="fila-dato-sedes">
                <span><i className="bi bi-pc-display"></i> Equipos</span>
                <span className="valor-dato-sedes">856</span>
              </div>
              <Link to="/Centro02" className="btn-accion-sedes">Ver Ambientes <i className="bi bi-arrow-right"></i></Link>
            </div>
          </div>

          <div className="tarjeta-sede-item">
            <div className="foto-sede-sedes" style={{ backgroundImage: "url('https://pbs.twimg.com/ext_tw_video_thumb/1676619254211198976/pu/img/YFv75NVEnwJF9_kA.jpg')" }}>
              <span className="estado-activa-sedes"><span className="punto-sedes"></span> ACTIVA</span>
            </div>
            <div className="info-sede-sedes">
              <span className="ubicacion-sede-sedes">POPAYÁN</span>
              <h3 className="nombre-sede-sedes">Centro Agropecuario</h3>
              <div className="fila-dato-sedes">
                <span><i className="bi bi-door-open"></i> Ambientes</span>
                <span className="valor-dato-sedes">18</span>
              </div>
              <div className="fila-dato-sedes">
                <span><i className="bi bi-pc-display"></i> Equipos</span>
                <span className="valor-dato-sedes">128</span>
              </div>
              <Link to="/centro03" className="btn-accion-sedes">Ver Ambientes <i className="bi bi-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SeccionSedesAdmin