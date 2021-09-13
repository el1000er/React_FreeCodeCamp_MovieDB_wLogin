import React from "react";
import PropTyes from 'prop-types';
//To be Able to link back to the home page
import { Link } from "react-router-dom";
//styles
import { Wrapper, Content } from "./BreadCrumb.styles";

//Implicit Return has Parentesis
const BreadCrumb = ({ movieTitle }) => (
  <Wrapper>
    <Content>
      <Link to="/">
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{movieTitle}</span>
    </Content>
  </Wrapper>
);

BreadCrumb.propTypes={
    movieTitle:PropTyes.string
}
export default BreadCrumb;
