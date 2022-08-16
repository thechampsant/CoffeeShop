import './header.scss'
import CustomButton from '../CustomButton/CustomButton.component';
import Logo from '../../Img/cafe-coffee-day.svg'

const Header = () =>{
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
                <CustomButton name="#D61820">
                    Log In
                </CustomButton>
            </nav>
        </div>
    )
}

export default Header;