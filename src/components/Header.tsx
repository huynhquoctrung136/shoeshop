/** @format */

import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { RootState } from "../redux/configStore";
import { ACCESS_TOKEN, USER_LOGIN, settings } from "../utils/config";

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
      return (
        <div className="dropdown">
          <NavLink
            to={"/profile"}
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {userLogin.email}
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <NavLink className="dropdown-item" to={"/profile"}>
                Thông Tin Tài Khoản
              </NavLink>
            </li>
            <li>
              <span
                onClick={() => {
                  settings.eraseCookie(ACCESS_TOKEN);
                  settings.eraseCookie(USER_LOGIN);
                  settings.clearStorage(ACCESS_TOKEN);
                  settings.clearStorage(USER_LOGIN);

                  window.location.reload();
                }}
                className="dropdown-item"
              >
                Đăng xuất
              </span>
            </li>
          </ul>
        </div>
      );
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
