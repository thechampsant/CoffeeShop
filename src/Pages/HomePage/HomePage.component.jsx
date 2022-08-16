import './HomePage.scss';
import Container from '../../Components/Container/Container.component';
import ProductDetail from '../../Components/ProductDetail/ProductDetail.component';
import ImgBox from '../../Components/ImgBox/ImgBox.component';

import { useContext } from 'react';
import { MenuContext } from '../../Context/menu.context';


const HomePage = () =>{
    const {menu} = useContext(MenuContext);
    console.log(menu);
    return(
        <div className='homepage'>
            <Container name="container-yellow">
                <ProductDetail/>
            </Container>
            <Container name="container-red">
                <ImgBox size="30rem" imgHeight="25rem" imgWidth="25rem" bg="#ffffff" imgURL={require('../../Img/mocha.png')}/>
            </Container>
            <Container name="container-blue">  
                <ImgBox size="20rem" imgHeight="13rem" imgWidth="13rem" bg="#ffffff" imgURL={require('../../Img/latte.png')}  rating="4.2"/>
                <ImgBox size="20rem" imgHeight="17rem" imgWidth="17rem" bg="#ffffff" imgURL={require('../../Img/mocha.png')}  rating="5.0"/>
                <ImgBox size="20rem" imgHeight="13rem" imgWidth="13rem" bg="#ffffff" imgURL={require('../../Img/americano.png')}  rating="4.4"/> 
            </Container>
        </div>
    )
}

export default HomePage