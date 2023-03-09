import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-2.webp"

const Product = () => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={prod} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">Super Star Shoes</span>
                <span className="price">2.600.000đ</span>
            </div>
        </div>
    );
};

export default Product;
