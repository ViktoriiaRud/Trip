import styled from 'styled-components';
import { Row } from 'react-bootstrap';

import breakpoint from '../../../theme/Breakpoints';


export const RowStyle = styled(Row)`
    margin:0;
`
export const Combined = styled.div`
      margin-top: 50px;
      max-width: 360px;
        ${breakpoint.md} {
        margin-top: 100px;
        max-width: 1100px;
        }
        ${breakpoint.xl} {
        margin-top: 120px;
        max-width: 1240px;
        }
`;

export const CombinedWrapper = styled.div`
    max-width: 360px;
    margin: 0 auto;
        ${breakpoint.md} {
        max-width: 1260px;
        margin: 0 auto;
        }
        ${breakpoint.xl} {
        max-width: 1440px;
        margin: 0 auto;
        }
`;

export const MyPhotoOrange = styled.div`
    max-width: 100%;
    margin: 88px 32px;
        ${breakpoint.md} {
        max-width: 100%;
        margin: -4px 32px;
        }
        ${breakpoint.xl} {
        max-width: 100%;
        height: 592px;
        margin: -4px 32px;
        }
`;

export const MyPhotoFon = styled.div`
    max-width: 270px;
    background-color: #FE7354;
        ${breakpoint.md} {
        max-width: 270px;
        height: 400px;
        }
        ${breakpoint.xl} {
        max-width: 270px;
        height: 400px;
    }

`;

export const WrapperOrange = styled.div`
    margin: 1px 0px 0px 104px;
    position: absolute;
    margin-top: 10px;
    left: -81px;
        ${breakpoint.md} {
        margin-top: 120px;
        left: -75px;
    }
        ${breakpoint.xl} {
        margin: 120px 0px 14px 79px;
    }
`;

export const WrapperBridge = styled.div`
    max-width: 470px;
    margin: 9px 1px 15px 79px;
    position: absolute;
    z-index: 0;
    img {
        max-width: 100%;
    }
        ${breakpoint.md} {
        max-width: 470px;
        max-height: 592px;
        margin: 9px 1px 15px 79px;
        position: absolute;
        z-index: 0;
        img {
            max-width: 100%;
        }
        }
        ${breakpoint.xl} {
        max-width: 470px;
        max-height: 592px;
        margin: 9px 1px 15px 79px;
        position: absolute;
        z-index: 0;
        img {
            max-width: 100%;
        }
        }
`;
