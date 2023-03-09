import "./Category.scss";
import cat5 from "../../../assets/category/cat-5.jpg"
import cat6 from "../../../assets/category/cat-6.jpg"
import cat7 from "../../../assets/category/cat-7.jpg"
import cat8 from "../../../assets/category/cat-8.jpg"


const Category = ({categories}) => {
    return (
        <div className="shop-by-category">
            <div className="categories">
                <div className="category">
                    <img src={cat5} alt="" />
                </div>
                <div className="category">
                    <img src={cat6} alt="" />
                </div>
                <div className="category">
                    <img src={cat7} alt="" />
                </div>
                <div className="category">
                    <img src={cat8} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Category;
