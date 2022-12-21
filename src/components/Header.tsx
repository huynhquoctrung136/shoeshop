/** @format */

import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { RootState } from "../redux/configStore";

type Props = {};

const mainNav = [
  {
    display: "Trang chủ",
    path: "/",
  },
  {
    display: "Sản phẩm",
    path: "/catalog",
  },
  {
    display: "Phụ kiện",
    path: "/accessories",
  },
  {
    display: "Liên hệ",
    path: "/contact",
  },
];

const Header = (props: Props) => {
  const { pathname } = useLocation();
  const headerRef: any = useRef<HTMLElement>(null);
  const { userLogin } = useSelector((state: RootState) => state.userReducer);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current?.classList.add("shrink");
      } else {
        headerRef.current?.classList.remove("shrink");
      }
    });
  }, []);

  const renderLoginUI = () => {
    if (userLogin) {
      return <NavLink to={"/profile"}>{userLogin.email}</NavLink>;
    } else {
      return (
        <NavLink to={"/login"}>
          <i className="bx bx-user"></i>
        </NavLink>
      );
    }
  };
  const activeNav = mainNav.findIndex((e) => e.path === pathname);
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img src="./img/logo.png" alt="" />
        </div>
        <div className="header__menu">
          <div className="header__menu__mobile-toggle">
            <i className="bx bx-menu-alt-left"></i>
          </div>
          <div className="header__menu__left">
            <div className="header__menu__left__close">
              <i className="bx bx-chevron-left"></i>
            </div>
            {mainNav.map((item, index: number) => {
              return (
                <div
                  key={index}
                  className={`header__menu__item header__menu__left__item ${
                    index === activeNav ? "active" : ""
                  }`}
                >
                  <NavLink to={item.path}>
                    <span>{item.display}</span>
                  </NavLink>
                </div>
              );
            })}
          </div>
          <div className="header__menu__right">
            <div className="header__menu__item header__menu__right__item">
              <NavLink to={"/search"}>
                <i className="bx bx-search-alt-2"></i>
              </NavLink>
            </div>
            <div className="header__menu__item header__menu__right__item">
              <NavLink to={"/carts"}>
                <i className="bx bx-cart"></i>
              </NavLink>
            </div>
            <div className="header__menu__item header__menu__right__item">
              {renderLoginUI()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
