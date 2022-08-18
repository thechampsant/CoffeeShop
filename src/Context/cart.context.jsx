import { useState } from "react";
import { createContext } from "react";

export const CartItemContext = createContext({
    cartItems : null,
    setCartItems : () => null
})

export const CartItemProvider = ({children}) =>{
    const cartitems ={
        mainItem :[],
        // cartValue:0
    }
    const [cartItems,setCartItems] = useState(cartitems);
    
    const value  = {cartItems, setCartItems}
    return <CartItemContext.Provider value={value}>
        {children}
    </CartItemContext.Provider>
}