let usu = {
    usuario:"Luis",
    clave:"123456"
}
let ingresa = <p>Ingresaste de manera satisfactoria! ``</p>
let error = `La clave o el usuario es incorrecta ${usu.usuario}`
let ing = false;
const enviar=()=>{
    let usuario = document.getElementById('usuario').value;
    let clave = document.getElementById('clave').value;
    if(usuario=== usu.usuario && clave === usu.clave){
        ing=true
        console.log(ing);
    }
    console.log(ing);
}
const formulario = <form >
    <div className="mb-3" >
        <label className="text-white mx-4">Usuario</label>
        <input id={"usuario"} type={"text"} />
    </div>
    <div className="mb-3">
        <label className="text-white mx-4">Clave</label>
        <input type={"password"} id={"clave"} />
    </div>
    <div className=" justify-content-end">
        <input type="button" onClick={()=>enviar()} value="Ingresar" />
    </div>
    <p style={{fontSize:"30px",backgroundColor:"blue"}}>Hola</p>
</form>

ReactDOM.render(<div className="col-6 bg-dark m-4 p-4">{formulario}<p className={"text-white"}>{error}</p></div>, document.getElementById('root'))