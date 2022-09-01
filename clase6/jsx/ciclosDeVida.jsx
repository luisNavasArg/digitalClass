class Turno extends React.Component {
    constructor(props) {
        super(props)
    }
    componentWillUnmount() {
        alert('Se eliminó un elemento de la lista');
    }
    componentDidMount(){
        alert('se agregó un turno nuevo')
    }
    render() {
        return (
            <p>Pendiente</p>
        )
    }

}
const Form = (props) => {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="nombreM" className="form-label">Nombre Mascota</label>
                <input type="text" className="form-control" id="nombreM" />
            </div>
            <div className="mb-3">
                <label htmlFor="nombreD" className="form-label">Nombre Dueño</label>
                <input type="text" className="form-control" id="nombreD" />
            </div>
            <div className="mb-3">
                <label htmlFor="edad" className="form-label">Edad</label>
                <input type="text" className="form-control" id="edad" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">email</label>
                <input type="text" className="form-control" id="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="especie" className="form-label">especie</label>
                <input type="text" className="form-control" id="especie" />
            </div>
            {props.agregar?<button type="button" onClick={props.addPaciente} className="btn btn-primary">Registrar Turno</button>:
            
            <div><input id="pos"/>
            <button type="button" onClick={()=>props.modificar(props.pos)} className="btn btn-primary">Modificar Turno</button></div>}
            
        </form>
    )
}
class Lista extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lista: [{
                nombreM:"Firulais",
                nombreD:"Luis",
                edad:4,
                email:"lpipnavas@gmail.com",
                especie:"Perro"
            }],
            numTurno: 0,
            agregar:true
        }
        this.addPaciente = this.addPaciente.bind(this)
        this.eliminar=this.eliminar.bind(this)
        this.mostrarDatos=this.mostrarDatos.bind(this)
    }
    addPaciente() {
        if(document.getElementById('nombreM').value== '' && 
        document.getElementById('nombreD').value==''&&
        document.getElementById('edad').value=='' &&
        document.getElementById('email').value=='' &&
        document.getElementById('especie').value=='' 
        
        ){
            return false
        }
        let info = {
            nombreM: document.getElementById('nombreM').value,
            nombreD: document.getElementById('nombreD').value,
            edad: document.getElementById('edad').value,
            email: document.getElementById('email').value,
            especie: document.getElementById('especie').value
        }


        let miLista = this.state.lista;
        let num = this.state.numTurno + 1;
        miLista = [...miLista, info]
        this.setState({ numTurno: num, lista: miLista })
        document.getElementById('nombreM').value='',
            document.getElementById('nombreD').value='',
            document.getElementById('edad').value='',
            document.getElementById('email').value='',
            document.getElementById('especie').value=''
    }
    eliminar(id){
        let miLista= this.state.lista;
        let newList = miLista.filter((item,i)=>item!=miLista[id])
        this.setState({lista:newList})
    }
    mostrarDatos(pos){
        alert(pos)
        let miTurno = this.state.lista[pos];
        document.getElementById('nombreM').value=miTurno.nombreM,
            document.getElementById('nombreD').value=miTurno.nombreD,
            document.getElementById('edad').value=miTurno.edad,
            document.getElementById('email').value=miTurno.email,
            document.getElementById('especie').value=miTurno.especie,
            
        this.setState({agregar:false})
        document.getElementById('pos').value=5
    }
    modificar(){
        let pos = document.getElementById('pos').value;
        alert(pos)
    
        let miLista= this.state.lista;
        let newList = miLista.filter((item,i)=>item!=miLista[id])
        this.setState({lista:newList})
    }
    render() {
        let lista = this.state.lista.map((item, i) => {
            return (
                <li className="bg-dark text-white p-3 m-3" key={i + 'mascota'}>
                    <p>
                    <span>Mascota: {item.nombreM}</span>
                    <span>Dueño/a: {item.nombreD}</span>
                    </p>
                    
                    <p><span>Edad: {item.edad}</span></p>
                    <p><span>Email : {item.email}</span></p>
                    <p><span>Especie:{item.especie}</span></p>
                    <Turno></Turno>
                    <button onClick={()=>this.mostrarDatos(i)}>Modificar</button>
                   
                    <button onClick={()=>this.eliminar(i)}>Atendido</button>
                </li>
            )
        })
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            {this.state.agregar?<Form agregar={this.state.agregar} addPaciente={this.addPaciente} />:
                            <Form  agregar={this.state.agregar} modificar={this.modificar} />    
                        }
                            
                        </div>
                        <div className="col-8">
                            <h3 className="text-center">Nuestros pacientes</h3>
                            <p className="text-center">Número de pacientes
                            <span className="bg-success m-2 p-2 text-white">{this.state.numTurno}</span></p>
                            <ul type="none">
                                {lista}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
const Ciclo = () => {
    return (
        <div>
            <Lista />
        </div>
    )
}
ReactDOM.render(
    <Lista />,
    document.getElementById('root')
)