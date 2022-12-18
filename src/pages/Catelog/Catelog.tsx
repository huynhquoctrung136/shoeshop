/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import Helmet from "../../components/Helmet";
import Grid from "../../components/Grid";
import {
  DispatchType,
  ProductModel,
  getProductApi,
} from "../../redux/reducers/productReducer/productReducer";
import ProductCard from "../../components/ProductCard/ProductCard";

type CatalogProps = {};

const Catelog = (props: CatalogProps) => {
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
    <div className="line">
      <Helmet title="Sản Phẩm">
        <div className="catalog">
          {/* <div className="catalog__filter" style={{paddingTop:"75px"}}>
            <div className="catalog__filter__widget">
                <div className="catalog__filter__widget__title">
                  Danh Mục Sản Phẩm
                </div>
            </div>
          </div> */}
          <div className="catalog__content">
            <Grid col={3} mdCol={2} smCol={1} gap={20}>
              {arrProduct.map((prod: ProductModel, index: number) => {
                return <ProductCard prod={prod} key={index} />;
              })}
            </Grid>
          </div>
        </div>
      </Helmet>
    </div>
  );
};

export default Catelog;
