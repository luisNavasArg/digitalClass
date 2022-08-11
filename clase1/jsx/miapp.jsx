let nombre="Luis";
  const saludo =<h1>Hola {nombre}</h1>
  const saludamos=()=><h2>Hola a todos y todas</h2>
  const alumno ={
    nombre:"Juan",
    apellido:"Pérez"
  }
  const mostrar=()=>alert('hola')

  let todo = <div 
  onClick={mostrar}//camellCase
  style={{backgroundColor:"blue",width:"500px",color:"white"}}
  >
    {alumno.nombre} {alumno.apellido}
    <input type={'submit'} value={'enviar'} />
  </div>

  //dos parámetros que quiero renderizar, donde lo voy a renderizar
ReactDOM.render(
    todo,
    document.getElementById('root')
)