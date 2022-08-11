//definiendo la variable
//var


const PI =3.14;
let nombre="Luis";
console.log(nombre);
nombre="Pao"
console.log(nombre);

let elementos = []

for (let i = 0; i < 20; i++) {
    elementos.push(`<div class="bg-primary col-4 m-5">Hola ${i}</div>`)
}
console.log(elementos);

elementos.forEach((e)=>{
    document.getElementById("root").innerHTML+=e;
})
// document.getElementById("root").innerHTML=elementos;

function suma (a,b){
    return a + b
}
// alert(suma(5,2))
// alert(suma(5,20))

const resta=(a,b)=>a-b;
const operacion=(a,b,c)=>{
    if(c == "+"){
        return a+b
    }else if(c =='*'){
        return a*b
    }
}

console.log(resta(150,50));
console.log(operacion(23,50,'*'));

//ternario

let mostrar=false;
//variable?true:falso
// document.getElementById("root").innerHTML=mostrar?`<p>hola</p>`:`<p>Adios</p>`;

//pendiente, aceptada rechazada
fetch("https://pokeapi.co/api/v2/")
.then(data=>console.log(data))
.catch(err=>{console.log(err);})
console.log('último');