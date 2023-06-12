import "./Category.scss";
import cat5 from "../../../assets/category/cat-5.jpg"


const Category = () => {
    return (
        <div className="shop-by-category">
            <div className="categories">
                <div className="category">
                    <img src={cat5} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Category;
