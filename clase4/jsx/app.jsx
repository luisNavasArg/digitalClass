class Operacion {
    color="blanco"
    constructor(color){
        this.color=color
    }
    sumar(a,b){
        return a + b
    }
    restar(a,b){
        return a - b
    }
    multiplicar(a,b){
        return a * b
    }
    dividir(a,b){
        return a / b
    }
}
class Calculadora extends Operacion{
    constructor(color){
        super(color)
    }
    modulo(a,b){
        return a % 2
    }
}

let suma = new Calculadora("verde")
console.log( suma.sumar(8,9));
console.log(suma.color);
console.log(suma.modulo(5,6));

