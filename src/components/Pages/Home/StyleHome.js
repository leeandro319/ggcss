import styled from 'styled-components';


export const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row; 
    flex-wrap: wrap;

    a{  
        text-decoration: none;
        margin:20px;
        padding:25px;
        background: #C440CC;
        color: #fff;
        font-size: 18px;
        border-radius: 15px 15px 15px 15px;
        -moz-border-radius: 15px 15px 15px 15px;
        -webkit-border-radius: 15px 15px 15px 15px;

        -webkit-box-shadow: 7px 10px 10px 0px rgba(5,5,5,0.2);
        -moz-box-shadow: 7px 10px 10px 0px rgba(5,5,5,0.2);
        box-shadow: 7px 10px 10px 0px rgba(5,5,5,0.2);

        :hover{
        background: #8840cc;
             }
    }
`;

export const HeaderHome = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
   
    h1{
        padding: 10px;
        margin: auto;
        font-size:80px;
        margin-bottom: 20px;
        color: #C440CC;
    }

    p{
        font-family: Oswald, sans-serif;
        font-size: 18px;
        margin-top: 10px;
    }

`;
