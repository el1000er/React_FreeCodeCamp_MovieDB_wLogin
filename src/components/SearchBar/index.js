import React,{useState,useEffect,useRef} from 'react';
//Image
import searchIcon from'../../images/search-icon.svg';
//styles
import { Wrapper,Content } from './SearchBar.styles';

const SearchBar=({setSearchTerm})=>{

    //controled component
    const[state,setState]=useState('');
    //useRef is a MUTABLE variable but if we change it's value it wont trigger a re-render
    const initial = useRef(true);

    

    //to add delay to the search bar (timeout)
    useEffect(()=>{
        //skipping intial render in useEfect
        if(initial.current){
            //if this is the initial mount hook we will return but not trigger the search, 
            //and we will change the initial ref variable to false
            initial.current=false;
            return;
        }
        const timer = setTimeout(()=>{
            setSearchTerm(state);
        },500)
            //clear timer on each render
            return () =>clearTimeout(timer);
    },[setSearchTerm,state])

    return(
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon'/>
                <input type='text'
                placeholder='Search Movie'
                onChange={event=>setState(event.currentTarget.value)}
                value={state}
                />
            </Content>
        </Wrapper>
    )
};

export default SearchBar;
