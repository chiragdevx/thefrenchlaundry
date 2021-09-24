import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';


function Navbar() {
    return (
        <div >
            <nav className="navbar   navbar-expand-lg navbar-light  ">
               

                <div className="collapse navbar-collapse ms-5 mt-5" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item active">
                            <h5 className="nav-link" href="#">Home </h5>
                        </li>
                        <li className="nav-item">
                        <h5 className="nav-link ms-5" href="#">About </h5>
                        </li>
                        <li className="nav-item">
                        <h5 className="nav-link ms-5" href="#">Dishes </h5>
                        </li>
                        <li className="nav-item">
                        <h5 className="nav-link ms-5" href="#">Chef </h5>
                        </li>
                        <li className="nav-item">
                        <h5 className="nav-link ms-5" href="#">Contact us </h5>
                        </li>
                        
                    </ul>
                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar
