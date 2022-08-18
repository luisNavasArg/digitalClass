const sumar =(a,b)=>{
    return a+b
}
const restar =(a,b)=>{
    return a-b
}
const multiplicar =(a,b)=>{
    return a*b
}
const dividir =(a,b)=>{
    return a/b
}
const operacion=(a,b,cb)=>{
    return cb(a,b);
}
console.log(operacion(230,45,restar));
console.log(operacion(230,45,sumar));
console.log(operacion(230,45,dividir));
console.log(operacion(230,45,multiplicar));

let contador =0;
const miFuncion=()=>{
    contador++
    console.log(contador);
}
setInterval(miFuncion,1000)