import "./CartItem.scss";
import {MdClose} from "react-icons/md"
import prod from "../../../assets/products/earbuds-prod-1.webp"
import { useContext } from "react";
import { Context } from "../../../utils/context";
const CartItem = () => {
    const {CartItem, handleAddToCart, } = useContext(Context);
    return (
        <div className="cart-products">
            <div className="cart-product">
                <div className="img-container">
                    <img src={prod} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">Quần DENIM Trơn</span>
                    <MdClose className="close-btn" />
                    <div className="quantity-buttons">
                        <span>-</span>
                        <span>5</span>
                        <span>+</span>
                    </div>
                    <div className="text">
                        <span>3</span>
                        <span>x</span>
                        <span className="highlight">395.000đ</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
