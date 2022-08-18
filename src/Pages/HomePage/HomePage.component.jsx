import './HomePage.scss';
import Container from '../../Components/Container/Container.component';
import ProductDetail from '../../Components/ProductDetail/ProductDetail.component';
import ImgBox from '../../Components/ImgBox/ImgBox.component';

import { useContext } from 'react';
import { MenuContext } from '../../Context/menu.context';
import { useState } from 'react';


const HomePage = () =>{
    const {menu} = useContext(MenuContext);
    const [item,setItem] = useState(1);
    console.log(menu);
    const random = (item) =>{
        setItem(item)
    }
    return(
        <div className='homepage'>
            <Container name="container-yellow">
                {menu.length > 0
                    ?  <ProductDetail Item={menu[item]}/>
                    : null
                }
            </Container>
            <Container name="container-red">
                {menu.length > 0
                    ? <ImgBox size="40rem" imgHeight="35rem" imgWidth="35rem" bg="#F5B7B1" imgURL={menu[item].item_image}/>
                    : null
                }
                
            </Container>
            <Container name="container-blue">  
                {
                    menu.map((value,key)=>{
                        return(
                            <ImgBox size="20rem" key={key} imgHeight="13rem" imgWidth="13rem" bg="#FFF" imgURL={value.item_image}  rating={value.item_rating} cName="box-click" random={random} item_no={key}/>
                        )
                    })
                }
                {/* <ImgBox size="20rem" imgHeight="13rem" imgWidth="13rem" bg="#ffffff" imgURL={require('../../Img/latte.png')}  rating="4.2"/>
                <ImgBox size="20rem" imgHeight="17rem" imgWidth="17rem" bg="#ffffff" imgURL={require('../../Img/mocha.png')}  rating="5.0"/>
                <ImgBox size="20rem" imgHeight="13rem" imgWidth="13rem" bg="#ffffff" imgURL={require('../../Img/americano.png')}  rating="4.4"/>  */}
            </Container>
        </div>
    )
}

export default HomePage