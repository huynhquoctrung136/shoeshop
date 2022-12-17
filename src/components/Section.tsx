/** @format */

import React from "react";
type SectionProps = {
  children?: JSX.Element | JSX.Element[];
};
type SectionTitleProps = {
  children?: React.ReactNode;
};
type SectionBodyProps = {
  children?: JSX.Element | JSX.Element[];
};

const Section = ({ children }: SectionProps) => {
  return <div className="section">{children}</div>;
};

export const SectionTitle = ({ children }: SectionTitleProps) => {
  return <div className="section__title">{children}</div>;
};
export const SectionBody = ({ children }: SectionBodyProps) => {
  return <div className="section__body">{children}</div>;
};
export default Section;
