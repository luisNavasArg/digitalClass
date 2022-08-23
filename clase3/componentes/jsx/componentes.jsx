const data=[
    {
        nombre:"Studio en San Telmo",
        src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/202816680.jpg?k=934233f703c316da3145234f31370ef1ee0fb88411f73c41bfdeb09b27a84a3d&o=&hp=1",
        direccion:"Perú 897 piso 7º D, San Telmo, 1068 Buenos Aires, Argentina"

    },
    {
        nombre:"Lemon Suites",
        src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/214139037.jpg?k=a412631abde4fe98cc0dea2d44373cc91be03897a6789b129d993da0398ba34a&o=&hp=1",
        direccion:"Chacabuco, 1072, San Telmo, 1069 Buenos Aires, Argentina "

    },
    {
        nombre:"Circus Hostel",
        direccion:"Chacabuco 1020, San Telmo, 1069 Buenos Aires, Argentina",
        src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/231202576.jpg?k=7c044b84defe729b9707ef6b09767cc83dcf79618083d8d951b6e617c6969f85&o=&hp=1"
    }
]
const Hoteles = () => {
    let hots =data.map((h,i)=>{
        return(
            <div key={'h'+i}>
            <div className="card" style={{ width: "18rem" }}>
                <img src={h.src} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"> {i + 1} {h.nombre}</h5>
                    <p className="card-text">Dirección: {h.direccion}</p>
                    <a href="#" className="btn btn-primary">Leer más!</a>
                </div>
            </div>
        </div>
        )
    })
    return (
       <div>
        {hots}
       </div>
    )
}

// let numeros =[4,6,5,8,9]

// numeros.map((n)=>console.log(n))
// let total= numeros.filter((n)=>n!=5)
// numeros.push(12)
// numeros = [89,...numeros]
// console.log(numeros);
// console.log(total);


ReactDOM.render(
    <div className="bg-dark m-4 p-4">
        <Hoteles />
    </div>,
    document.getElementById('root'))