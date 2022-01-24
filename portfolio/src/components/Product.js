import React, { useEffect } from 'react';
import "./Product.css"
import AOS from "aos";
import "aos/dist/aos.css";
function Product({img,link}) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div className = "p" data-aos="fade-zoom-in">
            <div className = "p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href = {link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="p-img" />
            </a>
        </div>
    )
}

export default Product;
