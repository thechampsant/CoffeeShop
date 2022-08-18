import { createContext,useState } from "react";

import Latte from '../Img/latte.png';
import mocha from '../Img/mocha.png'
import americano from '../Img/americano.png'

export const MenuContext = createContext({
    menu : [],
    setMenu : () => null
});

export const MenuProvider = ({children}) =>{
    const menuItems =[
        {
          id: 0,
          item_name: 'Café Mocha',
          item_price: '350.00',
          item_description: 'A caffè mocha, also called mocaccino, is a chocolate-flavoured warm beverage that is a variant of a caffè latte, commonly served in a glass rather than a mug. Other commonly used spellings are mochaccino and also mochachino.',
          item_rating: '5.0',
          item_image: Latte,
          qty: 0,
        },
        {
          id: 1,
          item_name: 'Latté',
          item_price: '250.00',
          item_description:"A latte or caffè latte is a milk coffee that is a made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top. If you don't drink dairy milk, you can easily swap it for a plant-based alternative like soy, oat or coconut milk.",
          item_rating: '4.2',
          item_image: mocha,
          qty: 0,
        },
        {
          id: 2,
          item_name: 'Americano',
          item_price: '150.00',
          item_description: "An Americano is made by pouring hot water over one or two espresso shots, resulting in a drink of similar volume and strength to regular coffee. The key to an Americano is that it starts with espresso and adopts the flavors and aromas of the espresso, but with a less powerful taste.",
          item_rating: '4.4',
          item_image: americano,
          qty: 0,
        }
      ]
    const [menu, setMenu] = useState(menuItems);

    const value = {menu, setMenu};

    return <MenuContext.Provider value={value}>
        {children}
    </MenuContext.Provider>
}