module.exports={
    mostrarSeleccion:(element,id)=>{
        let ele = document.getElementById(id).value;
        let hts =[]
        element.map((ht)=>{
            if(ht.ubicacion === ele){
                return hts.push(ht)
            }else return false;
        })
        return hts;

    }
}