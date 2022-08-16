import CustomButton from '../CustomButton/CustomButton.component'
import ImgBox from '../ImgBox/ImgBox.component'
import Star from '../Star/Star.component'
import './ProductDetail.scss'

const ProductDetail = () =>{
    return(
        <div className='content'>
            <h1 className='content__heading'>Café Mocha</h1>
            <div className='content__rating'>
                <div className='content__rating-star'>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                </div>
                <div className='content__rating-price'>₹ 350.00</div>
            </div>
            <div className='content__context'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere commodo diam. Maecenas varius sed dui vitae rhoncus. Sed gravida dignissim ante non tristique. Donec ullamcorper molestie consectetur. Proin eu luctus tellus, vitae porta dolor. Nulla facilisi. Aliquam erat volutpat. Pellentesque sed sodales tellus. Etiam bibendum gravida eleifend. Curabitur lectus arcu, iaculis sed facilisis id, fermentum eget augue. Ut efficitur leo quis magna vestibulum, eu viverra dui vestibulum.
            </div>
            <div className='content__customization'>
                <h2 className='content__customization--heading'>Serve With</h2>
                <div className='content__customization--items'>
                    <div style={{textAlign:'center'}}>
                        <ImgBox size="8rem" imgHeight="5rem" imgWidth="5rem" bg="#F5B7B1" imgURL={require('../../Img/donut.png')}/>
                        <h3>Donut</h3>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <ImgBox size="8rem" imgHeight="5rem" imgWidth="5rem" bg="#F5B7B1" imgURL={require('../../Img/yogurt.png')}/>
                        <h3>Yogurt</h3>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <ImgBox size="8rem" imgHeight="5rem" imgWidth="5rem" bg="#F5B7B1" imgURL={require('../../Img/cookie.png')}/>
                        <h3>Cookie</h3>
                    </div>
                </div>
            </div>
            <div className='content__action'>
                <div className='content__action-count'>
                    <CustomButton className="action-font">
                        -
                    </CustomButton >
                    <p className="action-font">0</p>
                    <CustomButton className="action-font">
                        +
                    </CustomButton>
                </div>
                <CustomButton name="#D61820">
                    Add to Cart
                </CustomButton>
            </div>
        </div>    
    )
}

export default ProductDetail