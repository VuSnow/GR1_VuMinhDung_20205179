import "./Home.scss";
import { useEffect } from "react";
import Banner from './Banner/Banner';
import Category from "./Category/Category";
import Products from "../Products/Products";
import {fetchDataFromApi} from "../../utils/api";


const Home = () => {

    useEffect(() => {
        getCategories()
    }, [])

    const getCategories = () => {
        fetchDataFromApi("/api/categories").then(res => console.log(res));
    }

    return (
        <div className="home">
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category />
                    <Products />
                </div>
            </div>
        </div>
    );
};

export default Home;
