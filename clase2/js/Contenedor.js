class Hoteles {
    //caracteristicas
    //color, forma, tamaño,botones,rueda
    //responsalibilidades o comportamientos
    //click, move, eventos
    //hoteles=[]
    nombre='';
    direccion={}
    telefono=0
    email=''
    redes=[]
    canthab=0
    static reservas=0
    static ingreso=0

    constructor(n,direccion,telefono,email,redes,canthab){
        this.nombre=n;
        this.direccion=direccion;
        this.telefono=telefono;
        this.redes=redes
        this.email=email,
        this.canthab=canthab
    }
    crearReserva(monto){
        if(this.canthab > 0){
            this.canthab--
            Hoteles.reservas++
            Hoteles.ingreso+= monto * 0.10;
            return `Se realizó el hospedaje quedan ${this.canthab} `
        }else{
            return `No hay habitaciones disponibles para ${this.nombre}`
        }
        
    }
    static getIngresos(){
        return Hoteles.ingreso;
    }
    hospedar(){
        if(this.canthab > 0){
            this.canthab--
            return `Se realizó el hospedaje quedan ${this.canthab} `
        }else{
            return `No hay habitaciones disponibles para ${this.nombre}`
        }
    }
}
//objeto literal

let elemnto = document.getElementById("principal");
let hilton = new Hoteles('Hilton',{ciudad:'Buenos Aires'},11703887410,'hiltonbe@gmail.com',['instagram','facebook'],6);
let baCentro = new Hoteles('baCentro',{ciudad:'Buenos Aires'},11703887410,'baCentrobe@gmail.com',['instagram','facebook'],3);

// for (let i = 0; i < 8; i++) {
//    elemnto.innerHTML += ` <p class='azul'>${hilton.hospedar()}</p>`
//    elemnto.innerHTML += ` <p>${baCentro.hospedar()}</p>`
    
// }
elemnto.innerHTML +=`<p>${hilton.crearReserva(25000)}</p>`;
elemnto.innerHTML +=`<p>${hilton.crearReserva(25000)}</p>`;
elemnto.innerHTML +=`<p>${hilton.crearReserva(25000)}</p>`;
elemnto.innerHTML +=`<p>${hilton.crearReserva(25000)}</p>`;
elemnto.innerHTML +=`<p>${hilton.crearReserva(25000)}</p>`;
elemnto.innerHTML +=`<p>${baCentro.crearReserva(25000)}</p>`;
elemnto.innerHTML +=`<p>${baCentro.crearReserva(25000)}</p>`;
elemnto.innerHTML +=`<p>${baCentro.crearReserva(25000)}</p>`;
elemnto.innerHTML +=`<p>${baCentro.crearReserva(25000)}</p>`;
elemnto.innerHTML +=`<p>${baCentro.crearReserva(25000)}</p>`;
elemnto.innerHTML +=`<p>${baCentro.crearReserva(25000)}</p>`;
elemnto.innerHTML +=`<p>${baCentro.crearReserva(25000)}</p>`;
elemnto.innerHTML += `Hay ${Hoteles.reservas} reservas`
elemnto.innerHTML += `<p>Los ingresos fueron: ${Hoteles.getIngresos()}</p>`
// console.log(hilton.hospedar());
// console.log(hilton.hospedar());
// console.log(hilton.hospedar());
// console.log(hilton.hospedar());
// console.log(hilton.hospedar());
// console.log(hilton.hospedar());
// console.log(hilton.hospedar());
// console.log(baCentro.hospedar());
// console.log(baCentro.hospedar());
// console.log(baCentro.hospedar());
// console.log(baCentro.hospedar());
// console.log(baCentro.nombre);
// console.log(baCentro);