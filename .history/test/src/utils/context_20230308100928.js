import { createContext, useState } from "react";
import {useLocation} from "react-router-dom"
import { useEffect } from "react";
import Product from "../components/Products/Product/Product";

export const Context = createContext();

const AppContext = ({children}) => {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const location = useLocation();

    useEffect(() => {}, [cartItems])

    const handleAddToCart = (product, quantity) => {
        let items = [...cartItems];
        let index = items.findIndex(p => p.id === product.id)
        if(index !== -1){
            items[index].attributes.quantity += quantity
        }else{
            product.attributes.quantity = quantity
            items = [...items, product];
        }
        setCartItems(items);
    }
    const handleRemoveFromCart = (product) => {
        let items = [...cartItems];
        items = items.filter(p => p.id !== product.id)
        setCartItems(items);
    }
    const handleCartProductQuantity = (type, product) => {}

    return(
        <Context.Provider value={{
            categories,
            setCategories,
            products,
            setProducts,
            cartItems,
            setCartItems,
            cartCount,
            setCartCount,
            cartSubTotal,
            setCartSubTotal,
            handleAddToCart,
            handleRemoveFromCart,
            handleCartProductQuantity
        }}>
        {children}
        </Context.Provider>
    )
}

export default AppContext;