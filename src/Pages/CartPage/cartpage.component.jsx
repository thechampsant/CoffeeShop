import { useContext } from 'react';
import { MenuContext } from '../../Context/menu.context';
import { CartItemContext } from '../../Context/cart.context';
import './cartpage.scss'
import { useState } from 'react';
import React from 'react';

const CartPage = () =>{
    const {menu} = useContext(MenuContext)
    const {cartItems} = useContext(CartItemContext)
    const [total, setTotal] = useState(0)

    React.useEffect(()=>{
        console.log('SetTotal called');
        cartItems.mainItem.map((value) =>{
            setTotal(total + (parseInt(menu[value].item_price) * parseInt(menu[value].qty)))
        })  
    },[])
    const items = cartItems.mainItem.map((value,key) =>(
        <ul className='table-list' key={key}>
            <li>{menu[value].item_name}</li>
        </ul>
    ))
    const qty = cartItems.mainItem.map((value,key) =>(
        <ul className='table-list' key={key}>
            <li>{menu[value].qty}</li>
        </ul>
    ))
    const price = cartItems.mainItem.map((value,key) =>(
        <ul className='table-list' key={key}>
            <li>{menu[value].item_price}</li>
        </ul>
    ))
    const subTotal = cartItems.mainItem.map((value,key) =>{
        return(
            <ul className='table-list' key={key}>
                <li>{parseInt(menu[value].item_price) * parseInt(menu[value].qty)}</li>
            </ul>
        )
        }     
    )

    return(
        <div className='cartpage'>
            <table>
                <tr>
                    <th>Item Names</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>SubTotal</th>
                </tr>
                <tr className='display-table'>
                    <td>{items}
                       <ul className='tax'>
                            <li>CGST</li>
                       </ul>
                       <ul className='tax'>
                            <li>SGST</li>
                       </ul>
                    </td>
                    <td>{qty}
                        <ul className='tax'>
                            <li>&nbsp;</li>
                        </ul>
                        <ul className='tax'>
                            <li>&nbsp;</li>
                        </ul>
                    </td>
                    <td>{price}
                        <ul className='tax'>
                            <li>2.5%</li>
                       </ul>
                       <ul className='tax'>
                            <li>2.5%</li>
                       </ul>
                    </td>
                    <td>{subTotal}
                        <ul className='tax'>
                            <li>&nbsp;</li>
                        </ul>
                        <ul className='tax'>
                            <li>&nbsp;</li>
                        </ul>
                    </td>
                </tr>
                <tr className='footer-table'>
                    <td></td>
                    <td></td>
                    <td>Total</td>
                    <td>{total}</td>
                </tr>
            </table>
        </div>
    )
}

export default CartPage;