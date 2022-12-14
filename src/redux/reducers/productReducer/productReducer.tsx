/** @format */
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { store } from "../../configStore";
export interface ProductModel {
  id: number;
  name: string;
  alias: string;
  price: number;
  description: string;
  size: string;
  shortDescription: string;
  quantity: number;
  deleted: boolean;
  categories: string;
  relatedProducts: string;
  feature: boolean;
  image: string;
}

export interface ProductDetailModel {
  id: number;
  name: string;
  alias: string;
  price: number;
  feature: boolean;
  description: string;
  size: string[];
  shortDescription: string;
  quantity: number;
  image: string;
  categories: Category[];
  relatedProducts: RelatedProduct[];
}

export interface Category {
  id: string;
  category: string;
}

export interface RelatedProduct {
  id: number;
  name: string;
  alias: string;
  feature: boolean;
  price: number;
  description: string;
  shortDescription: string;
  image: string;
}

export type ProductState = {
  arrProduct: ProductModel[];
  productDetail: ProductDetailModel | null;
};
const initialState: ProductState = {
  arrProduct: [
    {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      size: "[36,37,38,39,40,41,42]",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      deleted: false,
      categories:
        '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: "[2,3,5]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
    },
  ],
  productDetail: null
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    setArrProductAction: (
      state: ProductState,
      action: PayloadAction<ProductModel[]>
    ) => {
      state.arrProduct = action.payload;
    },
  },
  //extra reducers
  extraReducers(builder) {
    //pending: đang xử lý
    //fulfilled: đã xử lý thành công
    //rejected: xử lý thất bại
    builder.addCase(getProductDetailApi.pending, (state, action) => {
      //bật loading
    });
    builder.addCase(
      getProductDetailApi.fulfilled,
      (state: ProductState, action: PayloadAction<ProductDetailModel>) => {
        //tắt loading
        state.productDetail = action.payload;
      }
    );
    builder.addCase(getProductDetailApi.rejected, (state, action) => {
      //tắt loading
    });
  },
});

export const { setArrProductAction } = productReducer.actions;

export default productReducer.reducer;
export type DispatchType = typeof store.dispatch;

/**==============================Action Api===================================== */

export const getProductApi = () => {
  return async (dispatch: DispatchType) => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
      });
      const content: ProductModel[] = result.data.content;
      console.log("content: ", content);
      const action: PayloadAction<ProductModel[]> =
        setArrProductAction(content);
      dispatch(action);
    } catch (error) {
      console.log("error", error);
    }
  };
};

//Cách 2: create createAsyncThunk

export const getProductDetailApi = createAsyncThunk(
  "productReducer/getProductDetailApi",
  async (id: string) => {
    const response = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
      method: "GET",
    });
    return response.data.content; //ProductDetailModel
  }
);
