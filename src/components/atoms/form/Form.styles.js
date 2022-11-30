import styled from 'styled-components';

export const MyForm = styled.form`
    margin: 0 auto;
    padding: 35px;
    width: 400px;
    min-height: 50px;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 9px 23px 0 rgb(0 0 0 / 3%);
    label {
        display: block;
        margin-top: 25px;
        font-size: 18px;
        font-weight: bold;
    }
    input {
        width: 100%;
        height: 50px;
        margin-top: 15px;
        padding: 5px 15px;
        background: #fff;
        border: 1px solid #e2e2e2;
        color: #353535;
        border-radius: 10px;
        font-size: 22px;
        &:focus {
        }
    }
    button {
        width: 170px;
        height: 48px;
        padding: 15px;
        margin-top: 25px;
        border: 0;
        background-color: #52AA7F;
        font-family: 'Lexend Zetta';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: #FFFFFF;
        cursor: pointer;
        &:hover {
        transform: translateY(-5px);
        background-color: #FFFF;
        color: #52AA7F
        }
    }
    .error {
        color: #e53e3e;
        margin-top: 8px;
    }
`;