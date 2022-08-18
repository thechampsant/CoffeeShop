import { createContext,useState } from "react";

import Donut from '../Img/donut.png'
import Yogurt from '../Img/yogurt.png'
import Cookie from '../Img/cookie.png'

export const SubMenuContext = createContext({
    subMenu : null,
    setsubMenu : () => null
})

export const SubMenuProvider = ({children}) =>{
    const subMenuItems = [
        {
            id: 0,
            count : 0,
            name:'Donut',
            imgURL : Donut,
        },
        {
            id: 1,
            count : 0,
            name:'Cream',
            imgURL : Yogurt,
        },
        {
            id: 2,
            count : 0,
            name:'Cookie',
            imgURL : Cookie,
        }
    ]

    const [subMenu, setsubMenu] = useState(subMenuItems);

    const value = {subMenu,setsubMenu};

    return <SubMenuContext.Provider value={value}>
        {children}
    </SubMenuContext.Provider>
}