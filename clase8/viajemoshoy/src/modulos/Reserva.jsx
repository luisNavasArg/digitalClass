module.exports={
    generarnumero:()=>{
        let numero = ``;
        for (let a = 0; a < 17; a++) {
            numero+=Math.floor(Math.random()*9)
        }
        return numero;
    },
    mostrarReserva:(obj,a,num,v)=>{
        let numReserva=num;
        let servicios=``;
        a.servicio.forEach((element)=>{
            servicios+=`<li>${element}</li>`
        })
        let img ="", tarifa="",total=0;
        img="https://pruebagcd.herokuapp.com/"+a.ruta;
        tarifa = obj.precio/obj.cantDias;
        total=obj.precio;
        let btn=document.getElementById('btn');
        btn.style.opacity=1;
        document.querySelector("#contenedor").innerHTML=`
        <div class="row d-flex justify-content-center my-5">
            <header class="col-12">
            <h3 class="text-center bg-dark text-white"> ${a.nombre}</h3>
            <img src=${img} width="250px" />
            </header>
            <h3 class="text-center">
                Pre-Reserva N° ${numReserva} 
            </h3>

            <form class="row my-5 mr-0" action="#">
                <table class="table>
                    <thead>
                        <tr>
                            <th scope="col">HUÉSPED</th>
                            <th scope="col"> ${obj.huesped}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th >FECHA:</th>
                            <td >${a.ubicacion} ${obj.diaReserva}</td>
                        </tr>
                        <tr>
                            <th >VENCIMIENTO</th>
                            <td >${a.ubicacion} ${obj.vencimiento}</td>
                        </tr>
                        <tr>
                            <th >CHECK IN:</th>
                            <td > ${obj.fingreso} - 14:30 Hs</td>
                        </tr>
                        <tr>
                            <th >CHECK OUT:</th>
                            <td > ${obj.fsalida} - 10:30 Hs</td>
                        </tr>
                        <tr>
                            <th >ESTADÍA:</th>
                            <td > ${obj.cantDias} </td>
                        </tr>
                        <tr>
                            <th >TARIFA POR NOCHE:</th>
                            <td > ${tarifa} </td>
                        </tr>
                        <tr>
                            <th >SERVICIOS:</th>
                            <td > <ul>${servicios}</ul> </td>
                        </tr>
                        <tr>
                            <th >TOTAL:</th>
                            <td >$ ${total}</td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <div class="my-5">
                ${a.direccion}
            </div>
        </div>
        `
    },
    confirmarReserva:()=>{
        document.querySelector(".container").innerHTML=`
        
        <div class="alert alert-success" role="alert">
            Su reserva se genero de manera satisfactoria!
        </div>
        <div class="col-auto my-5">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a id="btn" type="button" class="nav-link m-3 my-5" href="/hoteles">
                    Volver
                </a></li>
            </ul>
        </div>

        `
    },
    calcularTarifa:(cantDias,mes)=>{
        let fecha = new Date(mes);
        let miMes = Number(fecha.getMonth())+1;
        let precio=0;
        if(miMes > 0 && miMes < 3){
            precio=8000
        }else if(miMes > 3 && miMes < 6){
            precio=6000
        }
        else if(miMes > 5 && miMes < 8){
            precio=8000
        }
        else if(miMes > 7 && miMes < 13){
            precio=6000
        }
        return cantDias * precio
    }
}