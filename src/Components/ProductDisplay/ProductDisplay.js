import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";

const ProductDisplay = (props) => {
  const { product } = props;
  const [selectedSize, setselectedsize] = useState(null);
  const { addToCart } = useContext(ShopContext);

  const checkcategory = () => {
    return ["men", "women", "kid"].includes(product.category)
      ? product.category
      : "traditional";
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-top">
        <div className="upper">
          <Link style={{ textDecoration: "none", color: "#fe7235" }} to="/">
            Visit the ShopIt Store
          </Link>
          <div className="productdisplay-top-star">
            <p>4.5</p>
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
          </div>
        </div>
      </div>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img srproductdisplay-right-descriptionc={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            Price: <span>${product.old_price}</span>
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          A lightweight, usually knitted, pullover shirt, close fitting and with
          a round neckline and short sleeves, worn an undershirt or outer
          garment.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div
              className={selectedSize === "S" ? "selected" : ""}
              onClick={() => {
                setselectedsize("S");
              }}
            >
              S
            </div>
            <div
              className={selectedSize === "M" ? "selected" : ""}
              onClick={() => {
                setselectedsize("M");
              }}
            >
              M
            </div>
            <div
              className={selectedSize === "L" ? "selected" : ""}
              onClick={() => {
                setselectedsize("L");
              }}
            >
              L
            </div>
            <div
              className={selectedSize === "XL" ? "selected" : ""}
              onClick={() => {
                setselectedsize("XL");
              }}
            >
              XL
            </div>
            <div
              className={selectedSize === "XXL" ? "selected" : ""}
              onClick={() => {
                setselectedsize("XXL");
              }}
            >
              XXL
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          <span>Category : </span>
          <Link style={{ textDecoration: "none" }} to={`/${checkcategory()}s`}>
            {product.category}
          </Link>
        </p>
        <p className="productdisplay-right-category">
          <span>tags : </span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
