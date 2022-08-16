import { createContext,useState } from "react";

export const MenuContext = createContext({
    menu : null,
    setMenu : () => null
});

export const MenuProvider = ({children}) =>{
    const [menu, setMenu] = useState([]);

    const value = {menu, setMenu};

    return <MenuContext.Provider value={value}>
        {children}
    </MenuContext.Provider>
}