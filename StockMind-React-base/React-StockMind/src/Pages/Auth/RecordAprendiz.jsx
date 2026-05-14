import PanelForm1 from "../../Components/Auth/PanelForm1"
import PanelForm from "../../Components/Auth/PanelForm"
import PanelAprendiz from "../../Components/Auth/PanelAprendiz"

import '../../StylesComponents/Auth/RecordAprendiz.css'
import '../../StylesComponents/Global.css'
const RecordAprendiz = () => {
  return (
        <div className="pantalla1">
            <div className="contenedorPantalla1">
                <PanelAprendiz/>
                <PanelForm1/>
            </div>
        </div>
  )
}

export default RecordAprendiz
