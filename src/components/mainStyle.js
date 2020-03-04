import styled from 'styled-components';



export const Container = styled.div`
    @media (max-width: 600px) {
    flex-direction: column;
    
  }
    @import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    margin: 05px auto;
    justify-content: center;

    padding: 20px;

    a{
        font-family: Oswald, sans-serif;
    }

    h1{
        font-family: Oswald, sans-serif;
        color: #C440CC;
    }

    p, span, input, label, button, select {
        font-family: Roboto,sans-serif;
    }

`;

export const SecAround = styled.div`
    display:flex;
    flex-wrap: wrap;
    max-width: 550px;
    margin: 10px;
    align-items: center;

    p{
        font-size: 14px;
        margin-bottom: 20px;

    }
`;


export const DivAround = styled.div`

    
    display:flex;
    flex-direction: column;
    background: transparent;
    width:200;
    margin: 10px auto;

    .painel{
        display:flex;
        flex-direction: row;
    }
    button{
        max-width: 200px;
        margin: 10px 10px;
        padding: 15px;
        background: #C440CC;
        
        border: 0 solid transparent;
        border-radius: 8px 8px 8px 8px;
        -moz-border-radius: 8px 8px 8px 8px;
        -webkit-border-radius: 8px 8px 8px 8px;

        -webkit-box-shadow: 2px 1px 24px -6px rgba(133,133,133,1);
        -moz-box-shadow: 2px 1px 24px -6px rgba(133,133,133,1);
        box-shadow: 2px 1px 24px -6px rgba(133,133,133,1);

        color: #fff;
    }

    button:hover{
        background: #8F2E94;
    }


`;

export const SecAround2 = styled.div`
    @media (max-width: 600px) {
        width: auto;
    
  }

    background: #fff;
    width: 550px;
    margin: 10px;

    -webkit-box-shadow: 2px 1px 24px -6px rgba(133,133,133,1);
    -moz-box-shadow: 2px 1px 24px -6px rgba(133,133,133,1);
    box-shadow: 2px 1px 24px -6px rgba(133,133,133,1);

    span{
        color: #000;
        padding: 10px;
        font-size: 14px;
    }
`;

export const DivRange = styled.div`
    flex:1;
    align-items: center;
    color: #888;
    margin-top: 2rem;
    margin-bottom: 2rem;


    span{
        font-size: 14px;
        color: #808080;
    }

    select{
        margin-top: 5px;
        width: 200px;
        height: 30px;
        border-radius: 5px 5px 5px 5px;
        -moz-border-radius: 5px 5px 5px 5px;
        -webkit-border-radius: 5px 5px 5px 5px;

    }

    .slider{
        display: flex;
        -webkit-appearance: none;
        width: 200px;
        height: 05px;
        border-radius: 5px;
        background: #efefef;
        outline:none;
        margin-top: 10px;

        &::-webkit-slider-thumb{
            padding: 0;
            margin: 0;
            -webkit-appearance: none;
            appearance: none;
            background: #C440CC;
            border: 0 solid white;
        }

        &::-moz-range-thumb{
            padding: 0;
            margin: 0;
            background: #C440CC;
            border: 0 solid white;
        }
        

    }

    input[type=range]{
    -webkit-appearance: none;
}

    input[type=range]::-webkit-slider-runnable-track {
        width: 300px;
        height: 5px;
        background: #ddd;
        border: none;
        border-radius: 3px;
    }

    input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        border: none;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: #C440CC;
        margin-top: -4px;
    }

    input[type=range]:focus {
        outline: none;
    }


`;


