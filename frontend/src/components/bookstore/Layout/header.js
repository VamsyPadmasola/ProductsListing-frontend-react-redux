// import { useNavigate } from "react-router-dom";
import Cart from "../Cart/index.js";
import SearchBox from "../UI/Search";
import Books from "../../../assets/icons/book_white.png";

const Header = () =>{
    return (
        <header className="header-main">
            <div className='nav-brand'> 
                <img className='logo-img' src= { Books }/>
                <span className='spn-logo'>Bookstore</span>
            </div>
            <div className="searchBox-container">
                <SearchBox/>
            </div>
            <div className="cart-container">
                <Cart/>
            </div>
        </header>
    )
}

export default Header;