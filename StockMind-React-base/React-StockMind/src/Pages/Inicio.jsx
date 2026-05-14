import Header from '../Components/GlobalComponents/Header'
import SeccionInicio from '../Components/HomePage/SeccionInicio'
import SeccionNosotros from '../Components/HomePage/SeccionNosotros'
import SeccionServicios from '../Components/HomePage/SeccionServicios'
import SeccionContacto from '../Components/HomePage/SeccionContacto'
import Footer from '../Components/GlobalComponents/Footer'

import '../StylesComponents/Home/Inicio.css'
const Inicio = () => {
  return (
    <div className='body_inicio'>
        <Header/>
        <SeccionInicio/>
        <SeccionNosotros/>
        <SeccionServicios/>
        <SeccionContacto/>
        <Footer/>
    </div>
  )
}

export default Inicio
