import { useState } from 'react'
import CustomButton from '../CustomButton/CustomButton.component'
import ImgBox from '../ImgBox/ImgBox.component'
import { PopNumber } from '../PopNumber/PopNumber.component'
import Star from '../Star/Star.component'
import './ProductDetail.scss'


import { useContext } from 'react'
import { SubMenuContext } from '../../Context/subMenu.context'

const ProductDetail = (props) =>{
    
    const {subMenu,setsubMenu} = useContext(SubMenuContext)

    const [mainCount, setmainCount] = useState(0);
    const {Item} = props

    const click = (itemNo) =>{
        const newState = subMenu.map((obj) =>{
            if(obj.id === itemNo){
                return {...obj, count: obj.count + 1}
            }
            return obj
        })
        setsubMenu(newState)//update item
    }

    const subtractItem = () =>{
        if(mainCount > 0)
            setmainCount(mainCount - 1)
    }

    const addItem = () =>{
        setmainCount(mainCount + 1)
    }
    console.log(mainCount);
    return(
        <div className='content'>
            <h1 className='content__heading'>{Item.item_name}</h1>
            <div className='content__rating'>
                <div className='content__rating-star'>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                </div>
                <div className='content__rating-price'>₹ {Item.item_price}</div>
            </div>
            <div className='content__context'>
                {Item.item_description}
            </div>
            <div className='content__customization'>
                <h2 className='content__customization--heading'>Serve With</h2>
                <div className='content__customization--items'>
                    {
                        subMenu.map((value, key) =>(
                            <div className='content__customization--items-sub'>
                                <ImgBox size="8rem" imgHeight="5rem" imgWidth="5rem" bg="#F5B7B1" imgURL={value.imgURL} cName="box-click" random={click} item_no={key}/>
                                <PopNumber cName="popnumber" count={value.count}/>
                                {(value.count > 0 )? <PopNumber cName="minus" count="-"/> : null}
                                <h3>{value.name}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='content__action'>
                <div className='content__action-count'>
                    <CustomButton className="action-font"  operation={subtractItem}>
                        -
                    </CustomButton >
                    <p className="action-font">{mainCount}</p>
                    <CustomButton className="action-font" operation={addItem}>
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