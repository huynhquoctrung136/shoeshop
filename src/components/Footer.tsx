/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import Grid from "./Grid";

type Props = {};

const Footer = (props: Props) => {
  const footerAboutLink = [
    {
      display: "Giới thiệu",
      path: "/about",
    },
    {
      display: "Liên hệ",
      path: "/about",
    },
    {
      display: "Tuyển dụng",
      path: "/about",
    },
    {
      display: "Tin tức",
      path: "/about",
    },
    {
      display: "Hệ Thống Cửa Hàng",
      path: "/about",
    },
  ];

  const footerCustomerLink = [
    {
      display: "Chính sách đổi trả",
      path: "/about",
    },
    {
      display: "Chính sách bảo hành",
      path: "/about",
    },
    {
      display: "Chính sách hoàn tiền",
      path: "/about",
    },
  ];

  return (
   <>
   <div className="line"></div>
     <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footer__title">Tổng đài hổ trợ</div>

            <div className="footer__content">
              <p>
                Liên hệ đặt hàng <strong>0123456789</strong>
              </p>
              <p>
                Thắc mắc đơn hàng <strong>0123456789</strong>
              </p>
              <p>
                Góp ý <strong>0123456789</strong>
              </p>
            </div>
          </div>

          <div>
            <div className="footer__title">Về Yolo</div>

            <div className="footer__content">
              {footerAboutLink.map((item, index: number) => {
                return (
                  <p key={index}>
                    <NavLink to={item.path}>{item.display}</NavLink>
                  </p>
                );
              })}
            </div>
          </div>
          <div>
            <div className="footer__title">Chăm sóc khách hàng</div>
            <div className="footer__content">
              {footerCustomerLink.map((item, index: number) => {
                return (
                  <p key={index}>
                    <NavLink to={item.path}>{item.display}</NavLink>
                  </p>
                );
              })}
            </div>
          </div>
          <div className="footer__about">
            <NavLink to={"/"}>
              <img src="./img/logo.png" className="footer__logo" alt="" />
            </NavLink>
            <p>
              Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng
              triệu người tiêu dùng Việt. Hãy cùng Yolo hướng đến một cuộc sống
              năng động, tích cực hơn.
            </p>
          </div>
        </Grid>
      </div>
    </footer>
   </>
  );
};

export default Footer;
