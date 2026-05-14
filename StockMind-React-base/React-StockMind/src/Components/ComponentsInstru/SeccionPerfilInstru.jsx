import '../../StylesComponents/StylesInstru/PerfilInstru.css'
import PerfilInstructor from '../../assets/perfilinstructor.jpg'

const SeccionPerfilInstru = () => {
  return (
    <main className="perfilinstru-contenido-principal">
      <div className="perfilinstru-contenedor">
        
        <header className="perfilinstru-header">
          <div className="perfilinstru-info">
            <div className="perfilinstru-avatar-contenedor">
              <img 
                src={PerfilInstructor}
                alt="Perfil Instructor" 
                className="perfilinstru-avatar-img" 
              />
              <button className="perfilinstru-foto-btn">
                <i className="bi bi-camera"></i>
              </button>
            </div>
            <div className="perfilinstru-texto-perfil">
              <h1>Juan Pablo Chamizzo</h1>
              <span className="perfilinstru-rol">Instructor - Cuentadante</span>
              <p>instructorjp@soysena.edu.co</p>
            </div>
          </div>
          <button className="perfilinstru-boton-editar">
            <i className="bi bi-pencil"></i> Editar Datos
          </button>
        </header>

        <div className="perfilinstru-cuerpo">
          <section className="perfilinstru-card-principal">
            <h3><i className="bi bi-person-lines-fill"></i> Información Personal</h3>

            <div className="perfilinstru-grid-datos">
              <div className="perfilinstru-dato">
                <label>Primer Nombre</label>
                <div className="perfilinstru-dato-falso">
                  <i className="bi bi-person"></i> Juan
                </div>
              </div>
              <div className="perfilinstru-dato">
                <label>Segundo Nombre</label>
                <div className="perfilinstru-dato-falso">
                  <i className="bi bi-person"></i> Pablo
                </div>
              </div>
              <div className="perfilinstru-dato">
                <label>Primer Apellido</label>
                <div className="perfilinstru-dato-falso">
                  <i className="bi bi-person-badge"></i> Chamizzo
                </div>
              </div>
              <div className="perfilinstru-dato">
                <label>Segundo Apellido</label>
                <div className="perfilinstru-dato-falso">
                  <i className="bi bi-person-badge"></i> Vega
                </div>
              </div>
              <div className="perfilinstru-dato">
                <label>Tipo Documento</label>
                <div className="perfilinstru-dato-falso">C.C.</div>
              </div>
              <div className="perfilinstru-dato">
                <label>Número Documento</label>
                <div className="perfilinstru-dato-falso">
                  <i className="bi bi-card-text"></i> 1001548967
                </div>
              </div>
              <div className="perfilinstru-dato">
                <label>Teléfono</label>
                <div className="perfilinstru-dato-falso">
                  <i className="bi bi-telephone"></i> 311 458 3026
                </div>
              </div>
              <div className="perfilinstru-dato-ancho">
                <label>Centro de Formación</label>
                <div className="perfilinstru-dato-falso">
                  <i className="bi bi-bank"></i> Centro Comercio y Servicios
                </div>
              </div>
              <div className="perfilinstru-dato-ancho">
                <label>Correo Electrónico</label>
                <div className="perfilinstru-dato-falso">
                  <i className="bi bi-envelope"></i> instructorjp@soysena.edu.co
                </div>
              </div>
            </div>
          </section>

          <div className="perfilinstru-barra-lateral">
            <div className="perfilinstru-card-secundaria">
              <h3><i className="bi bi-shield-lock"></i> Seguridad</h3>
              <p className="perfilinstru-seguridad-texto">
                Protege tu cuenta actualizando tu contraseña regularmente.
              </p>
              <button className="perfilinstru-boton-seguridad">
                Cambiar Contraseña
              </button>
            </div>

            <div className="perfilinstru-card-secundaria">
              <h3><i className="bi bi-gear"></i> Preferencias</h3>
              <div className="perfilinstru-opcion-switch">
                <span>Modo Oscuro</span>
                <label className="perfilinstru-switch">
                  <input type="checkbox" id="check-oscuro" />
                  <span className="perfilinstru-slider"></span>
                </label>
              </div>
              <div className="perfilinstru-opcion-switch">
                <span>Notificaciones</span>
                <label className="perfilinstru-switch">
                  <input type="checkbox" id="check-notificaciones" defaultChecked />
                  <span className="perfilinstru-slider"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SeccionPerfilInstru