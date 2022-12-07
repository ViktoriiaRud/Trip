import styled from 'styled-components';

import { breakpoint } from '../../atoms/Breakpoints';

import { size } from '../../atoms/Breakpoints';




// ${breakpoint.xs} {
//     background-color: red;
//   }
//   ${breakpoint.sm} {
//     background-color: blue;
//   }
//   ${breakpoint.md} {
//     background-color: green;
//   }
//   ${breakpoint.lg} {
//     background-color: black;
//   }
//   ${breakpoint.xl} {
//     background-color: pink;
//   }
//   ${breakpoint.xxl} {
//     background-color: yellow;
//   }


export const MyPhotoMirror = styled.div`
    margin: -12px -210px;
    width: 100%;
`;

export const CombinedMirror = styled.div`
    max-width: 1440px;
    height: 694px;
    margin-top: 150px;
`;

export const WrapperCombinedMirror = styled.div`
    margin: 130px;
`;

export const WrapperOrangeMirror = styled.div`
    margin: 0px 0px 0px 452px;
    position: absolute;
    margin-top: 100px;
    left: -10px;
`;

export const WrapperBridgeMirror = styled.div`
    margin: 2px 8px 30px -95px;
    position: absolute;
    z-index: 0;
`;

export const WrapperOrangeMirrorText = styled.div`
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    padding: 2px 110px 1px 20px;
    width: 150px;
    height: 150px;
    gap: 0px;
    width: 50px;
    height: 52px;
    margin: 2px;
    width: calc( 50% -20px );
`;

export const OrangeMirror = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 25px;
    width: 25px;
    margin: 48px 130px 0px 42px;
    border-radius: 100%;
    background-color: #FFFFFF;
    border: 2px solid red;
    border: 5px;
    gap: 15px;
    border: solid #F07C52 1px;
`;
