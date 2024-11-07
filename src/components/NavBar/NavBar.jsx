import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"

function NavBar(){
    return(

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Coder</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link " aria-current="page" href="#">Laptops</a>
                        <a className="nav-link" href="#">Phones</a>
                        <a className="nav-link" href="#">Tablets</a>
                    </div>
                    <CartWidget amount={2}/>
                </div>
            </div>
        </nav>
        

           
      
    )
}

export default NavBar