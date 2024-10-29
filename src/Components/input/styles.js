import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #aaffcc;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 24px;
    font-family: roboto;

    input{
        width: 100%;
        height: 75px;
        background-color: #aaaaff;
        border: 0;
        text-align: right; /* Alinha o texto à esquerda */
        font-size: 24px;
        font-family: roboto;
        padding: 0 10px;
        color: #ffffff;
    }
`