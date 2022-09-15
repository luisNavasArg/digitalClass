import { useEffect,useState } from "react";
import Form from '../components/Form/index'
import Seleccion from '../modulos/Seleccion'
import Ubicacion from '../modulos/Ubicacion'

const Hoteles=({hoteles})=>{
    const [ubi,setUbi] = useState([]);
    const [reserva,setReserva]=useState([]);
    let ubicacion = Ubicacion.obtenerUbicacion(hoteles)
    useEffect(()=>{
        setReserva([])
        setUbi([])
    },[])
    if(reserva.length !==0){return <Form reserva={reserva}/>}else{
        return(
            <div className="container my-5">
                <h2 className="text-center">
                    Hoteles
                </h2>
                <div className="form-floating my-5 w-50">
                    <select onChange={()=>setUbi(
                        Seleccion.mostrarSeleccion(hoteles,"floatingSelect"))}
                        className="form-select" id="floatingSelect"
                        aria-label="Floating label select example"
                        >
                          <option id="texto" value="ninguno">
                            Ningún lugar
                            </option> 
                            {ubicacion.map((ubi,index)=>{
                                return <option id="texto" key={index.toString() + "op"}
                                value={ubi}
                                >
                                    {ubi}
                                </option>
                            })

                            } 
                    </select>
                    <label htmlFor="floatingSelect">
                        Seleccioná por ubicación
                    </label>
                </div>
                <div className="row my-3">
                    {ubi.map((hotel)=>{
                        let src=`https://pruebagcd.herokuapp.com/${hotel.ruta}`
                        return <div key={'h'+hotel.nombre} className="col-sm-12 col-md-4 col-ls-4">
                            <img src={src} className="w-100" alt={hotel.nombre}/>
                            <h5 className="card-header text-center my-3">
                                {hotel.nombre}
                            </h5>
                            <div className="card-body">
                            <h5 className="card-title text-center">
                                {hotel.ubicacion}
                            </h5>
                            <p className="card-text text-justify">
                                {hotel.info}
                            </p>
                            <h5 className="card-title text-center">
                            Servicios
                            </h5>
                            <ul>
                                {hotel.servicio.map((hte)=>{
                                    return <li key={hte+"li"}>
                                        {hte}
                                    </li>
                                })}
                            </ul>
                            <button onClick={()=>setReserva(hotel)}
                            className="btn btn-primary"
                            >   Crear Reserva

                            </button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
export default Hoteles
