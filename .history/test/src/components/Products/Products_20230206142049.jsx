import "./Products.scss";
import Product from "./Product/Product";
import Product1 from "./Product/Product1"
import Product2 from "./Product/Product2"
import Product3 from "./Product/Product3"
import Product4 from "./Product/Product4"
import Product5 from "./Product/Product5"
import Product6 from "./Product/Product6"
import Product7 from "./Product/Product7"

const Products = ({products, innerPage, headingText}) => {
    return (
        <div className="products-container">
            {!innerPage && <div className="sec-heading">{headingText}</div>}
            <div className="products">
                {products?.data?.map(item => (
                    <Product key={item.id} id={item.id} data={item.attributes}/>
                ))}
            </div>
            
        </div>

        

        
    );
};

export default Products;
