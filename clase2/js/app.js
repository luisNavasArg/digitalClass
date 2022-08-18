let letras = ''
window.addEventListener("keypress",evento);
function evento(e){
    let elem = document.getElementById("principal")
    elem.innerHTML += e.key;
    // letras += e.key;
    // console.log(letras);
}
let contador = 0;
let contador2 = 400;
const mover=()=>{
    let elem = document.getElementById("principal");
    if(contador <= 400){
        contador= contador + 50;
        elem.style.left=`${contador}px`;
    }else if(contador > 400 && contador2 > 0){
        contador2 = contador2 -50;
        elem.style.left=`${contador2}px`;
    }
}
// setInterval(()=>{
//     mover()
// },1000)

const cambiarColor=()=>{
    let elem = document.getElementById("principal");
    elem.style.backgroundColor="green"
    elem.style.color="white"
    elem.style.padding="30px"
    elem.style.margin="30px"
    elem.style.border="4px solid black"
}
const restaColor=()=>{
    let elem = document.getElementById("principal");
    elem.style.backgroundColor="transparent"
    elem.style.color="black"
}
