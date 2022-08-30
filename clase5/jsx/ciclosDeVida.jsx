const Formulario=(props)=>{
    return(
        <div>
            <form>
                <input type={'text'} id="nombre" placeholder="Ingresa nombre"/> 
                <input type={'text'} id="des" placeholder="Ingresa descripción"/> 
                <input type={'text'} id="precio" placeholder="Ingresa precio"/> 
                <input type={'text'} id="src" placeholder="Ingresa ruta de imagen"/> 
                <input type={'button'} onClick={props.metodo} value="Agregar Producto"/>
            </form>
            <button onClick={props.borrar}>Borrar</button>
        </div>
    )
}
const Lista=(props)=>{
    let products = props.productos.map((p,i)=>{
        return(
            <li key={i+'li'}>
                <h3>{p.nombre}</h3>
                <Producto/>
                <img src={p.src}/>
                <p>$ {p.precio}</p>
            <p>{p.des}</p>
            </li>
        )
    })
    return(<ul>
        {products}
        
    </ul>)
}
class Producto extends React.Component{
    constructor(props){
        super(props)
    }
    componentWillUnmount(){
        alert('El cliente recibió su pedido')
    }
    render(){
        return(<div>
            Pedido
        </div>)
    }
}
class Ciclo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            productos:[{
                nombre:"Tv 64 Pulgadas",
                des:"Tele de 64 Pulgadas",
                precio:'200000',
                src:'data:image/jpeg;base64,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'}]
        }
        this.borrar=this.borrar.bind(this)
    }
    componentDidMount(){
        alert('Se monto el componente')
    }
    borrar(){alert('borrar')
        this.setState({
            productos:[]
        })
    }
    componentWillUnmount(){
        alert('se desmonto el componente')
    }
    agregarProducto(){

    }
    mostrarProductos(){

    }
    render(){
        return(
            <div>
                <Formulario borrar={this.borrar} />
                <Lista productos={this.state.productos}/>
            </div>
        )
    }
}
ReactDOM.render(
    <Ciclo />,
    document.getElementById('root')
)