import styled from 'styled-components';

import { breakpoint } from '../../../theme/Breakpoints';

import { size } from '../../../theme/Breakpoints';

export const ExclusiveBackgroundColor = styled.div`
    background: rgba(254, 114, 84, 0.08);
`;

export const Exclusive = styled.div`
    margin-top: 120px;
    max-width: 1440px;
    min-height: 994px;
`;

export const WrapperCards = styled.div`
    max-width: 1260px;
    margin-top: 70px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
`;

export const WrapperItem = styled.div`
    position: relative;
    width: 310px;
    
    border-radius: 3px;
    ${breakpoint.xl} {
        width: 370px;
        height: 400px;;
    }
`;

export const BackgroundOrange = styled.div`
    padding: 20px;
    margin: -270px 4px 0px 24px;
    position: absolute;
    width: 144px;
    height: 144px;
    background: #F07C52;
    border-radius: 100%;
    z-index: 1;
`;





