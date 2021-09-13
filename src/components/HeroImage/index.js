import React from "react";
import PropTypes from 'prop-types';
//styles
import { Wrapper, Content, Text } from "./HeroImage.styles";

//Props can never be changed inside the component that receives the props
//So it will only change if something re-renders and receives new props

//If I only return JSX there is no need to use { return }, but could only use ()

//to avoid using prop.image, prop.title, prop.text, we will use object distructuring
const HeroImage = ({image,title,text}) => (
 
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>               
      </Text>
    </Content>
  </Wrapper>
);
HeroImage.propTypes={
  image:PropTypes.string,
  title:PropTypes.string,
  text:PropTypes.string
}
export default HeroImage;