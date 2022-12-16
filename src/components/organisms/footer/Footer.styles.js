import styled from "styled-components";
import { breakpoint } from '../../../theme/Breakpoints';

import { size } from '../../../theme/Breakpoints';


export const FooterColor = styled.div`
    background-color: #0C1A29;
`;

export const WrapperFooter = styled.div`
    max-width: 1440px;
    height: 432px;
    h3 {
    margin: 30px 1px 10px 0px;
    width: 70px;
    height: 32px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.500821);
    }

    ${'' /* ${breakpoint.xs} {
      background-color: red;
    }

    
    ${breakpoint.sm} {
      background-color: blue;
    }


    ${breakpoint.md} {
      background-color: green;
    } */}


    ${'' /* ${breakpoint.lg} {
      background-color: black;
    } */}

    ${'' /* ${breakpoint.xl} {
      background-color: pink;
    } */}


    ${'' /* ${breakpoint.xxl} {
      background-color: yellow;
    } */}
  
`;

export const LogoText = styled.div`
    margin-top: 80px;
    position: absolute;
    width: 93px;
    height: 48px;
    left: 80px;
    font-family: 'Lexend Zetta';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    color: #FFFFFF;
`;

export const WrapperFooterList = styled.div`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1200px;
    height: 340px;
    gap: 50px;
  `;

export const FooterList1 = styled.div`
    margin: 120px 1px 12px 340px;
    width: 220px;
    height: 48px;
`;

export const FooterList2 = styled.div`
    margin: 120px 1px 12px 50px;
    width: 220px;
    height: 48px;
`;

export const FooterLink = styled.a`
    width: 353px;
    height: 32px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: #FFFFFF;
  `;

export const FooterLink2 = styled.a`
    width: 353px;
    height: 32px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: #FFFFFF;
  `;

export const WrapperSocial = styled.div`
    margin: 120px 1px 12px 10px;
`;

export const Facebook = styled.div`
   padding: 10px 5px 7px 13px;
   box-sizing: border-box;
   border: 1px solid rgba(255, 255, 255, 0.295743);
   border-radius: 24px;
   width: 48px;
   height: 48px;
   margin: 25px 12px 7px 29px;
   img {
    width: 18px;
    height: 18px;
   }
  `;

export const Social = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
`;




