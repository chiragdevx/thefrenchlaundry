import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';


function Navbar() {
    return (
        <div >
            <nav className="navbar   navbar-expand-lg navbar-light  ">


                <div className="collapse navbar-collapse ms-5 mt-5" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item active">
                            <h5 className="nav-link text-white" href="#">Home </h5>
                        </li>
                        <li className="nav-item">
                            <h5 className="nav-link text-white ms-5" href="#">About </h5>
                        </li>
                        <li className="nav-item">
                            <h5 className="nav-link text-white ms-5" href="#">Dishes </h5>
                        </li>
                        <li className="nav-item">
                            <h5 className="nav-link text-white ms-5" href="#">Chef </h5>
                        </li>
                        <li className="nav-item">
                            <h5 className="nav-link text-white ms-5" href="#">Contact us </h5>
                        </li>

                    </ul>
                    <Button className="btn  position-absolute top-0 end-0 me-5">
                        BOOK A TABLE
                    </Button>

                </div>
            </nav>
        </div>
    )
}


const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background:#2C7E80;
  color: white;
  
  font-size: large;
  
  height: 70px;
   width: 220px;
    
  border-radius: 3px;
  
`;

export default Navbar
