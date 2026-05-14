import PanelLeft from '../../Components/Auth/PanelLeft'
import '../../StylesComponents/Auth/RecordInstructor.css'
import '../../StylesComponents/Global.css'
import PanelForm1 from "../../Components/Auth/PanelForm1"
import PanelForm from '../../Components/Auth/PanelForm'

const RecordInstructor = () => {
  return (
        <div className="Contenedor1">
            <div className="Subcontenedor1">
                <PanelLeft/>
                <PanelForm1/>
            </div>
        </div>
  )
}

export default RecordInstructor
