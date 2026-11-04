import { Link } from "react-router-dom"
import imagen1 from '../assets/img/imagen1.png'
import NavBar from "../components/Navbar"


let NotFound = () =>{

    return(
        <>
          <NavBar/>
          <div className="bg-dark vh-100 d-flex flex-column justify-content-center align-items-center">
            <img src={imagen1} className="rounded-4" alt="" />
            <Link to='/' className="text-light fs-3 mt-3">Ir a la pagina principal</Link>
          </div>
        </>
    )

}

export default NotFound