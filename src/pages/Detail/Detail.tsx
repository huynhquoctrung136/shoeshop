/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { RootState } from "../../redux/configStore";
import {
  DispatchType,
  getProductDetailApi,
  RelatedProduct,
} from "../../redux/reducers/productReducer/productReducer";
import Button from "../../components/Button";
import Grid from "../../components/Grid";
import { SectionBody, SectionTitle } from "../../components/Section";

type Props = {};

const Detail = (props: Props) => {
  const { productDetail } = useSelector(
    (state: RootState) => state.productReducer
  );
  const [detailImg, setdetailImg] = useState(productDetail?.image);
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(0);

  const updateQuantity = (type: string) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  const params = useParams();

  const dispatch: DispatchType = useDispatch();
  console.log("productDetail", productDetail);
  const getProductByIdApi = () => {
    //Lấy params từ url
    const id: string | undefined = params.id;
    const actionThunk = getProductDetailApi(id as string);
    dispatch(actionThunk);
  };
  useEffect(() => {
    getProductByIdApi();
    setdetailImg(productDetail?.image);
    setSize("");
    setQuantity(1);
  }, [params.id]);
  return (
    <>
      <div className="line">
        <div className="product">
          <div className="product__images">
            <div className="product__images__list">
              <div className="product__images__list__item">
                <img
                  alt=""
                  src={productDetail?.image}
                  onClick={() => {
                    setdetailImg(productDetail?.image);
                  }}
                />
              </div>
              <div className="product__images__list__item">
                <img
                  alt=""
                  src={productDetail?.image}
                  onClick={() => {
                    setdetailImg(productDetail?.image);
                  }}
                />
              </div>
            </div>
            <div className="product__images__main">
              <img src={detailImg} alt="" />
            </div>
            <div
              className="product__description"
              style={{ paddingTop: "50px" }}
            >
              <div className="product__description__title">
                Chi Tiết Sản Phẩm
              </div>
              <div className="product__description__content">
                {productDetail?.description}
              </div>
            </div>
          </div>

          <div className="product__info">
            <div className="product__info__title ">{productDetail?.name}</div>
            <div className="product__info__item">
              <span className="product__info__item__price">
                {productDetail?.price} $
              </span>
            </div>
            <div className="product__info__item">
              <div className="product__info__item__title">Kích cỡ</div>
              <div className="product__info__item__list">
                {productDetail?.size.map((item, index: number) => {
                  return (
                    <div
                      key={index}
                      className={`product__info__item__list__item ${
                        size === item ? "active" : ""
                      }`}
                      onClick={() => setSize(item)}
                    >
                      <span className="product__info__item__list__item__size">
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="product__info__item">
              <div className="product__info__item__title">Số Lượng</div>
              <div className="product__info__item__quatity">
                <div
                  className="product__info__item__quatity__btn"
                  onClick={() => {
                    updateQuantity("minus");
                  }}
                >
                  <i className="bx bx-minus"></i>
                </div>
                <div className="product__info__item__quatity__input">
                  {quantity}
                </div>
                <div
                  className="product__info__item__quatity__btn"
                  onClick={() => {
                    updateQuantity("plus");
                  }}
                >
                  <i className="bx bx-plus"></i>
                </div>
              </div>
            </div>

            <div className="product__info__item">
              <Button
                backgroundColor=""
                icon="bx bx-cart"
                animate={true}
                size={"sm"}
              >
                Thêm Vào Giỏ Hàng
              </Button>
              <Button
                backgroundColor=""
                icon="bx bx-cart"
                animate={true}
                size={"sm"}
              >
                Mua Ngay
              </Button>
            </div>
          </div>
        </div>
      </div>
      <SectionTitle>Related Product</SectionTitle>
      <SectionBody>
        <Grid col={3} mdCol={2} smCol={1} gap={20}>
          {productDetail?.relatedProducts.map(
            (prod: RelatedProduct, index: number) => {
              return <ProductCard prod={prod} />;
            }
          )}
        </Grid>
      </SectionBody>
    </>
  );
};

export default Detail;
