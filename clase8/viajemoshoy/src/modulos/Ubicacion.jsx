module.exports={
    obtenerUbicacion:(obj)=>{
        let ubicacion =[]
        obj.forEach(ob => {
            let valor = ob.ubicacion;
            ubicacion =[...ubicacion,valor]
        });
        return ubicacion
    }
}