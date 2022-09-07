import {createContext, useContext, useState} from "react";

export const MenuContext = createContext();

const MenuContextProvider = props => {
    const [menus, setMenus] = useState([])

    
    return( 
        <MenuContext.Provider value={menus}>
            {props.children}
        </MenuContext.Provider>
    )
}

export default MenuContextProvider;