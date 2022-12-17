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
import Helmet from "../../components/Helmet";
import { arrSlider } from "../../assets/fakeData/hero-slider";
import { HeroSlider } from "../../components/HeroSlider";
import Section, { SectionBody, SectionTitle } from "../../components/Section";
import { arrPolicy } from "../../assets/fakeData/policy";
import PolicyCard from "../../components/PolicyCard";
import Grid from "../../components/Grid";
import { NavLink } from "react-router-dom";

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
    <Helmet title="Trang chủ">
      {/* HeroSlider */}
      <HeroSlider control={true} auto={false} timeOut={5000} data={arrSlider} />
      {/* EndHeroSlider */}

      {/* Policy section */}
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {arrPolicy.map((item, index: number) => {
              return (
                <NavLink to={"/policy"}>
                  <PolicyCard
                    key={index}
                    name={item.name}
                    description={item.description}
                    icon={item.icon}
                  ></PolicyCard>
                </NavLink>
              );
            })}
          </Grid>
        </SectionBody>
      </Section>

      {/* End Policy */}

      {/* best selling section */}
      <Section>
        <SectionTitle>Top Sản Phẩm Bán Chạy</SectionTitle>
      </Section>

      <SectionBody>
        <Grid col={4} mdCol={2} smCol={1} gap={20}>
          {arrProduct.map((prod: ProductModel, index: number) => {
            return <ProductCard key={index} prod={prod} />;
          })}
        </Grid>
      </SectionBody>

      {/* end best selling section */}
    </Helmet>
  );
};

export default Home;
