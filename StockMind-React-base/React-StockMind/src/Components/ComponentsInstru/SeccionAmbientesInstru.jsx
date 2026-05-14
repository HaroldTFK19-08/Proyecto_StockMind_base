import React from 'react';
import '../../StylesComponents/StylesInstru/AmbientesInstru.css';
import sala01 from '../../assets/sala01.png'
const SeccionAmbientesInstru = () => {
  return (
    <main className="ambi-instru-main">
      <div id="ambientes" className="ambi-instru-ambientes">
        <h1>Ambientes</h1>
        <p>Seleccione el área de trabajo para realizar reportes, fallas técnicas o visualizar el estado actual de los elementos.</p>
        
        <section className="ambi-instru-section">
          <div className="ambi-instru-card-grid">
            {/* Repetir este bloque para cada ambiente o mapear un array */}
            <div className="ambi-instru-card">
              <div style={{ position: 'relative' }}>
                <img src={sala01} alt="ambiente" className="ambi-instru-img" />
              </div>

              <div className="ambi-instru-card-content">
                <h3>Ambiente 1</h3>
                <p className="ambi-instru-small">software 1</p>
                <div className="ambi-instru-info">
                  <div>
                    <p>equipos: <span className="ambi-instru-strong">30</span></p>
                  </div>
                  <div>
                    <p>estado: <span className="ambi-instru-strong">95% optimo</span></p>
                  </div>
                </div>
                <button className="ambi-instru-btn ambi-instru-ver-btn">ver inventario</button>
              </div>
   
            </div>
          </div>
        </section>
      </div>

      <div id="inventario" className="ambi-instru-inventario" style={{ display: 'none' }}>
        <div id="volver" className="ambi-instru-volver">
          <i className="bi bi-arrow-return-left"></i>
        </div>
        <div className="ambi-instru-container">
          <h1>Inventario de elementos del ambiente 1</h1>
          <p>Asignaciones de los elementos</p>

          <div className="ambi-instru-tarjetas">
            <div className="ambi-instru-tarjeta ambi-instru-azul">
              <h4>Total Equipos</h4>
              <span>30</span>
            </div>
            <div className="ambi-instru-tarjeta ambi-instru-verde">
              <h4>Buen estado</h4>
              <span>25</span>
            </div>
            <div className="ambi-instru-tarjeta ambi-instru-rojo">
              <h4>Dañados</h4>
              <span>3</span>
            </div>
            <div className="ambi-instru-tarjeta ambi-instru-naranja">
              <h4>Mantenimiento</h4>
              <span>2</span>
            </div>
          </div>
        </div>

        <section className="ambi-instru-section-table">
          <div className="ambi-instru-fil">
            <input type="search" placeholder="Filtrar por nombre..." className="ambi-instru-input-search" />
            <select className="ambi-instru-select">
              <option value="">Filtrar por estado</option>
              <option value="bueno">Buen estado</option>
              <option value="danado">Dañado</option>
              <option value="mantenimiento">Mantenimiento</option>
            </select>
          </div>

          <table className="ambi-instru-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Estado</th>
                <th>Usuario</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Computadora 1</td>
                <td className="ambi-instru-estado ambi-instru-bueno">Buen estado</td>
                <td>santiago chilito</td>
                <td><button className="ambi-instru-btns" id="reportar">reportar</button></td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      {/* Modal de Reporte */}
      <div id="miModal" className="ambi-instru-ver-detalles">
        <div className="ambi-instru-contenedor-modal">
          <span className="ambi-instru-close-btn">&times;</span>
          <h2>Formulario de Reporte</h2>
          <p className="ambi-instru-subtitulo">Complete el formulario</p>
          <form id="formReporte">
            <fieldset className="ambi-instru-fieldset">
              <legend>Información del equipo</legend>
              <div className="ambi-instru-form-row">
                <div className="ambi-instru-form-group">
                  <label htmlFor="nombre">Nombre del equipo:</label>
                  <input type="text" id="nombre" className="ambi-instru-campo" required />
                </div>
                <div className="ambi-instru-form-group">
                  <label htmlFor="codigo">Código del equipo:</label>
                  <input type="text" id="codigo" className="ambi-instru-campo" required />
                </div>
              </div>
            </fieldset>

            <fieldset className="ambi-instru-fieldset">
              <legend>Descripción del problema</legend>
              <div className="ambi-instru-form-row">
                <div className="ambi-instru-form-group">
                  <label htmlFor="estado">Estado:</label>
                  <select id="estado" className="ambi-instru-campo" required>
                    <option value="">Seleccione</option>
                    <option>Grave</option>
                    <option>Falla técnica</option>
                    <option>Crítico</option>
                  </select>
                </div>
                <div className="ambi-instru-form-group">
                  <label htmlFor="fecha">Fecha:</label>
                  <input type="date" id="fecha" className="ambi-instru-campo" required />
                </div>
              </div>
              <div className="ambi-instru-form-group">
                <label htmlFor="descripcion">Descripción:</label>
                <textarea id="descripcion" className="ambi-instru-campo-area" rows="3" required></textarea>
              </div>
            </fieldset>

            <fieldset className="ambi-instru-fieldset">
              <legend>Imagen</legend>
              <div className="ambi-instru-form-group ambi-instru-update">
                <label className="ambi-instru-subir-label">
                  Click para subir imagen
                  <input type="file" id="imagen" className="ambi-instru-campo" />
                </label>
              </div>
            </fieldset>

            <div className="ambi-instru-activar">
              <button type="button" className="ambi-instru-bt ambi-instru-cancel">Cancelar</button>
              <button type="submit" className="ambi-instru-bt ambi-instru-submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SeccionAmbientesInstru;