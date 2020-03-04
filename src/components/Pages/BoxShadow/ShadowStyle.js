import styled from 'styled-components';


export const ShadowBoxStyle = styled.div`
    margin: auto;
    width: 200px;
    height: 200px;
    background: #C440CC;

    -webkit-box-shadow: ${props => `${props.Hlength}px`} ${props => `${props.Vlength}px`} ${props => `${props.BRadius}px`} ${props => `${props.SRadius}px`} rgba(${props => `${props.colorR}`},${props => `${props.colorG}`},${props => `${props.colorB}`},${props => `${props.colorA}`});
    -moz-box-shadow: ${props => `${props.Hlength}px`} ${props => `${props.Vlength}px`} ${props => `${props.BRadius}px`} ${props => `${props.SRadius}px`} rgba(${props => `${props.colorR}`},${props => `${props.colorG}`},${props => `${props.colorB}`},${props => `${props.colorA}`});
    box-shadow: ${props => `${props.Hlength}px`} ${props => `${props.Vlength}px`} ${props => `${props.BRadius}px`} ${props => `${props.SRadius}px`} rgba(${props => `${props.colorR}`},${props => `${props.colorG}`},${props => `${props.colorB}`},${props => `${props.colorA}`});
`;

