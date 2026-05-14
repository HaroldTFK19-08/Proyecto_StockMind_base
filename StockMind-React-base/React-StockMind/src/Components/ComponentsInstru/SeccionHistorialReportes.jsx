import '../../StylesComponents/StylesInstru/HistorialReportes.css';

const SeccionHistorialReportes = () => {
  return (
    <main className="histo-repor-main">
      <section className="histo-repor-container">
        <div className="histo-repor-top">
          <div>
            <h1>Historial de Reportes</h1>
            <p>Supervisión de incidencias y estado técnico</p>
          </div>
          <div className="histo-repor-stats">
            <p>REPORTES DEL MES</p>
            <h2>24</h2>
          </div>
        </div>
      </section>

      <section className="histo-repor-filters">
        <button className="histo-repor-filter-btn">Todos</button>
        <button className="histo-repor-filter-btn">Recientes</button>
        <button className="histo-repor-filter-btn">Urgentes</button>
        <div style={{ marginLeft: 'auto' }}>
          <button className="histo-repor-btn-export">Exportar PDF</button>
        </div>
      </section>

      <section className="histo-repor-table-container">
        <table className="histo-repor-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Equipo</th>
              <th>Ambiente</th>
              <th>Descripción</th>
              <th>Fecha</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#001</td>
              <td>PC-01</td>
              <td>Ambiente 1</td>
              <td>No enciende</td>
              <td>2024-06-01</td>
              <td>
                <span className="histo-repor-estado histo-repor-critico">crítico</span>
              </td>
            </tr>
            <tr>
              <td>#002</td>
              <td>PC-02</td>
              <td>Ambiente 1</td>
              <td>Falla de pantalla</td>
              <td>2024-06-03</td>
              <td>
                <span className="histo-repor-estado histo-repor-pendiente">pendiente</span>
              </td>
            </tr>
            <tr>
              <td>#003</td>
              <td>PC-03</td>
              <td>Ambiente 2</td>
              <td>Problema de red</td>
              <td>2024-06-05</td>
              <td>
                <span className="histo-repor-estado histo-repor-revision">revision</span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default SeccionHistorialReportes;