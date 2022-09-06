const MostrarHoteles=(props)=>{
    
    return(
        <div className="container">
            <div className="row my-5">
                {props.hoteles.map((hotel)=>{
                    let srcImg = `https://pruebagcd.herokuapp.com/${hotel.ruta}`
                    return(
                    <div className="col-4">
                         <img src={srcImg} alt={hotel.nombre} className="w-100"/>
                         <h5 className="card-header text-center">{hotel.nombre}</h5>
                         <div className="card-body">
                            <h5 className="card-title">{hotel.ubicacion}</h5>
                            <p className="card-text text-justify">{hotel.info}</p>
                            <ul>
                                {hotel.servicio.map((servicio)=>{
                                    return(
                                        <li>{servicio}</li>
                                    )
                                })}
                            </ul>
                         </div>
                         
                    </div>
                    )
                })}
            </div>
        </div>
    )
}
class Hoteles extends React.Component {
    constructor(props) {
        super(props)
        this.hoteles = [
            { "nombre": "Hotel de Bosque", "email": "delbosqu@gmail.com", "ubicacion": "Pinamar", "direccion": "Av. Arquitecto Jorge Bunge 1550, B7167 Pinamar, Provincia de Buenos Aires", "telefono": "011 4394-9605", "info": "Ubicado en la pequeña ciudad de Pinamar, a 360 km de Buenos Aires, y ofrece una gran combinación de vegetación exuberante y playas de arena", "servicio": ["Cancha de tennis", "Zona privada de playa", "Pileta climatizada", "Wi-fi gratis", "Spa"], "ruta": "upload_7a157dccea5c520edf1e997354b59bc8_bosque3.png", "id": 1 }, { "nombre": "Hotel Tunquelén", "email": "tunquelebariloche@gmail.com.ar", "ubicacion": "Bariloche", "direccion": " Av. Exequiel Bustillo 24500, San Carlos de Bariloche, Río Negro", "telefono": "011 4394-9605", "info": "Tunquelén es un histórico hotel en Bariloche, a orillas del lago Nahuel Huapi, rodeado de naturaleza y a sólo 24 kilómetros de la ciudad.", "servicio": ["Cancha de tennis", "Zona privada de playa", "Pileta climatizada", "Wi-fi gratis", "Spa"], "ruta": "upload_79a55dabe8a28241e9206b53e97a902f_tunquelen.jpg", "id": 2 }, { "nombre": "Hostería Isla Victoria", "email": "islavictoria@gmail.com", "ubicacion": "Bariloche", "direccion": "Isla Victoria, en el lago Nahuel Huapi, en el corazón de la Patagonia Argentina", "telefono": "0054 11 4394 9605", "info": "Los invitamos a explorar y descubrir la naturaleza prístina del corazón del Parque Nacional Nahuel Huapi.  La experiencia comienza al navegar el Lago Nahuel Huapi con vista imponente de la Cordillera de los Andes.  Desde la exclusividad y confort de la Hostería Isla Victoria, la vivencia continúa en un programa de alojamiento que incluye todas las comidas y las actividades guiadas.", "servicio": ["Cancha de tennis", "Zona privada de playa", "Pileta climatizada", "Wi-fi gratis", "Spa"], "ruta": "upload_5fb8253b3b0733ac7f7ce4f3c56678cf_victoria.png", "id": 3 }]
    }
    render() {
        return (
            <div>
                <Menu hoteles={this.hoteles}/>                
            </div>
        )
    }
}
const Header=()=>{
    return(
        <div className="container">
            <div className="row">
                <img src="https://isla-victoria-lodge.hotelesenpatagonia.com/data/Photos/r1920x1080/9512/951265/951265765.JPEG" className="w-100 altura"/>
            </div>
        </div>
    )
}
const Menu = (props) => {
    return (
        <div>
            <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
                <a className="navbar-brand" href="#">Viajemos</a>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading1">Hoteles</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading2">Traslados</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Paquetes</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#scrollspyHeading3">3 Días y 4 Noches</a></li>
                            <li><a className="dropdown-item" href="#scrollspyHeading4">Aereo Traslado y Hospedaje</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#scrollspyHeading5">7 Noches y 5 días</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <Header></Header>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
                <h4 id="scrollspyHeading1">Hoteles</h4>
                <MostrarHoteles hoteles={props.hoteles}/>
            </div>
                
                <Traslados/>
                <Paquetes></Paquetes>
                <Aereo/>
                <h4 id="scrollspyHeading5">7 Noches y 5 Días</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatum reprehenderit adipisci! Eos natus voluptate quaerat minima saepe illo eius nisi quia? Sunt incidunt aspernatur minima vitae illum, reiciendis repellat.</p>
            </div>
       
    )
}
const Traslados=()=>{
    return(
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
        <h4 id="scrollspyHeading2">Traslados</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatum reprehenderit adipisci! Eos natus voluptate quaerat minima saepe illo eius nisi quia? Sunt incidunt aspernatur minima vitae illum, reiciendis repellat.</p>
        </div>
    )
}
const Paquetes=()=>{
    return(
        <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
        <h4 id="scrollspyHeading3">3 Días y 4 Noches</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatum reprehenderit adipisci! Eos natus voluptate quaerat minima saepe illo eius nisi quia? Sunt incidunt aspernatur minima vitae illum, reiciendis repellat.</p>
        </div>
    )
}
const Aereo=()=>{
    return(
        <div data-bs-spy="scroll" data-bs-target="#navbar-example4" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
        <h4 id="scrollspyHeading4">Aereo Traslados y Hospedaje</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, unde. Veniam iure accusantium laborum necessitatibus. Iste facilis quas accusantium magni vel at, nobis mollitia illo nisi error nam, repudiandae ab.</p>
        </div>
    )
}
ReactDOM.render(
    <Hoteles/>,
    document.getElementById('root')
)