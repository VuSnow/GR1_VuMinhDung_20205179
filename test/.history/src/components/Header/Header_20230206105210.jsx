import "./Header.scss";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search"
import Cart from "../Cart/Cart"
import { Context } from "../../utils/context";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
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

    return (
        <>
            <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
                <div className="header-content"> 
                    <ul className="left">
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>CATEGORIES</li>
                    </ul>
                    <div className="center">
                        SNOWSTORE
                    </div>
                    <div className="right">
                        <TbSearch />
                        <AiOutlineHeart />
                        <span className="cart-icon">
                            <span>5</span>
                            <CgShoppingCart />
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart />}
        </>
    );
};

export default Header;
