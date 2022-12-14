/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";
import { RootState } from "../../redux/configStore";
import {
  DispatchType,
  getProductApi,
  ProductModel,
} from "../../redux/reducers/productReducer/productReducer";

type Props = {};

const Home = (props: Props) => {
  const { arrProduct } = useSelector(
    (state: RootState) => state.productReducer
  );

  const dispatch: DispatchType = useDispatch();
  //console.log("arrProduct", arrProduct);

  const getAllProductApi = () => {
    const actionAsync = getProductApi();
    dispatch(actionAsync);
  };

  useEffect(() => {
    //callApi
    getAllProductApi();
  }, []);
  return (
    <div className="container">
      <h3 className="text-center">Product Features</h3>
      <div className="row">
        {arrProduct.map((prod: ProductModel, index: number) => {
          return (
            <div className="col-3">
              <ProductCard key={index} prod={prod} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
