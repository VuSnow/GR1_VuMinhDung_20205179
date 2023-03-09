import "./Products.scss";
import Product from "./Product/Product";
import { useNavigate } from "react-router-dom";
const Products = ({products, innerPage, headingText}) => {
    const navigate = useNavigate();
    return (
        
        <div className="products-container">
            {!innerPage && <div className="sec-heading">{headingText}</div>}
            <div className={`products ${innerPage ? "innerPage" : ""}`} onClick={()=>navigate(`/product/${item.id}`)}>
                {products?.data?.map((item) => (
                    <Product
                        key={item.id}
                        id={item.id}
                        data={item.attributes}
                    />
                ))}
            </div>
        </div>  
    );
};

export default Products;
