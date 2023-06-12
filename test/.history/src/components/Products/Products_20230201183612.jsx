import "./Products.scss";
import Product from "./Product/Product";
import Product1 from "./Product/Product1"
import Product2 from "./Product/Product2"
import Product3 from "./Product/Product3"
import Product4 from "./Product/Product4"
import Product5 from "./Product/Product5"
import Product6 from "./Product/Product6"
import Product7 from "./Product/Product7"

const Products = () => {
    return (
        <div className="products-container">
            <div className="sec-heading">Popular Products</div>
            <div className="products">
                <Product />
                <Product1 />
                <Product2/>
                <Product3 />
                <Product4 />
                <Product5 />
                <Product6 />
                <Product7 />
            </div>
            
        </div>

        

        
    );
};

export default Products;
