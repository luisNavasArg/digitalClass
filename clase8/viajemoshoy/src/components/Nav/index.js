import { Link } from "react-router-dom";
import logo from '../../logo.svg'
const Nav=()=>{
    return(
        <div className="navbar navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" width="30" height={"24"}/>
            </Link>
        <nav>
        <ul className="d-flex text-dark list-unstyled bg-info rounded-start">
            <li className="nav-item"><Link className="nav-link text-dark" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link text-dark" to="/hoteles">Hoteles</Link></li>
            <li className="nav-item"><Link className="nav-link text-dark" to="/ofertas">ofertas</Link></li>
            <li className="nav-item"><Link className="nav-link text-dark" to="/paquetes">paquetes</Link></li>
            <li className="nav-item"><Link className="nav-link text-dark" to="/traslados">traslados</Link></li>
            <li className="nav-item"><Link className="nav-link text-dark" to="/aereo">aereos</Link></li>
        </ul>
            
        </nav>
        </div>
    )
}
export default Nav
