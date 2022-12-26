/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../redux/configStore";
import { DispatchType } from "../../redux/reducers/productReducer/productReducer";
import { useFormik } from "formik";
import { getProfileAsyncApi } from "../../redux/reducers/userReducer/userReducer";

type Props = {};

const Profile = (props: Props) => {
  const { userProfile } = useSelector((state: RootState) => state.userReducer);
  const dispatch: DispatchType = useDispatch();

  const frmUserProfile = useFormik({
    initialValues: {},
    onSubmit: (value: any) => {},
  });

  useEffect(() => {
    //Gọi api getProfile
    const actionThunk=getProfileAsyncApi();
    dispatch(actionThunk);
  }, []);

  return (
    <>
      <div className="line"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 ml-1">
            <div className="card text-center sidebar">
              <div className="card-body">
                <img
                  src={userProfile?.avatar}
                  className="rounded-circle"
                  alt=""
                  style={{ width: "150px" }}
                />
                <div className="mt-3">
                  <h3>{userProfile?.name}</h3>
                  <NavLink to={"/"}>Trang chủ</NavLink>
                  <span>Đăng Xuất</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-1">
            <div className="card mb-3 center">
              <h1 className="m-3 pt-3">Thông Tin Tài Khoản</h1>
              <form>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-3">
                      <h3>Họ và tên</h3>
                    </div>
                    <div className="col-md-9 text-secondary">
                      <input
                        className="form-control"
                        onChange={frmUserProfile.handleChange}
                        value={userProfile?.name}
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <h3>Email</h3>
                    </div>
                    <div className="col-md-9 text-secondary">
                      <input
                        className="form-control"
                        name="email"
                        onChange={frmUserProfile.handleChange}
                        value={userProfile?.email}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <h3>Số điện thoại</h3>
                    </div>
                    <div className="col-md-9 text-secondary">
                      <input
                        className="form-control"
                        name="phone"
                        onChange={frmUserProfile.handleChange}
                        value={userProfile?.phone}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <h3>Password</h3>
                    </div>
                    <div className="col-md-9 text-secondary">
                      <input
                        className="form-control"
                        name="password"
                        type="password"
                        value={
                          userProfile?.password ? userProfile?.password : "123"
                        }
                        onChange={frmUserProfile.handleChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <h3>Gender</h3>
                    </div>
                    <div className="col-md-9 text-secondary">
                      <input name="gender" type="radio" /> Male
                      <input name="gender" type="radio" /> Female
                    </div>
                  </div>
                  <div className="row w-25">
                    <button type="submit" className="btn btn-primary mt-3">
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
