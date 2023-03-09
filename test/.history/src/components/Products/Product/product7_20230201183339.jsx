import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-8.webp"

const Product = () => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={prod} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">TÚI XÁCH CHẦN BÔNG</span>
                <span className="price">1.145.000đ</span>
            </div>
        </div>
    );
};

export default Product;
