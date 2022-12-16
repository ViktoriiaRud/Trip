import styled from 'styled-components';

import { breakpoint } from '../../../theme/Breakpoints';

import { size } from '../../../theme/Breakpoints';




export const MyPhotoMirror = styled.div`
    margin: 0px 5px 10px -200px;
    width: 300px;
        ${breakpoint.xl} {
        width: 540px;
        margin: -12px -280px;
        width: 100%;
        }
`;

export const CombinedMirror = styled.div`
    max-width: 320px;
    margin-top: 150px;
        ${breakpoint.md} {
        margin-top: 100px;
        max-width: 1100px;
        }
        ${breakpoint.xl} {
        margin-top: 120px;
        max-width: 1440px;
        }
`;

export const WrapperCombinedMirror = styled.div`
    max-width: 320px;
       img { 
       max-width: 300px;
       }
    margin: 130px;
        ${breakpoint.xl} {
        img { 
            max-width: 560px;
        }
        margin-top: 130px;
        max-width: 1200px;
        }
`;


export const WrapperOrangeMirror = styled.div`
        margin: 116px 45px 29px 92px;
            ${breakpoint.xl} {
            margin: 0px 0px 0px 452px;
            position: absolute;
            margin-top: 100px;
            left: -10px;
            }
`;

export const WrapperBridgeMirror = styled.div`
    max-width: 320px;
    margin: 0px 0px 0px -150px;
    position: absolute;
    z-index: -1;
        ${breakpoint.xl} {
        margin: 2px 8px 30px -95px;
        max-width: 520px;
        z-index: 0;
        }
`;

export const WrapperOrangeMirrorText = styled.div`
    display: inline-block;
    margin: 15px 13px 52px -15px;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    padding: 2px 110px 1px 20px;
    gap: 0px;
    width: 50px;
    height: 52px;
    margin: 2px;
    width: calc( 50% -20px );
        ${breakpoint.xl} {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 2px 110px 1px 20px;
    }
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
