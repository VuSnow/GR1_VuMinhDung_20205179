import "./Products.scss";
import Product from "./Product/Product";
import Product1 from "./Product/Product1"

const Products = () => {
    return (
        <div className="products-container">
            <div className="sec-heading">Popular Products</div>
            <div className="products">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
};

export default Products;
