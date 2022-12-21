/** @format */

import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { UserLoginModel } from "../../model/UserLoginModel";
import { loginAsyncApi } from "../../redux/reducers/userReducer/userReducer";
import { useDispatch } from "react-redux";
import { DispatchType } from "../../redux/reducers/productReducer/productReducer";

type Props = {};

const Login = (props: Props) => {
  const dispatch:DispatchType = useDispatch();
  const frmLogin = useFormik<UserLoginModel>({
    initialValues: {
      email: "",
      password: "",
    },
    //validation
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("email cannot be blank!")
        .email("email is invalid"),
      password: yup.string().min(3, "password must be at least 3 characters"),
    }),
    onSubmit: (values: UserLoginModel) => {
      const actionAsyncLogin = loginAsyncApi(values);
      dispatch(actionAsyncLogin);
    },
  });
  return (
    <div className="Login">
      <div className="line"></div>
      <h3 className="text-center mb-5">Login</h3>
      <form className="container w-50" onSubmit={frmLogin.handleSubmit}>
        <div className="form-outline mb-4">
          <input
            value={frmLogin.values.email}
            onChange={frmLogin.handleChange}
            type="email"
            id="form2Example1"
            className="form-control"
            name="email"
            onBlur={frmLogin.handleBlur}
          />

          {frmLogin.errors.email && (
            <div className="text text-danger">{frmLogin.errors.email}</div>
          )}
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
        </div>
        {/* Password input */}
        <div className="form-outline mb-4">
          <input
            value={frmLogin.values.password}
            onChange={frmLogin.handleChange}
            type="password"
            id="form2Example2"
            className="form-control"
            name="password"
            onBlur={frmLogin.handleBlur}
          />
          {frmLogin.errors.password && (
            <div className="text text-danger">{frmLogin.errors.password}</div>
          )}
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>
        <button type="submit" className="btn btn-primary btn-block mb-4">
          Sign in
        </button>
        {/* Register buttons */}
        <div className="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
          <p>or sign up with:</p>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-facebook-f" />
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-google" />
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-twitter" />
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-github" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
