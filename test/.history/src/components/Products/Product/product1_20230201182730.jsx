import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-2.webp"

const Product = () => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={prod} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">ÁO POLO PHỐI KẺ</span>
                <span className="price">395.000đ</span>
            </div>
        </div>
    );
};

export default Product;
