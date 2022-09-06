const Mishokks = () => {
    //     variable, método seterar la variable
    const [numero, setNumero] = React.useState(1);//numerico
    const [palabra,setPalabra] = React.useState('');//string
    const [mostrar,setMostrar]=React.useState(true);//boleano
    const [lista,setLista]=React.useState(["Luis","Pedro","José"]);
    const handleSubmit =(event)=>{
        event.preventDefault();
        let minum = numero + 1
        setNumero(minum)
        let miLista=[...lista,minum]
        setLista(miLista)
    }
    const handleChange=(ev)=>{
        let palabras = ev.target.value; 
        setPalabra(palabras)
    }
    const cambiarVista=()=>{
        if(mostrar){
            
            return setMostrar(false)
        }
        setMostrar(true)
    }
    return (
        <div className="text-center">
            <p>{palabra}</p>
            {numero}
            <Formulario palabra={palabra} handleSubmit={handleSubmit} handleChange={handleChange}/>
            <button onClick={cambiarVista}>Cambiar</button>
            {mostrar?<p>true</p>:<p>False</p>}
            {lista.map((e,i)=><li key={i.toString()}>{e}</li>)}
        </div>
        
    )
}
const Formulario = (props) => {
    return (
        <form className="w-50" onSubmit={props.handleSubmit}>
            <label>Acá tu elemento textarea</label>
            <div className="form-floating my-2">
                <textarea className="form-control"
                    onChange={props.handleChange}
                />
            </div>
            <input className="btn btn-primary" type="submit" />
        </form>
        
    )
}
ReactDOM.render(
    <Mishokks />,
    document.getElementById('root')
)