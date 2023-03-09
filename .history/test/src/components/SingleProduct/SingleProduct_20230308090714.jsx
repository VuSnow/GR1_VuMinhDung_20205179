import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import{
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import prod from "../../assets/products/earbuds-prod-1.webp"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
    const {id} = useParams();
    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={prod} alt="" />
                    </div>
                    <div className="right">
                        <span className="name">
                            Quần DENIM Trơn
                        </span>
                        <span className="price">
                            595.000đ
                        </span>
                        <span className="desc">
                            Màu sắc: Đen
                        </span>
                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span> - </span>
                                <span> 5 </span>
                                <span> + </span>
                            </div>
                            <button className="add-to-cart-button">
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>
                        </div>
                        <span className="divider" />
                        <div className="info-item">
                            <span className="text-bold">
                                Category:
                                <span>Quần Nam</span>
                            </span>
                            <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <FaFacebookF size={16} />
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedinIn size={16} />
                                    <FaPinterest size={16} />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProducts />
            </div>
        </div>
    );
};

export default SingleProduct;
