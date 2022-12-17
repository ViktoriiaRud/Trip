import styled from 'styled-components';

import { breakpoint } from '../../../theme/Breakpoints';

import { size } from '../../../theme/Breakpoints';




export const MyPhotoMirror = styled.div`
    margin: 0px 5px 10px -200px;
    width: 300px;
    ${breakpoint.lg} {
        width: 440px;
        margin: 0px 5px 10px -90px;
    }
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
        ${breakpoint.lg} {
            max-width: 800px;
        }
        ${breakpoint.xl} {
        margin-top: 120px;
        max-width: 1440px;
        }
`;

export const WrapperCombinedMirror = styled.div`
    max-width: 320px;
    margin: 130px;
       img { 
       max-width: 300px;
       }
        ${breakpoint.lg} {
        max-width: 620px;
        img { 
            max-width: 550px;
        }
        }
        ${breakpoint.xl} {
            max-width: 620px;
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
        ${breakpoint.lg} {
        margin: 0px 0px 0px -160px;
        max-width: 520px;
        }
        ${breakpoint.xl} {
        margin: 2px 8px 30px -95px;
        max-width: 530px;
        z-index: 0;
        }
`;

export const WrapperOrangeMirrorText = styled.div`
    display: inline-block;
    margin: 50px 0px 0px -100px;
    padding: 2px 11px 9px 8px;
    gap: 0px;
    width: calc( 50% -20px );
        ${breakpoint.xl} {
        width: 50px;
        height: 52px;
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
