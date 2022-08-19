import './header.scss'
import CustomButton from '../CustomButton/CustomButton.component';
import Logo from '../../Img/cafe-coffee-day.svg';
import Cart from '../../Img/bag.png';
import { PopNumber } from '../PopNumber/PopNumber.component';
import React, { useContext } from 'react';
import {CartItemContext} from "../../Context/cart.context";

import { singInWithGoogle } from '../../firebase/firebase.util';

import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/user.context';

const Header = () =>{
    const {cartItems} = useContext(CartItemContext);
    const {currentUser,setCurrentUser} = useContext(UserContext)
    React.useEffect(()=>{
        console.log(currentUser);
    })
    const loginUser = async() =>{
        await singInWithGoogle().then((res)=>{
            setCurrentUser(res.user);
        }).catch((err)=>{
            console.log(err);
        })
    }
    return(
        <div className="header">
            <nav className="navigation">
                <div className="navigation__logo">
                    <img src={Logo} alt="Logo" className='navigation__logo-1'/>
                    {(currentUser !== null) ? <h1>Hi! {currentUser.displayName}</h1> : null}
                </div>
                <div className="navigation__menu">
                    <ul>
                        <Link to='/'>
                            <li><a href="#">Trending</a></li>
                        </Link>
                        <Link to='/menu'>
                            <li><a href="#">Menu</a></li>
                        </Link>
                        <Link to='/about'>
                            <li><a href="#">About</a></li>
                        </Link>
                    </ul>
                </div>
                <div className='navigation__ops'>
                    <div className='navigation__ops-pop'>
                        <Link to='/cart'>
                            <img src={Cart} alt="cart" className='cart'/>
                        </Link>
                        <PopNumber  cName="popnumber" count={cartItems.mainItem.length}/>
                    </div>
                    {
                        (currentUser === null)
                        ?<CustomButton name="#D61820"  operation={loginUser}>
                            Log In
                        </CustomButton>
                        :<CustomButton name="#D61820">
                            Log Out
                        </CustomButton>

                    }
                    
                </div>
            </nav>
        </div>
    )
}

export default Header;