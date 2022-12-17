/** @format */

import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { SliderModel } from "../model/SliderModel";
import { NavLink } from "react-router-dom";
import Button from "./Button";

type HeroSliderProps = {
  data: SliderModel[];
  control: boolean;
  auto: boolean;
  timeOut: number;
};

export const HeroSlider = (props: HeroSliderProps) => {
  const data = props.data;

  const timeOut = props.timeOut ? props.timeOut : 5000;

  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = useCallback(() => {
    const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1;
    setActiveSlide(index);
  }, [activeSlide, data]);

  const prevSlide = () => {
    const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1;
    setActiveSlide(index);
  };
  useEffect(() => {
    if (props.auto) {
      const slideAuto = setInterval(() => {
        nextSlide();
      }, timeOut);
      return () => {
        clearInterval(slideAuto);
      };
    }
  }, [nextSlide, timeOut, props]);
  return (
    <>
      <div className="line"></div>
      <div className="hero-slider">
        {data.map((item: SliderModel, index: number) => {
          return (
            <>
              <div
                className={`hero-slider__item ${
                  index === activeSlide ? "active" : ""
                }`}
              >
                <div className="hero-slider__item__info">
                  <div
                    className={`hero-slider__item__info__title color-${item.color}`}
                  >
                    <span>{item.title}</span>
                  </div>
                  <div className="hero-slider__item__info__description">
                    <span>{item.description}</span>
                  </div>
                  <div className="hero-slider__item__info__btn">
                    <NavLink to={item.path}>
                      <Button
                        backgroundColor={item.color}
                        icon="bx bx-cart"
                        animate={true}
                        size={""}
                      >Xem Chi tiết</Button>
                    </NavLink>
                  </div>
                </div>
                <div className="hero-slider__item__image">
                  <div className={`shape bg-${item.color}`}></div>
                  <img src={item.img} alt="" />
                </div>
              </div>
              {props.control ? (
                <div className="hero-slider__control">
                  <div
                    className="hero-slider__control__item"
                    onClick={prevSlide}
                  >
                    <i className="bx bx-chevron-left"></i>
                  </div>
                  <div className="hero-slider__control__item">
                    <div className="index">
                      {activeSlide + 1}/{data.length}
                    </div>
                  </div>
                  <div
                    className="hero-slider__control__item"
                    onClick={nextSlide}
                  >
                    <i className="bx bx-chevron-right"></i>
                  </div>
                </div>
              ) : null}
            </>
          );
        })}
      </div>
    </>
  );
};

HeroSlider.propTypes = {
  data: PropTypes.array.isRequired,
  control: PropTypes.bool,
};
