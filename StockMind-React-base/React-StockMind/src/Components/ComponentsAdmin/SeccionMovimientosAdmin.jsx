import React from 'react';
import '../../StylesComponents/StylesAdmin/MovimientosAdmin.css';

const SeccionMovimientosAdmin = () => {
  return (
    <main className="movimiento-main">
      <article className="movimiento-article">

        {/* Sección de Resumen (Cards) */}
        <section className="movimiento-cartas-contenedor">
          <div className="movimiento-card">
            <div>
              <h3>Movimientos Hoy</h3>
            </div>
            <div>
              <p className="movimiento-numero-resaltado">26</p>
            </div>
            <div>
              <p>+12 nuevos movimientos</p>
            </div>
          </div>

          <div className="movimiento-card">
            <div>
              <h3>Elementos trasladados</h3>
            </div>
            <div>
              <p className="movimiento-numero-resaltado">26</p>
            </div>
            <div>
              <p>+12% vs ayer</p>
            </div>
          </div>

          <div className="movimiento-card">
            <div>
              <h3>Elementos a movilizar</h3>
            </div>
            <div>
              <p className="movimiento-numero-resaltado">26</p>
            </div>
            <div>
              <p>Rastreo en tiempo real activo</p>
            </div>
          </div>

          <div className="movimiento-card">
            <div>
              <h3>Movimientos finalizados</h3>
            </div>
            <div>
              <p className="movimiento-numero-resaltado">26</p>
            </div>
            <div>
              <p>+20 recien llegados</p>
            </div>
          </div>
        </section>

        <section className="movimiento-seccion-info">
          {/* Formulario de Registro */}
          <div className="movimiento-formulario-contenedor">
            <div className="movimiento-titulo-form">
              <h2>Registrar Movimiento</h2>
              <p>Gestiona entradas y salidas del inventario</p>
            </div>
            <form action="" className="movimiento-form">
              <div className="movimiento-grupo-form">
                <label>Tipo de movimiento</label>
                <select>
                  <option>Seleccionar</option>
                  <option>Entrada</option>
                  <option>Salida</option>
                </select>
              </div>
              <div className="movimiento-grupo-form">
                <label>Nombre del elemento</label>
                <input type="text" placeholder="Ej: Laptop Dell" />
              </div>
              <div className="movimiento-grupo-form">
                <label>Categoría</label>
                <select>
                  <option>Seleccionar categoría</option>
                  <option>Equipos</option>
                  <option>Herramientas</option>
                  <option>Mobiliario</option>
                </select>
              </div>
              <div className="movimiento-grupo-form">
                <label>Cantidad</label>
                <input type="number" placeholder="0" />
              </div>
              <div className="movimiento-grupo-form">
                <label>Sede</label>
                <select>
                  <option>Seleccionar sede</option>
                  <option>Sede Norte</option>
                  <option>Sede Central</option>
                  <option>Sede Sur</option>
                </select>
              </div>
              <div className="movimiento-grupo-form">
                <label>Responsable</label>
                <input type="text" placeholder="Nombre del responsable" />
              </div>
              <div className="movimiento-grupo-form">
                <label>Fecha</label>
                <input type="date" />
              </div>
              <div className="movimiento-grupo-form">
                <label>Observaciones</label>
                <textarea placeholder="Escribe una observación..."></textarea>
              </div>
              <button type="submit" className="movimiento-btn-guardar">
                <i className="bi bi-floppy"></i>
                Guardar Movimiento
              </button>
            </form>
          </div>

          {/* Contenedor de Tablas */}
          <div className="movimiento-tablas-contenedor">
            {/* Tabla Entradas */}
            <div className="movimiento-entradas-tabla">
              <div className="movimiento-header-tabla">
                <h3>Entradas</h3>
                <button className="movimiento-btn-ver">Ver todo</button>
              </div>
              <table className="movimiento-table">
                <thead>
                  <tr>
                    <th>Elemento</th>
                    <th>Cantidad</th>
                    <th>Fecha</th>
                    <th>Responsable</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Laptop Dell</td>
                    <td>5</td>
                    <td>12/05/2026</td>
                    <td>Carlos Ruiz</td>
                  </tr>
                  <tr>
                    <td>Mouse Logitech</td>
                    <td>12</td>
                    <td>12/05/2026</td>
                    <td>Laura Pérez</td>
                  </tr>
                  <tr>
                    <td>Monitor Samsung</td>
                    <td>3</td>
                    <td>11/05/2026</td>
                    <td>Admin SENA</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Tabla Salidas */}
            <div className="movimiento-salidas-tabla">
              <div className="movimiento-header-tabla">
                <h3>Salidas</h3>
                <button className="movimiento-btn-ver">Ver todo</button>
              </div>
              <table className="movimiento-table">
                <thead>
                  <tr>
                    <th>Elemento</th>
                    <th>Cantidad</th>
                    <th>Fecha</th>
                    <th>Responsable</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Teclado HP</td>
                    <td>2</td>
                    <td>12/05/2026</td>
                    <td>Camila López</td>
                  </tr>
                  <tr>
                    <td>Proyector Epson</td>
                    <td>1</td>
                    <td>10/05/2026</td>
                    <td>Jorge Ruiz</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default SeccionMovimientosAdmin;