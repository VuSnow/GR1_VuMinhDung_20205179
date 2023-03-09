import "./Home.scss";
import Banner from './Banner/Banner';
import Category from "./Category/Category";
import Product from "../Products/Product/Product";


const Home = () => {
    return (
        <div className="home">
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category />
                </div>
            </div>
        </div>
    );
};

export default Home;
