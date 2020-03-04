import styled from 'styled-components';


export const BoxStyleRadius = styled.div`
    margin: auto;
    width: 200px;
    height: 200px;
    background: #C440CC;
 
    border-top-left-radius: ${props => `${props.valorLTop}px`};
    border-top-right-radius: ${props => `${props.valorRTop}px`};
    border-bottom-right-radius: ${props=>`${props.valorRBottom}px`};
    border-bottom-left-radius: ${props=>`${props.valorLBottom}px`};
    
`;

