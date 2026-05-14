import '../../StylesComponents/StylesAdmin/PerfilAdmin.css';

const SeccionPerfilAdmin = () => {
  return (
    <main className="p-admin-contenedor1">
      <article className='articleP-admin'>
        
        <section className="p-admin-seccion_info_perfil">
          {/* Tarjeta de encabezado de perfil */}
          <div className="p-admin-card p-admin-perfil_card">
            <div className="p-admin-perfil">
              <div className="p-admin-foto_perfil"></div>
              <div>
                <h1>Viviana Arias</h1>
                <p>vivianaArias@soysena.edu.co</p>
                <span className="p-admin-badge">SUPER ADMINISTRADOR</span>
              </div>
            </div>
            <button className="p-admin-btn-editar">
              <i className="bi bi-pencil-square"></i> Editar Perfil
            </button>
          </div>

          {/* Área de Información Personal, Actividad, Seguridad y Preferencias */}
          <div className="p-admin-areaInfo">
            
            {/* COLUMNA IZQUIERDA: Info Personal + Seguridad */}
            <div className="p-admin-columna-layout">
              <div className="p-admin-card p-admin-info_personal">
                <h3>
                  <i className="bi bi-person-badge-fill" style={{ marginRight: '10px', color: '#1f7d35' }}></i>
                  Información Personal
                </h3>
                <div className="p-admin-personal">
                  <div>
                    <h4>Teléfono</h4>
                    <p><i className="bi bi-telephone"></i> 3009758191</p>
                  </div>
                  <div>
                    <h4>Cargo</h4>
                    <p><i className="bi bi-briefcase"></i> Jefe de inventario</p>
                  </div>
                  <div>
                    <h4>Ubicación oficina</h4>
                    <p><i className="bi bi-geo-alt"></i> Comercio y servicios (Centro)</p>
                  </div>
                  <div>
                    <h4>Sede</h4>
                    <p><i className="bi bi-building"></i> SENA Popayán</p>
                  </div>
                  <div>
                    <h4>Identificacion (CC)</h4>
                    <p><i className="bi bi-card-text"></i> 123456789</p>
                  </div>
                  <div>
                    <h4>Fecha de ingreso</h4>
                    <p><i className="bi bi-calendar-check"></i> 01/02/2020</p>
                  </div>
                </div>
              </div>

              {/* Seguridad ahora debajo de Info Personal */}
              <div className="p-admin-card p-admin-seguridad p-admin-card-inferior">
                <h3>Seguridad</h3>
                <div className="p-admin-opciones">
                  <a href="#" className="p-admin-btn-seguridad p-admin-btn-password">
                    <i className="bi bi-shield-lock"></i> Cambiar Contraseña
                  </a>
                  <a href="#" className="p-admin-btn-seguridad p-admin-btn-logout">
                    <i className="bi bi-box-arrow-right"></i> Cerrar Sesión
                  </a>
                  <a href="#" className="p-admin-btn-seguridad p-admin-btn-delete">
                    <i className="bi bi-trash3"></i> Eliminar Cuenta
                  </a>
                </div>
              </div>
            </div>

            {/* COLUMNA DERECHA: Actividad + Preferencias */}
            <div className="p-admin-columna-layout">

              <div className="p-admin-card p-admin-actividad">
                <h2>Actividad Reciente</h2>
              <div className='p-admin-scroll-v'>
                <div className="p-admin-actividad-item">
                  <h4>Actualización de inventario</h4>
                  <p>Se agregaron 15 computadores al sistema</p>
                  <span>Hace 10 minutos</span>
                </div>
                <div className="p-admin-actividad-item">
                  <h4>Préstamo aprobado</h4>
                  <p>Se aprobó un préstamo en el ambiente A-203</p>
                  <span>Hace 1 hora</span>
                </div>
                <div className="p-admin-actividad-item">
                  <h4>Préstamo aprobado</h4>
                  <p>Se aprobó un préstamo en el ambiente A-201</p>
                  <span>Hace 2 hora</span>
                  </div>
                </div>
              </div>

              {/* Preferencias ahora debajo de Actividad */}
              <div className="p-admin-card p-admin-preferencias p-admin-card-inferior">
                <h2>Preferencias</h2>
                <div className="p-admin-opcion">
                  <span>Notificaciones Email</span>
                  <input type="checkbox" defaultChecked />
                </div>
                <div className="p-admin-opcion">
                  <span>Modo Oscuro</span>
                  <input type="checkbox" />
                </div>
                <div className="p-admin-opcion">
                  <span>Alertas de Inventario</span>
                  <input type="checkbox" defaultChecked />
                </div>
              </div>
            </div>

          </div> 
        </section>
        <hr/>

        {/* Sección de Tablas (Sin cambios) */}
        <section className="p-admin-contenedor-tabla">
          <div className="p-admin-card_tabla_card">
            <h3>Inventario</h3>
            <table className="p-admin-tabla">
              <thead>
                <tr>
                  <th>Elemento</th>
                  <th>Categoría</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Computador</td>
                  <td>Tecnología</td>
                  <td><span className="p-admin-estado p-admin-disponible">Disponible</span></td>
                  <td className="p-admin-acciones">
                    <i className="bi bi-eye"></i>
                    <i className="bi bi-pencil"></i>
                    <i className="bi bi-trash"></i>
                  </td>
                </tr>
                <tr>
                  <td>Mouse</td>
                  <td>Tecnología</td>
                  <td><span className="p-admin-estado p-admin-uso">En uso</span></td>
                  <td className="p-admin-acciones">
                    <i className="bi bi-eye"></i>
                    <i className="bi bi-pencil"></i>
                    <i className="bi bi-trash"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="p-admin-contenedor-tabla">
          <div className="p-admin-card_tabla_card">
            <h3>Usuarios</h3>
            <table className="p-admin-tabla">
              <thead>
                <tr>
                  <th>ID Usuario</th>
                  <th>Nombre de Usuario</th>
                  <th>Rol</th>
                  <th>Centro de formacion</th>
                  <th>Programa</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>30</td>
                  <td>Juan Pablo</td>
                  <td>Cuenta-dante</td>
                  <td>Comercio y servicios</td>
                  <td>ADSO</td>
                  <td className="p-admin-acciones">
                    <i className="bi bi-eye"></i>
                    <i className="bi bi-pencil"></i>
                    <i className="bi bi-trash"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </article>
    </main>
  );
};

export default SeccionPerfilAdmin;