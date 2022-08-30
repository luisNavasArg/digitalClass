const Boton=(props)=>{
    return(
        <button onClick={props.incrementar}>Iniciar</button>
    )
}
class Cronometro extends React.Component{
    constructor(props){
        super(props)
        this.state={
            segundos:59,
            minutos:59,
            horas:23,
            relojDigital:'',
            src:''
        }
    }
    incrementar(){
        
   
        setInterval(() => {
            let hora = new Date().toLocaleTimeString()
        this.setState({
            relojDigital:hora
        })
            
            if(this.state.segundos >=0 && this.state.segundos <=59){
                let num = this.state.segundos + 1;
                this.setState({
                    segundos:num
                })
            }
            if(this.state.segundos > 59){
                if(this.state.minutos >=0 && this.state.minutos <=59){
                    let min = this.state.minutos + 1;
                    this.setState({segundos:0,minutos:min})
                }
                if(this.state.minutos > 59){
                    if(this.state.horas >=0 && this.state.horas <=23){
                        let hor = this.state.horas + 1
                        this.setState(
                            {minutos:0, horas:hor}
                        )
                    }
                    if(this.state.horas>23){
                        this.setState({
                            segundos:0,
                            minutos:0,
                            horas:0,
                            src:'https://image.shutterstock.com/image-photo/realistic-fiery-explosion-over-black-260nw-435036721.jpg'
                        })

                    }
                }
            }
        }, 1000);
    }
    render(){    
        return(
    <div>
        <Boton incrementar={()=>this.incrementar()}/>
        <span className="m-3 p-3">Hora: {this.state.horas}</span> <span className="m-3 p-3">Minutos: {this.state.minutos}</span><span className="m-3 p-3">Segundos: {this.state.segundos}</span>
        <h2 className="text-center text-danger">{this.state.relojDigital}</h2>
        <img src={this.state.src}/>
    </div>
    )
}

}

ReactDOM.render(
    <Cronometro />,
    document.getElementById('root')
)