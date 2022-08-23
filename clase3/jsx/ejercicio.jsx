const Nav =<nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="./index.html">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="./contacto.html">Contacto</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" href="./login.html">Login</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled">Disabled</a>
      </li>
    </ul>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>
const Cards = <div className="card" style={{width: "18rem"}}>
<img src="..." className="card-img-top" alt="..." />
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
</div>
const Footer=<footer className="bg-info fixed-bottom m-3 text-center p-3">Creado por:</footer>

ReactDOM.render(
<div className="bg-dark m-4 p-4">
    {Nav}
    <div className="m-5">{Cards}{Cards}</div>
    {Footer}
</div>, 
document.getElementById('root'))