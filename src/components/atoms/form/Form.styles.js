import styled from 'styled-components';

export const MyForm = styled.form`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
    margin: 5px 5px 5px 5px;
    padding: 35px;
    width: 620px;
    min-height: 76px;
    label {
        position: absolute;
        margin: 30px 5px 0px 45px;
        margin-bottom: 20px;
        width: 80px;
        height: 32px;
        left: 16px;
        top: 37px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 32px;
        color: rgba(51, 51, 51, 0.496405);
    }
    input {
        width: 100%;
        height: 50px;
        margin-top: 23px;
        padding: 5px 15px;
        background: #fff;
        font-size: 22px;
        &:focus {
            background-color: lightblue;  
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
        background-color: #FFFF;
        color: #52AA7F
        }
    }
    .error {
        position: absolute;
        color: #e53e3e;
        margin: 73px 0px 5px 10px;
    }
`;