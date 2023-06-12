import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-4.webp"

const Product = () => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={prod} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">SET ÁO BLAZER VÀ CHÂN VÁY MINI</span>
                <span className="price">2.600.000đ</span>
            </div>
        </div>
    );
};

export default Product;
