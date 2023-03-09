import "./Newsletter.scss";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss";

const Newsletter = () => {
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Contact with me</span>
                <span className="big-text">Sign up for latest updates and offers</span>
                <div className="form">
                    <input type="text" placeholder="Email Address" />
                    <button>Subcribes</button>
                </div>
                <div className="text">Will be used in accordance with our Pivacy Policy</div>
                <div className="social-icons">
                    <a href="https://www.facebook.com/dung.vuminh.315080" className="icon" >
                        <FaFacebookF size={14}/>
                    </a>
                    <a href="https://twitter.com/VMinhDn31957582" className="icon">
                        <FaTwitter size={14}/>
                    </a>
                    <a className="icon">
                        <FaInstagram size={14}/>
                    </a>
                    <a className="icon">
                        <FaLinkedinIn size={14}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
