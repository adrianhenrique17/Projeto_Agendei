import Navbar from "../../componentes/navbar/navbar.jsx";
import { Link } from "react-router-dom";
import {doctors} from "../../constants/data.js";

function Appointments (){
    return <div className="container-fluid mt-page">
    <Navbar />
    <div className="d-flex justify-content-between align-items-center">
    <div>
        <h2 className="d-inline"> Agendamentos</h2>
        <Link to="/Appointments/add" 
            className="btn btn-outline-primary ms-5 mb-2">  
            Novo Agendamento
        </Link>
        </div>

        <div className="d-flex justify-content-end">
            <input id="startDate" className="form-control" type="date"  />
            <span className="m-2 ">Até</span>
            <input id="endDate" className="form-control" type="date" />

            <div className="form-control ms-3 me-3">
                <select name="doctor" id="doctor">
                    <option value=""> Todos os médicos </option>

                    {
                        doctors.map ((doc) => {
                            return <option value={doc.id_doctor}> {doc.name} </option>
                        })
                    }
                </select>
            </div>
                <button className="btn btn-primary "> Filtar </button>
        </div>
    </div>

    <div>
        
    </div>             

</div>
}

export default Appointments;