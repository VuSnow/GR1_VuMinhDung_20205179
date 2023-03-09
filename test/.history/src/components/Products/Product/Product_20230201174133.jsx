import "./Product.scss";
const Product = () => {
    return (
        <div className="product-card">
            <div className="thumbnail">
            </div>
            <div className="prod-details">
                <span className="name">Product name</span>
                <span className="price">499</span>
            </div>
        </div>
    );
};

export default Product;
