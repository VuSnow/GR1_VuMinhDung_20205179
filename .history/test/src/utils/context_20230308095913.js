import { createContext, useState } from "react";
import {useLocation} from "react-router-dom"

export const Context = createContext();

const AppContext = ({children}) => {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);

    return(
        <Context.Provider value={{
            categories,
            setCategories,
            products,
            setProducts,
        }}>
        {children}
        </Context.Provider>
    )
}

export default AppContext;