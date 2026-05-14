import '../../StylesComponents/StylesInstru/DashboardInstru.css'

const SeccionDashboardInstru = () => {
  return (
<main className="DashInstru-main">

      <section className="DashInstru-section">
        <div className="DashInstru-parte-inicial">
          <h1>Dashboard</h1>
          <p>Bienvenido al dashboard del instructor.</p>
        </div>
        
        <div className="DashInstru-barra">
          <div className="DashInstru-tarjetas">
            <div className="DashInstru-tarjeta DashInstru-azul">
              <h4>Ambientes</h4>
              <span>30</span>
            </div>
          </div>
          <div className="DashInstru-tarjetas">
            <div className="DashInstru-tarjeta DashInstru-rosa">
              <h4>Reportes</h4>
              <span>66</span>
            </div>
          </div>
        </div>
      </section>

      <br />

      <section className="DashInstru-section-graficos">
        <div className="DashInstru-parte-inferior">
          <h2>Gráficos y estadísticas</h2>
          <p>Aquí puedes agregar gráficos y estadísticas relevantes para el instructor.</p>
          <canvas id="myChart" className="DashInstru-canvas"></canvas>
        </div>
      </section>
    </main>
  )
}

export default SeccionDashboardInstru
