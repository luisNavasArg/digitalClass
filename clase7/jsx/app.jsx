class Formulario extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value:'Mi valor inicial'
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        
    }
    handleChange(event){
        this.setState({value:event.target.value})
    }
    handleSubmit(event){
        alert('Ha sido cambiado el valor del estado  '+ this.state.value)
        event.preventDefault();
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <form className="w-50" onSubmit={this.handleSubmit}>
                        <label>Acá tu elemento textarea</label>
                        <div className="form-floating my-2">
                            <textarea className="form-control"
                            onChange={this.handleChange}
                            />
                        </div>
                        <input className="btn btn-primary" type="submit"/>
                    </form>
                    <div className="w-40">
                    {this.state.value}
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="cuadro bg-info m-1"></div>
                    <div className="cuadro bg-info m-1"></div>
                    <div className="cuadro bg-info m-1"></div>
                    <div className="cuadro bg-info m-1"></div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="cuadro bg-info m-1"></div>
                    <div className="cuadro bg-info m-1"></div>
                    <div className="cuadro bg-info m-1"></div>
                    <div className="cuadro bg-info m-1"></div>
                    <div className="cuadro bg-info m-1"></div>
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <Formulario/>,
    document.getElementById('root')
)