/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import { ProductModel, RelatedProduct } from "../../redux/reducers/productReducer/productReducer";

type Props = {
  prod?: ProductModel|RelatedProduct;
};

const ProductCard = (props: Props) => {
  const { prod } = props;
  return (
    <div className="card">
      <div className="card__icon position-relative">
        <i className="fa fa-heart position-absolute end-0 m-3" />
      </div>
      <img className="w-100 card-img-top" src={prod?.image ? prod.image:"https://picsum.photos/350"} alt="Title" />
      <div className="card-body">
        <h4 style={{ height: "25px", fontSize: "15px" }} className="card-title">
          {prod?.name ? prod.name:"Product:name"}
        </h4>
        <p className="card-text">{prod?.shortDescription}</p>
      </div>
      <div className="card-footer d-flex">
        <NavLink to={`/detail/${prod?.id}`} className={"btn btn-success"}>
          Buy Now
        </NavLink>
        <div className="prod?uct-price text-center w-50 bg-secondary text-dark text-center font-weight-bold">
          {prod?.price.toLocaleString()} $
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
