import React from "react";
import PropTypes from 'prop-types';

//Styles
import { Wrapper,Image } from "./Actor.styles";

const Actor=({name,character,imageUrl})=>(
    <Wrapper>
        <Image src={imageUrl} alt='actor-thumb'/>
        <h3>{name}</h3>
        <p>{character}</p>         
    </Wrapper>
);


//Proptypes is used to check if the passed attributes or objects are of some specific type,
//if they are not, an error will appear on Development mode console
//this is not available in production
Actor.propTypes = {
    name:PropTypes.string,
    character:PropTypes.string,
    imageUrl:PropTypes.string,
}

export default Actor;

