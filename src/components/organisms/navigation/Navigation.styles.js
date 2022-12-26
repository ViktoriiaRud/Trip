import styled from 'styled-components';
import { Row } from 'react-bootstrap';

import { breakpoint } from '../../../theme/Breakpoints';

import { size } from '../../../theme/Breakpoints';

export const StyleNavigationRow = styled(Row)`
    margin:0
`;

export const Subheader = styled.div`
    background: #6347F9;
`;

export const NavigationList = styled.ul`
    display: none;
        ${breakpoint.md} {
        display: flex;
        flex-direction: row;
        justify-content: end;
        margin: 20px;
        list-style-type: none;
        gap: 70px;   
        }  
`;

export const NavigationLink = styled.a`
    max-width: 353px;
    max-height: 32px;
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
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    margin-top: 140px;
    gap: 10px; 
        ${breakpoint.md} {
        flex-direction: row;
        margin-top: 140px;
        gap: 10px;
        }
`;

export const PromoImg = styled.div`
    img {
        width: 100%
    }
`;

export const Logo = styled.div`
    padding: 3px;
    position: absolute;
    width: 93px;
    height: 48px;
    margin-top: 6px;
    left: 30px;
    font-family: 'Lexend Zetta';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    color: #FFFFFF;
        ${breakpoint.sm} {
        padding: 0px 13px 14px 51px;
        }
        ${breakpoint.md} {
        padding: 0px 13px 14px 6px;
        margin-top: 6px;
        left: 25px;
        }
`;

export const ColorFilet = styled.div`
    max-width: 1440px;
    background-image:  #6347F9;
`;

export const WrapperFilet = styled.div`
    margin: 0px auto;
    background: #6347F9;
`;

