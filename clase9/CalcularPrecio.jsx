const CalcularPrecio=(monto)=>{
    let iva = monto * 21 /100;

    return monto  + iva 
}
export default CalcularPrecio
 