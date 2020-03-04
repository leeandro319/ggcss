import styled from 'styled-components';

export const BoxTrasnform = styled.div`
    margin: auto;
    width: 200px;
    height: 200px;
    background: #C440CC;

    
    border-top-left-radius: ${props => `${props.valorLTop}deg`};
    

    transform: rotate(${props => `${props.rotateObj}deg`}) skew(${props => `${props.screwX}deg`}, ${props => `${props.screwY}deg`}) translate(${props => `${props.translateX}px`}, ${props => `${props.translateY}px`});
    -webkit-transform: rotate(${props => `${props.rotateObj}deg`}) skew(${props => `${props.screwX}deg`}, ${props => `${props.screwY}deg`}) translate(${props => `${props.translateX}px`}, ${props => `${props.translateY}px`});
    -moz-transform: rotate(${props => `${props.rotateObj}deg`}) skew(${props => `${props.screwX}deg`}, ${props => `${props.screwY}deg`}) translate(${props => `${props.translateX}px`}, ${props => `${props.translateY}px`});
    
    
`;

