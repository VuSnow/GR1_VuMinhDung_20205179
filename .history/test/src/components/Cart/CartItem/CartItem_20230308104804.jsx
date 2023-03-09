import "./CartItem.scss";
import {MdClose} from "react-icons/md"
import prod from "../../../assets/products/earbuds-prod-1.webp"
import { useContext } from "react";
import { Context } from "../../../utils/context";
const CartItem = () => {
    const {CartItem, handleRemoveFromCart, handleCartProductQuantity} = useContext(Context);
    return (
        <div className="cart-products">
            {CartItem?.map(item => (
                <div key={item.id} className="cart-product">
                    <div className="img-container">
                        <img src={prod} alt="" />
                    </div>
                    <div className="prod-details">
                        <span className="name">{item.attributes.title}</span>
                        <MdClose className="close-btn" onClick={()=> handleRemoveFromCart(item)}/>
                        <div className="quantity-buttons">
                            <span onClick={() => handleCartProductQuantity('dec', item)}>-</span>
                            <span>{item.attributes.quantity}</span>
                            <span onClick={() => handleCartProductQuantity('inc', item)}>+</span>
                        </div>
                        <div className="text">
                            <span>3</span>
                            <span>x</span>
                            <span className="highlight">{new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(item.attributes.price)}</span>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default CartItem;
