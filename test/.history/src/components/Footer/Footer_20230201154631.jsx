import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa"
import Payment from "../../assets/payments.png";
 
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">Everything we do is rooted in sport. Sport plays an increasingly important role in more and more people's lives, on and off the field of play. It is central to every culture and society and is core to our health and happiness.</div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Số nhà 66, ngõ 420, đường Kim Giang, Hà Nội
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">
                            Phone: (+84)36 603 2936
                        </div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">
                            Email: vm.dung.learning@gmail.com
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Hàng mới về</span>
                    <span className="text">Sneaker</span>
                    <span className="text">Tops</span>
                    <span className="text">Bottoms</span>
                    <span className="text">Accessories</span>
                </div>
                <div className="col">
                    <span className="title">Pages</span>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Condition</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        CREATED 2023 BY VUSNOW
                    </div>
                    <img src={Payment} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
