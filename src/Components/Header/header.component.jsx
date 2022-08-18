import './header.scss'
import CustomButton from '../CustomButton/CustomButton.component';
import Logo from '../../Img/cafe-coffee-day.svg';
import Cart from '../../Img/bag.png';
import { PopNumber } from '../PopNumber/PopNumber.component';
import { useContext } from 'react';
import {CartItemContext} from "../../Context/cart.context";


const Header = () =>{
    const {cartItems} = useContext(CartItemContext);
    return(
        <div className="header">
            <nav className="navigation">
                <div className="navigation__logo">
                    <img src={Logo} alt="Logo" className='navigation__logo-1'/>
                </div>
                <div className="navigation__menu">
                    <ul>
                        <li><a href="#">Trending</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
                <div className='navigation__ops'>
                    <div className='navigation__ops-pop'>
                        <img src={Cart} alt="cart" className='cart'/>
                        <PopNumber  cName="popnumber" count={cartItems.cartValue}/>
                    </div>
                    
                    <CustomButton name="#D61820">
                        Log In
                    </CustomButton>
                </div>
            </nav>
        </div>
    )
}

export default Header;