/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import {
  ProductModel,
  RelatedProduct,
} from "../../redux/reducers/productReducer/productReducer";
import Button from "../Button";

type ProductCardProps = {
  prod?: ProductModel | RelatedProduct;
};

const ProductCard = (props: ProductCardProps) => {
  const { prod } = props;
  return (
    <div className="product-card">
      <NavLink to={`/detail/${prod?.id}`}>
        <div className="product-card__image">
          <img
            src={prod?.image ? prod.image : "https://picsum.photos/350"}
            alt="Title"
          />
        </div>
        <div className="product-card__name">
          {prod?.name ? prod.name : "Product:name"}
        </div>
        <div className="product-card__price">
          {prod?.price.toLocaleString()} $
          <span className="product-card__old">
            <del>399$</del>
          </span>
        </div>
      </NavLink>
      <div className="product-card__btn">
        <Button backgroundColor="" icon="bx bx-cart" animate={true} size={"sm"}>
          Chọn mua
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
