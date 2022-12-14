/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { RootState } from "../../redux/configStore";
import {
  DispatchType,
  getProductDetailApi,
  RelatedProduct,
} from "../../redux/reducers/productReducer/productReducer";

type Props = {};

const Detail = (props: Props) => {
  const { productDetail } = useSelector(
    (state: RootState) => state.productReducer
  );

  const params = useParams();

  const dispatch: DispatchType = useDispatch();
  // console.log("productDetail", productDetail);
  const getProductByIdApi = () => {
    //Lấy params từ url
    const id: string | undefined = params.id;
    const actionThunk = getProductDetailApi(id as string);
    dispatch(actionThunk);
  };
  useEffect(() => {
    getProductByIdApi();
  }, [params.id]);
  return (
    <div className="container mt-3">
      {/* <h3>Product Name</h3> */}
      <div className="row">
        <div className="col-4">
          <img
            src={productDetail?.image}
            style={{ height: "350px", width: "350px", objectFit: "cover" }}
          />
        </div>
        <div className="col-8">
          <h3>Product Name</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio neque
            impedit ipsa, temporibus dignissimos modi corrupti aliquam, veniam
            laboriosam magni quos, optio eius quasi dolores officiis sapiente.
            Voluptate, illo laudantium?
          </p>
        </div>
      </div>
      <h3 className="text-center mt-2">Relese Product</h3>
      <div className="row">
        {productDetail?.relatedProducts.map(
          (prod: RelatedProduct, index: number) => {
            return (
              <div className="col-4">
                <ProductCard prod={prod} />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Detail;
