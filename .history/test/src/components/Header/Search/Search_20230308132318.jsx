import "./Search.scss";
import {MdClose} from "react-icons/md"
import prod from "../../../assets/products/earbuds-prod-1.webp"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";


const Search = ({setShowSearch}) => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const onChange = (e) => {
        setQuery(e.target.vale);
    }
    let {data} = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`)
    if(!query.length){
        data = null;
    }
    return (
        <div className="search-modal">
            <div className="form-field">
                <input 
                    type="text" 
                    autoFocus
                    placeholder="Search for products"
                    value={query}
                    onChange={onChange}
                />
                <MdClose className="close-btn" onClick={() => setShowSearch(false)}/>
            </div>
            <div className="search-result-content">
                <div className="search-results">
                    <div className="search-result-item">
                        <div className="img-container">
                            <img src={prod} alt="" />
                        </div>
                        <div className="prod-details">
                            <span className="name">Quần DENIM Trơn</span>
                            <div className="desc">Màu sắc: Đen</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
