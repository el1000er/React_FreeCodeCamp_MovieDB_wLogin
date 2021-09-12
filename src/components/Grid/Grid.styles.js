import styled from "styled-components";

export const Wrapper =styled.div`
max-width: var(--maxWidth);
margin:0 auto;
padding:0 20px;


h1{
    color:var(--medGrey);
    @media screen and (max-width:768px){
        font-size:var(--fontBig)
    }
}
`;

export const Content = styled.div`
display:grid;
//this below is a "trick" to make grid responsive
//repeat colums to autofill, and repeat, when  its 200 px wide it cant go down so will remove a column instead
grid-template-columns:repeat(auto-fill,minmax(200px,1fr));
grid-gap:2rem;
`;