import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-6.webp"

const Product = () => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={prod} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">ÁO KHOÁC PHAO GILE</span>
                <span className="price">675.000đ</span>
            </div>
        </div>
    );
};

export default Product;
