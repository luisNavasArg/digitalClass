import React from "react"
import Fecha from '../../modulos/Fecha'
import Reserva from '../../modulos/Reserva'
const Form=({reserva})=>{
    const consulta=(reserva)=>{
        let huesp = document.getElementById("huesped").value;
        let diaReserva = Fecha.fechaAtual(new Date(),Fecha.meses);
        let ingreso = Fecha.fechaIngEgres(reserva.ingreso,Fecha.meses)
        let egreso = Fecha.fechaIngEgres(reserva.egreso,Fecha.meses)
        let cantidad = reserva.estadia;
        let vencimiento = Fecha.getVencimiento(new Date(),Fecha.meses)
        let datos = {
            huesped:huesp,
            diaReserva:diaReserva,
            fingreso:ingreso,
            fsalida:egreso,
            cantDias:cantidad,
            vencimiento:vencimiento
        }
       
        Reserva.mostrarReserva(datos,reserva,Reserva.generarnumero(),"paquetes")
    }
    return(
        <div className="container">
            <div id="contenedor" className="row d-flex justify-content-center">
                <form className="row my-5 mr-0" onSubmit={()=>consulta(reserva)}>
                    <div className="col-12">
                        <h3 className="m-2 d-inline">Paquete a {reserva.paquete}</h3>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <label className="m-2 d-inline">Huésped</label>
                        <input type={'text'} id="huesped" className="form-control m-2 d-inline"/>
                    </div> 
                    <div className="col-md-4 col-sm-12">
                        <label className="m-2 d-inline">Desde</label>
                        <p>
                            {Fecha.fechaIngEgres(reserva.ingreso,Fecha.meses)}
                        </p>
                    </div> 
                    <div className="col-md-4 col-sm-12">
                        <label className="m-2 d-inline">Hasta</label>
                        <p>
                        {Fecha.fechaIngEgres(reserva.egreso,Fecha.meses)}
                        </p>
                    </div> 
                    <div className="col-md-4 col-sm-12">
                        <label className="m-2 d-inline">A disfrutar</label>
                        <p className="m-2 d-inline">{reserva.estadia}</p>
                    </div>
                    <div className="col-auto">
                        <input type={"submit"} className="btn-btn-primary m-3" 
                        value={"Consultar"}/>
                    </div>
                    
                </form>
                <div className="col-auto my-5">
                        <input id="btn" type={"button"} style={{opacity:0}} 
                        className="btn-btn-primary m-3" 
                        onClick={Reserva.confirmarReserva}
                        value={"Confirmar"}/>
                </div>
            </div>
        </div>
    )
    
}
export default Form
