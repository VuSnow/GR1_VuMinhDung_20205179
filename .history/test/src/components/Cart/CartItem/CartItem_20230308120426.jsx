import "./CartItem.scss";
import {MdClose} from "react-icons/md"
import prod from "../../../assets/products/earbuds-prod-1.webp"
import { useContext } from "react";
import { Context } from "../../../utils/context";
const CartItem = () => {
    const {cartItems, handleRemoveFromCart, handleCartProductQuantity} = useContext(Context);
    return (
        <div className="cart-products">
            {cartItems?.map(item => (
                <div key={item.id} className="cart-product">
                    <div className="img-container">
                        <img 
                            src={
                                process.env.REACT_APP_DEV_URL +
                                item.attributes.img.data[0].attributes.url
                            }/>
                    </div>
                    <div className="prod-details">
                        <span className="name">{item.attributes.title}</span>
                        <span><MdClose className="close-btn" onClick={()=> handleRemoveFromCart(item)}/> Close</span>
                        <div className="quantity-buttons">
                            <span onClick={() => handleCartProductQuantity('dec', item)}>-</span>
                            <span>{item.attributes.quantity}</span>
                            <span onClick={() => handleCartProductQuantity('inc', item)}>+</span>
                        </div>
                        <div className="text">
                            <span>{item.attributes.quantity}</span>
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
