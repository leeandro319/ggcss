import styled from 'styled-components';


export const BorderStyle = styled.div`
    margin: auto;
    width: 200px;
    height: 200px;
    background: #C440CC;

    border-style: ${props => `${props.borderStyle}`};
    border-width: ${props => `${props.borderWidth}px`};
    border-color: rgba(${props => `${props.borderColorR}`},${props => `${props.borderColorG}`},${props => `${props.borderColorB}`},${props => `${props.borderColorA}`});
      
`;


