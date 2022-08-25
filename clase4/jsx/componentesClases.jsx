class ToList extends React.Component {
    constructor(props) {
        super(props)
        this.list = [
            "Siempre el nombre comienza con mayúsculas",
            "Heredan de React.Component",
            "Crear el constructor",
            "Invocar las propiedades de la clase padre",
            "Creamos las propiedades",
            "Creamos el método render",
            "Creamos el método return",
            "Invocamos la propiedad ReactDOM",
            "Usamoe el método render"
        ]
    }
    render() {
        return (
            <div>
                <Lista list={this.list} />
            </div>
        )
    }
}
const Lista = (props) => {
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
            <h2 className="text-center">Mis pasos para crear un Componente de Clase</h2>
            <ul className="list-group list-group-flush">
                {lista}
            </ul>

        </div>

    )
}
let contador=0;
const incrementar=()=>{
    contador++
    console.log(contador);
}
const Saludar=()=>{
    return(
        <div>
{contador}
        <h3 onClick={()=>incrementar()}>Hola</h3>
        </div>
        
    )
}
ReactDOM.render(
    <div>
        <Saludar/>
        <ToList />
    </div>
    ,
    document.getElementById('root')
)