import styled from 'styled-components';

import { breakpoint } from '../../../theme/Breakpoints';

import { size } from '../../../theme/Breakpoints';


export const WrapperExpeditions = styled.div`
    margin-top: 150px;
    max-width: 320px;
    ${breakpoint.md} {
      margin-top: 120px;
      max-width: 768px;
    }
    ${breakpoint.lg} {
        max-width: 1240px;
    }
    ${breakpoint.xl} {
        max-width: 1440px;
    }
`;

export const WrapperCardsVila = styled.div`
    max-width: 260px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    ${breakpoint.md} {
        max-width: 650px;
    }
    ${breakpoint.lg} {
        max-width: 1240px;
    }
    ${breakpoint.xl} {
        max-width: 1440px;
    }
`;

export const WrapperItemVila = styled.div`
    max-width: 270px;
    border-radius: 3px;
    margin: 20px;
    background: #FFF2F2;
    &:hover {
    background-color: #6347F9;
    p,
    h3,
    h2{
     color: #FFFFFF;
    }
    }
`;

export const WrapperImgCard = styled.div`
    padding: 5px 0px 0px 0px;
`;


