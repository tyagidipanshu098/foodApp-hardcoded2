import logo from "../media/logo.png";
import {Link} from "react-router-dom";

const Header=()=>{
    return(
        <div className="header-container">
        <div className="header">
            <div className="logo">
                <img
                  src={logo}
                  alt="FoodApp logo"
                >
                </img>
                <ul>
                    <li><Link to="/">Home</Link></li>
                   
                    <li><a href="/">Favourites</a></li>

                    <li><Link to="/about">About us</Link></li>
                </ul>
            </div>
            <div className="cartbox">
            <Link to="/cart" className="carticon"><i className="fa-solid fa-cart-shopping"></i></Link>
            </div>
        </div>
        </div>
    );
}

export default Header;