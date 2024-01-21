import React from 'react';
import './Header.css';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Link } from 'react-router-dom';
import {useStateValue} from './StateProvider';

function Header() {
    const[{basket}, dispatch] = useStateValue()

    return (
    <nav className="navbar navbar-expand-lg nav-scroll navbar-light d-flex bg-light">
            <div className="container-fluid d-flex px-4 px-lg-5">
            <Link to={'/'} className="nav-item" style={{textDecoration:'none'}}>
                <h2 className="navbar-brand pt-2" href="#!" ><StorefrontIcon fontSize='large'/>ShopNow</h2>
            </Link>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button> */}
                <div className=" d-flex float-end" id="navbarSupportedContent">
                    {/*<ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4 ">
                         <Link to={'/'} className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></Link>
                        <li className="nav-item "><a className="nav-link" href="#!">About</a></li> 
                    </ul>*/}
                    <form className="d-flex mx-2 float-right">
                        <Link to={'/Checkout'} className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{basket.length}</span>
                        </Link>    
                    </form>
                    <Link to={'/Signin'} className="btn btn-outline-dark ml-5" type="submit">
                            SignIn
                    </Link>
                </div>
            </div>
        </nav>
  )
}

export default Header