const alumno = {
    //clave:valor
    name:"Luis",
    lastname:"Navas",
    mostrarNombreCompleto:()=>{
        return `${alumno.name} ${alumno.lastname}`
    }
}
let admin = true
const cambiarAdiministrador=()=>{
    admin=false
}
const saludo =<h1>Hola, {admin?alumno.mostrarNombreCompleto():<p>No eres administrador</p>}</h1>
const boton =<button onClick={cambiarAdiministrador()} >Cambiar</button>
//              lo que quiero imprimir, donde lo quiero imprimir
ReactDOM.render(<div>{saludo}{boton}</div>, document.getElementById('root'))
//objeto console . invocar una función
// let saludo = "Hola, cómo están?"
// console.log('muestra en la consola la info')
// console.log(saludo);

// document.getElementById('root').innerHTML=`<h1>Hola Mundo!</h1>`

