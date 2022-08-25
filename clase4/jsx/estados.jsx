class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            contador:0,
            list:[]
        }
    }
    incrementar(){
        let cont = this.state.contador;
        cont++
        this.setState({contador:cont})
    }
    render(){
        return(
        <div>
            <h1>Nuestra lista de tareas {this.state.contador}</h1>
            <button 
            onClick={()=>this.incrementar()} 
            className="btn btn-primary">
                Incrementar
            </button>

            <Lista list={this.state.list}/>
            
        </div>
        )
    }
}
const Lista = (props) => {
    console.log(props.list);
    let lista = props.list.map((item,index) => {
        return (
            <li key={'p'+index} className="list-group-item">
                <p className="bg-info w-25">Pendiente<input type={'checkbox'}/></p>
                {item}
                <p className="bg-success bg-opacity-50 w-25">Listo<input type={'checkbox'}/></p>
                </li>
        )
    })
    return (
        <div>
            <h2 className="text-center">Lista dinamica</h2>
            <ul className="list-group list-group-flush">
                {lista}
            </ul>

        </div>

    )
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)