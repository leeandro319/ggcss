import styled from 'styled-components';


export const ShadowText = styled.p`
   margin: auto;
   font-size: 50px;
   font-weight: bold;
   
   text-shadow: ${props => `${props.hoffset}px`} ${props => `${props.voffset}px`} ${props => `${props.blurText}px`} rgba(${props => `${props.colorR}`},${props => `${props.colorG}`},${props => `${props.colorB}`},${props => `${props.colorA}`});
    
    
`;

