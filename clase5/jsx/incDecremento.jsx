const Boton=(props)=>{
    return(
        <button className={props.tipo} onClick={props.metodo}>{props.uso}</button>
    )
}
class Cronometro extends React.Component{
    constructor(props){
        super(props)
        this.state={
            numero:0
        }
        this.incrementar=this.incrementar.bind(this)
        this.decrementar=this.decrementar.bind(this)
    }
    incrementar(){ 
        let num = this.state.numero + 1
        //método
        this.setState({numero:num})

    }
    decrementar(){
        let num = this.state.numero - 1
        //método
        this.setState({numero:num})
    }
    render(){   
        //desestructuración y spreat operator
    const [a,b,...rest]=[25,36,720,45,36,95]
    const sumar=(a,b,...rest)=>{
        if(rest.length==0){
            return a+b
        }else{
            let total=0
            rest.filter(num=>total+=num)
            return a + b + total
        }
       
    }
        // alert(sumar(4,3,9,12)) 
    let array =[78]
    array=[25,36,...array]
    alert(array)
        return(
    <div>
        <div className="text-center">{this.state.numero}</div>
        <Boton metodo={this.incrementar} uso='Incrementar' tipo='btn btn-success m-3'/>
        <Boton metodo={this.decrementar} uso='Decrementar' tipo='btn btn-danger m-3'/>
    </div>
    )
}

}

ReactDOM.render(
    <Cronometro />,
    document.getElementById('root')
)