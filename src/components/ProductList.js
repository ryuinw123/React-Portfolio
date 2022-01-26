import React, { useEffect } from "react";
import Product from './Product';
import "./ProductList.css"
import AOS from "aos";
import "aos/dist/aos.css";


function ProductList({ProductTitle,ProductDescription,ProductData,ProductID}) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <div className = "pl" id = {ProductID}>
            <div className="pl-texts">
                <h1 className = "pl-title" data-aos="flip-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    {ProductTitle}
                </h1>
                <p className = "pl-desc" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
                    {ProductDescription}
                </p>
            </div>
            <div className="pl-list">
                {ProductData.map(item => (
                    <Product key = {item.id} img = {item.img} link = {item.link}/>
                ))}
            </div>
        </div>
        )
}

export default ProductList;
