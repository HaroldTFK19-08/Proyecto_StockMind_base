import '../../StylesComponents/StylesAdmin/Centro03.css'

const SeccionCentro03 = () => {
  // 1. Definimos los datos específicos del Centro Agropecuario
  const ambientesAgro = [
    {
      id: "101",
      nombre: "Ambiente 101",
      area: "SOFTWARE",
      capacidad: 45,
      equipos: 27,
      otros: 18,
      estado: "ACTIVO",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZxMxyxMnx8W5DA8Y0_svarvPAOBdobOqnw&s"
    },
    {
      id: "102",
      nombre: "Ambiente 102",
      area: "SOFTWARE",
      capacidad: 45,
      equipos: 27,
      otros: 18,
      estado: "ACTIVO",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZxMxyxMnx8W5DA8Y0_svarvPAOBdobOqnw&s"
    },
    {
      id: "202",
      nombre: "Ambiente 202",
      area: "SOFTWARE",
      capacidad: 45,
      equipos: 27,
      otros: 18,
      estado: "ACTIVO",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZxMxyxMnx8W5DA8Y0_svarvPAOBdobOqnw&s"
    },
    // Puedes seguir agregando más objetos aquí según necesites...
  ];

  return (
    <main className="main-centro03">
      {/* SECCIÓN INICIAL: Título y Botones */}
      <section className="parte-inicial-centro03">
        <div>
          <h1>Centro Agropecuario</h1>
          <p>Ambientes pertenecientes a este centro de formación</p>
        </div>
        <div>
          <button className="boton-filtro-centro03">
            <i className="bi bi-filter-left icono-boton"></i>Filtrar
          </button>
          <button className="boton-agregar-centro03">+ Agregar Ambiente</button>
        </div>
      </section>

      {/* SECCIÓN DE TARJETAS: Usando .map() */}
      <section className="seccion-tarjetas-centro03">
        <div className="tarjetas-centro03">
          {ambientesAgro.map((ambiente) => (
            <div className="tarjeta-centro03" key={ambiente.id}>
              
              <div className="tarjeta-cabecera-centro03">
                <img 
                  src={ambiente.imagen} 
                  alt={ambiente.nombre} 
                  className="tarjeta-imagen-centro03" 
                />
                <span className={`estado-centro03 ${ambiente.estado === 'ACTIVO' ? 'activo-centro03' : 'mantenimiento-centro03'}`}>
                  ● {ambiente.estado}
                </span>
              </div>

              <div className="tarjeta-cuerpo-centro03">
                <div className="fila-titulo-centro03">
                  <div className="grupo-titulo-centro03">
                    <h3 className="titulo-ambiente-centro03">{ambiente.nombre}</h3>
                    <p className="subtitulo-ambiente-centro03">{ambiente.area}</p>
                  </div>
                  <div className="grupo-capacidad-centro03">
                    <span className="capacidad-numero-centro03">{ambiente.capacidad}</span>
                    <span className="capacidad-etiqueta-centro03">TOTAL</span>
                  </div>
                </div>

                <div className="lista-equipos-centro03">
                  <div className="item-equipo-centro03">
                    <div className="info-equipo-centro03">
                      <i className="bi bi-laptop icono-equipo"></i>
                      <span className="nombre-equipo-centro03">Equipos de cómputo</span>
                    </div>
                    <span className="cantidad-equipo-centro03">{ambiente.equipos}</span>
                  </div>
                  <div className="item-equipo-centro03">
                    <div className="info-equipo-centro03">
                      <i className="bi bi-box-seam"></i>
                      <span className="nombre-equipo-centro03">Otros elementos</span>
                    </div>
                    <span className="cantidad-equipo-centro03">{ambiente.otros}</span>
                  </div>
                </div>
              </div>

              <div className="tarjeta-pie-centro03">
                <a href="#" className="boton-accion-centro03">
                  Ver Equipos Asignados
                  <i className="bi bi-arrow-right flecha"></i>
                </a>
              </div>

            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default SeccionCentro03;