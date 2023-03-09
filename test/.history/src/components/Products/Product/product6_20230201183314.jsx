import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-8.webp"

const Product = () => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={prod} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">THẮT LƯNG</span>
                <span className="price">545.000đ</span>
            </div>
        </div>
    );
};

export default Product;
