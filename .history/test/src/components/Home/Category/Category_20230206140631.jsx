import "./Category.scss";
import cat5 from "../../../assets/category/cat-5.jpg"
import cat6 from "../../../assets/category/cat-6.jpg"
import cat7 from "../../../assets/category/cat-7.jpg"
import cat8 from "../../../assets/category/cat-8.jpg"


const Category = ({categories}) => {
    return (
        <div className="shop-by-category">
            <div className="Categories">
                {categories.data.map((item) => (
                    <div key={item.id} className="category">
                        <img src={cat5} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
