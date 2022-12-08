import styled from 'styled-components';
import { Row } from 'react-bootstrap';

import { breakpoint } from '../../atoms/Breakpoints';

import { size } from '../../atoms/Breakpoints';

export const StyleNavigationRow = styled(Row)`
    margin:0
`;

export const Subheader = styled.div`
    background: #6347F9;
`;

export const NavigationList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: end;
    margin: 20px;
    list-style-type: none;
    gap: 70px;  
`;

export const NavigationLink = styled.a`
    width: 353px;
    height: 32px;
    top: 25px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    text-align: right;
    color: #FFFFFF;
  `;

export const Promo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: center;
    margin-top: 140px;
    gap: 10px; 
    {ThemeProvider};
`;

export const PromoImg = styled.div`
    img {
        width: 100%
    }
`;

export const Logo = styled.div`
    margin-top: 13px;
    padding: 3px;
    position: absolute;
    width: 93px;
    height: 48px;
    left: 135px;
    font-family: 'Lexend Zetta';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    color: #FFFFFF;
    ${breakpoint.md} {
        margin-top: 6px;
        left: 30px;
   }
    
`;

export const ColorFilet = styled.div`
    max-width: 1440px;
    background-image:  #6347F9;
    ${breakpoint.md} {
        max-width: 1240px;
   }
`;

export const WrapperFilet = styled.div`
    margin: 0px auto;
    background: #6347F9;
`;

export const Span = styled.span`
    max-width: 768px;
    display: block;
    width: 870px;
    height: 25px;
    mix-blend-mode: normal;
    background: #6347F9; 
`;