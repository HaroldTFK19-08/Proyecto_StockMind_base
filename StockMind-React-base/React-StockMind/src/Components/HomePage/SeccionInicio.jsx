import '../../StylesComponents/Home/SeccionInicio.css'
import Imagen_inicio from '../../assets/imagenInicio.png'

const SeccionInicio = () => {
  return (
    <>
    <section id="Inicio" className="seccion-inicio">
        <div className="inicio-contenedor">
            <div className="inicio-texto">
                <h1 className="titulo-principal">StockMind</h1>
                <p className="descripcion-inicio">
                    StockMind es un sistema de gestión de inventarios desarrollado para controlar, 
                    organizar y administrar de manera eficiente los bienes del <strong>SENA</strong>, 
                    permitiendo una gestión integral de los recursos institucionales.
                </p>
                </div>
                    <div className="imagen-inicio">
                        <img src={Imagen_inicio} alt="" />
                    </div>
                </div>
            </section>
    </>
  )
}

export default SeccionInicio
