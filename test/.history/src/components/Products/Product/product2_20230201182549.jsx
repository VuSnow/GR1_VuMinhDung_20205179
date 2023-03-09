import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-3.webp"

const Product = () => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={prod} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">ĐẦM LỤA XẾP LY XÒE</span>
                <span className="price">995.000đ</span>
            </div>
        </div>
    );
};

export default Product;
