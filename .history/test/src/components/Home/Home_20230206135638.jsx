import "./Home.scss";
import { useEffect, useContext } from "react";
import Banner from './Banner/Banner';
import Category from "./Category/Category";
import Products from "../Products/Products";
import {fetchDataFromApi} from "../../utils/api";
import { Context } from "../../utils/context";


const Home = () => {
    const {categories, setCategories, products, setProducts} = useContext(Context);

    useEffect(() => {
        getCategories()
    }, [])
    
    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) =>{
            console.log(res);
            setCategories(res);
        });
    };

    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) =>{
            console.log(res);
            setCategories(res);
        });
    };

    return (
        <div className="home">
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories}/>
                    <Products />
                </div>
            </div>
        </div>
    );
};

export default Home;
