import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-5.webp"

const Product = () => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={prod} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">QUẦN SOOC JEANS NAM</span>
                <span className="price">495.000đ</span>
            </div>
        </div>
    );
};

export default Product;
