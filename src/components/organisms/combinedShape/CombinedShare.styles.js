import styled from 'styled-components';
import { Row } from 'react-bootstrap';

import breakpoint from '../../../theme/Breakpoints';


export const RowStyle = styled(Row)`
    margin:0;
`
export const Combined = styled.div`
    margin-top: 120px;
    max-width: 1440px;
`;

export const CombinedWrapper = styled.div`
    max-width: 1260px;
    margin: 0 auto;
`;

export const MyPhotoOrange = styled.div`
    width: 100%;
    height: 592px;
    margin: -4px 32px;
`;

export const MyPhotoFon = styled.div`
    max-width: 270px;
    height: 400px;
    background-color: #FE7354;
`;

export const WrapperOrange = styled.div`
    margin: 6px 0px 14px 79px;
    position: absolute;
    margin-top: 120px;
    left: -75px;
`;

export const WrapperBridge = styled.div`
    max-width: 470px;
    height: 592px;
    margin: 9px 1px 15px 79px;
    position: absolute;
    z-index: 0;
    img {
        width: 100%;
    }
`;
