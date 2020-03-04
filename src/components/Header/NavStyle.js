import styled from 'styled-components';

export const Container = styled.div`

  @media screen and (max-width: 700px){
    .links-navegator{
                display: none;
            }
  }

  @media screen and (min-width: 700px){
    .mobile{
                display: none;
            }
  }


    @import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');

    display: flex;
    justify-content: center;
    padding: 20px;

    nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1200px;
    height: 50px;
    }
    .nav-links{
     display: flex;
     padding: 20px;
    }
    
    ul li{
        font-family: Oswald;
        display:flex;
        padding: 15px;
        background: ;
    }
    .logo{
        margin-left: 25px;
    }

    button{
        background: transparent;
        border: none;
        padding: 20px;
        
    }

`;
