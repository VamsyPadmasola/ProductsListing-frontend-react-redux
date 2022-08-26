import Books from '../../../assets/icons/logo_white.png';
import user from '../../../assets/icons/user.png';
import { useState } from "react"
import { RiDashboard3Line } from 'react-icons/ri';
const Navbar = () => {

    const [isExpanded, setExpanded] = useState(true);

    const menuItems = [
        {
            id: 1,
            text: "Module 1",
            icon: "/images/buy_book.png",
            classname: "active-link"
        },
        {
            id: 2,
            text: "Module 2",
            icon: "/images/book_sell.png",
            classname: ""
        },
        {
            id: 3,
            text: "Module 3",
            icon: "/images/book_sell.png",
            classname: ""
        }
    ]
    return (
        <div className={isExpanded ? 'side-nav' : "side-nav-nx"}>
            <div className='divLogo'>
                <img className='logo-img' src={user} />
                {
                    isExpanded &&
                    <span className='spn-logo'>Vamsy Padmasola</span>
                }

            </div>
            {
                isExpanded ? <button className="btn-logout">Logout</button> : <img className="btn-logout-img" src="images/logout.png" />
            }
            {/* <button
                    className={isExpanded ? 'hamburger hamburger-in' : 'hamburger hamburger-out'}
                    onClick={()=> setExpanded(!isExpanded)}>
                        <span></span>
                        <span></span>
                        <span></span>
                </button> */}
            <div className='div-menuitems'>
                <ul className='nav-links'>
                    {
                        menuItems.map(({ id, text, icon, classname }) => (
                            <li key={id} className={classname}  ><a href='#' className={isExpanded ? 'menu-item' : "menu-item menu-item-NX"}>
                                <RiDashboard3Line size={30} className='navbar-icon' />
                                {isExpanded && (<p>{text}</p>)}
                                {
                                    !isExpanded && <div className='tooltip'>{text}</div>
                                }
                            </a></li>
                        ))
                    }
                    <div className='active'></div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;