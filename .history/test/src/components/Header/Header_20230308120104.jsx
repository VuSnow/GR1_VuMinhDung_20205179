import "./Header.scss";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search"
import Cart from "../Cart/Cart"
import { context } from "../../utils/context";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    // const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const navigate = useNavigate();
    const handleScroll = () => {
        const offSet = window.scrollY
        if(offSet > 20){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, []);

    const { cartCount, showCart, setShowCart } = useContext(Context);

    return (
        <>
            <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
                <div className="header-content"> 
                    <ul className="left">
                        <li onClick={() => navigate("/")}>HOME</li>
                        <li onClick={() => navigate("/about")}>ABOUT</li>
                        <li>CATEGORIES</li>
                    </ul>
                    <div className="center" onClick={() => navigate("/")}>
                        SNOWSTORE
                    </div>
                    <div className="right">
                        <TbSearch onClick={() => setShowSearch(true)}/>
                        <AiOutlineHeart />
                        <span className="cart-icon" onClick={() => setShowCart(true)}>
                            <CgShoppingCart />
                            {!!cartCount && <span>{cartCount}</span>}
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart = {setShowCart}/>}
            {showSearch && <Search setShowSearch = {setShowSearch} />}
        </>
    );
};

export default Header;
