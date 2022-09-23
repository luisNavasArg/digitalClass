const Noticias=()=>{
    return(
        <div>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://previaje.gob.ar/images/landing/slides/slide-01-bcda7b8d53913c8824eb4265bc948c9e.jpg?vsn=d" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <p className="text-white bg-dark bg-opacity-75 p-4">Previaje es un programa de preventa turística que te reintegra el 50% del valor de tu viaje, para viajar y disfrutar de todos los destinos de Argentina desde el 10 de octubre hasta el 5 de diciembre del 2022.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://previaje.gob.ar/images/landing/slides/slide-02-8da2efefc3706c563b7ae4043fb3763e.jpg?vsn=d" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://previaje.gob.ar/images/landing/slides/slide-04-81c3ed1b51978281eea9b722c223b6a4.jpg?vsn=d" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
       
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}
export default Noticias
