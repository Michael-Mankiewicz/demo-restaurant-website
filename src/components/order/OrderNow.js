import React from "react";
import ubereats from "./ubereats.png";
import grubhub from "./grubhub.png";
import slice from "./slice.png";
import "./OrderNow.css"
const OrderNow = () => {

    return ( 
      <div className="ordernow">
        <div className="socials">
          <h1>Order Through: </h1>
          <div className="social-buttons">
            <a href="https://www.ubereats.com/store/villa-pizza/FE3mzrEmRd6vvCwfLMfVSA" target="_blank" ><img className = "socialicon" src={ubereats} alt="uber eats"/></a>
            <a href="https://www.grubhub.com/restaurant/villa-pizza-290-lakeview-ave-clifton/279132" target="_blank" ><img className = "socialicon" src={grubhub} alt="grub hub"/></a>
            <a href="https://slicelife.com/restaurants/nj/clifton/07013/villa-pizza/menu?utm_source=PaidGoogle&utm_medium=cpc&gclid=CjwKCAjwo_KXBhAaEiwA2RZ8hH2oW0-xemsgdji_udoO-YN4u78DeVUisdM2H_fPzmLgM__V1RYXyBoCuqAQAvD_BwE&utm_campaignid=16095963349&utm_adgroupid=&utm_adid=&utm_term=&utm_matchtype=&utm_campaign=Slice_g_ACQ_PerformanceMax&utm_adgroup=&gclid=CjwKCAjwo_KXBhAaEiwA2RZ8hH2oW0-xemsgdji_udoO-YN4u78DeVUisdM2H_fPzmLgM__V1RYXyBoCuqAQAvD_BwE" target="_blank" ><img className = "socialicon" src={slice} alt="slice"/></a>
          </div>
        </div>
        <div className="number">
          <h1>Or Contact Us Directly: </h1>
          <h2>973 546 5707</h2>
        </div>
      </div>
     );
}
 
export default OrderNow;