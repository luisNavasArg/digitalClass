import { useState,useEffect } from "react"
import Seleccion from '../modulos/Seleccion'
import Ubicacion from '../modulos/Ubicacion'
import Fecha from '../modulos/Fecha'
import Form from '../components/Form/FormPaquetes'
const Paquetes=({paquetes})=>{
    const [desde,setDesde]= useState([])
    let ubi = Ubicacion.obtenerUbicacion(paquetes)
    const [reserva,setReserva]=useState([])
    useEffect(()=>{
        setDesde([])
        setReserva([])
    },[])
    if(reserva.length !== 0){
        return <Form reserva={reserva}/>
    }else{
    return(
        
        <div className="container my-5">
            <h2 className="text-center">Paquetes</h2>
            <div className="form-floating my-5 w-50">
                    <select onChange={()=>setDesde(
                        Seleccion.mostrarSeleccion(paquetes,"floatingSelect"))}
                        className="form-select" id="floatingSelect"
                        aria-label="Floating label select example"
                        >
                          <option id="texto" value="ninguno">
                            Ningún lugar
                            </option> 
                            {ubi.map((ubi,index)=>{
                                return <option id="texto" key={index.toString() + "op"}
                                value={ubi}
                                >
                                    {ubi}
                                </option>
                            })

                            } 
                    </select>
                    <label htmlFor="floatingSelect">
                        Seleccioná la salida
                    </label>
                </div>
                <div className="row my-3">
                    {desde.map((ofer,index)=>{
                       
                        return <div key={ofer.nombre+index} className="col-sm-12 col-md-4 col-ls-4">
                            <img src={ofer.src} className="w-100" alt={ofer.nombre}/>
                            <h6 className="bg-info text-center w-50">
                                {ofer.estadia}
                            </h6>
                            <h5 className="card-header text-center my-3">
                                Paquete a {ofer.paquete}
                            </h5>
                            <div className="card-body">
                            <h6 className="card-title">
                                Desde {Fecha.fechaIngEgres(ofer.ingreso,Fecha.meses)}
                            </h6>
                            <h6 className="card-title text-center">
                                Hasta {Fecha.fechaIngEgres(ofer.egreso,Fecha.meses)}
                            </h6>
                            <hr className="text-info"></hr>
                            <p>Precio final Por persona</p>
                            <h5 className="card-title text-center">
                                $ {ofer.costo}
                            </h5>
                            <p><b>Responsable</b>{ofer.nombre}</p>
                            <h5 className="card-title text-center">
                            Servicios
                            </h5>
                            <ul>
                                {ofer.servicio.map((hte)=>{
                                    return <li key={hte+"li"}>
                                        {hte}
                                    </li>
                                })}
                            </ul>
                            <button onClick={()=>setReserva(ofer)}
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
export default Paquetes
