import styled from 'styled-components';


import { breakpoint } from '../../../theme/Breakpoints';

import { size } from '../../../theme/Breakpoints';

export const ButtonOrang = styled.button`
    margin: 60px 19px 5px 90px;
    width: 154px;
    height: 48px;
    background-color: #F07C52;
    color: #FFFF;
    border: none;
    font-family: 'Lexend Zetta';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
    transform: translateY(-5px);
    background-color: #F14101;
    }
        ${breakpoint.xs} {    
        margin: 60px 19px 5px 135px;
        }
        ${breakpoint.md} {    
        margin: 60px 19px 5px 95px;
        }
        ${breakpoint.xl} {    
        margin: 60px 19px 5px 150px;
        }
`;

export const Button = styled.button`
    margin-top:20px;
    width: 154px;
    height: 48px;
    left: 950px;
    top: 16px;
    color: #ffff;
    background-color: #6347F9;
    border: 1px solid #FFFFFF;
    cursor: pointer;
    &:hover {
    transform: translateY(-5px);
    background-color: #A69CDB;
    color: #3B355E;
    border: 3px solid #3B355E;
    ${breakpoint.md} {
        left: 650px;
   }
     }
`;

export const ButtonLight = styled.button`
    margin: 60px 19px 5px 73px;
    margin-top: 70px;
    width: 170px;
    height: 48px;
    font-family: 'Lexend Zetta';
    text-transform: uppercase;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    background-color: #FFFFFF;
    color: #F07C52;
    border: 3px solid #F07C52;
    cursor: pointer;
    &:hover {
    transform: translateY(-5px);
    background-color: #F07C52;
    color: #FFFFFF;
    }
    ${breakpoint.md} {
        margin: 60px 19px 5px 242px;
    }
    ${breakpoint.lg} {
        margin: 60px 19px 9px 535px;
    }
     ${breakpoint.xl} {
        margin: 60px 19px 5px 90px;
}

`;

export const ButtonOrangMirror = styled.button`
    margin: 140px 19px 9px -57px;
    width: 154px;
    height: 48px;
    background-color: #F07C52;
    color: #FFFF;
    border: none;
    font-family: 'Lexend Zetta';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
    transform: translateY(-5px);
    background-color: #F14101;
    }
    ${breakpoint.md} {
        margin: 140px 19px 9px 65px;
    }
    ${breakpoint.lg} {
        margin: 50px 19px 9px 205px;
    }
    ${breakpoint.xl} {
        margin: 50px 19px 9px 85px;
    }
`;

export const ButtonBlogBlue = styled.button`
    margin: 50px 29px 50px 78px;
    width: 170px;
    height: 48px;
    left: 850px;
    font-family: 'Lexend Zetta';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    background-color:  #11253A;
    color: #FFFF;
    border: 1px solid #FFFFFF;
    cursor: pointer;
    &:hover {
    transform: translateY(-5px);
    background-color: #FFFFFF;
    color:  #11253A;
    border: 2px solid #FFFFFF;
     }

     ${breakpoint.md} {
        margin: 60px 19px 60px 65px;
    }
    ${breakpoint.lg} {
        margin: 96px 0px 6px 143px;
        position: absolute;
    }
    ${breakpoint.xl} {
        margin: 50px 19px 9px 285px;
    }
    ${breakpoint.xxl} {
        margin: 50px 19px 9px 805px;
    }
`;

export const ButtonContact = styled.button`
        margin: 0px 0px 6px 37px;
        width: 170px;
        height: 48px;
        padding: 15px;
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
`;
