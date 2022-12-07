import styled from 'styled-components';

import { breakpoint } from '../../atoms/Breakpoints';

import { size } from '../../atoms/Breakpoints';




// ${breakpoint.xs} {
//    background-color: red;
//  }
//  ${breakpoint.sm} {
//    background-color: blue;
//  }
//  ${breakpoint.md} {
//    background-color: green;
//  }
//  ${breakpoint.lg} {
//    background-color: black;
//  }
//  ${breakpoint.xl} {
//    background-color: pink;
//  }
//  ${breakpoint.xxl} {
//    background-color: yellow;
//  }



export const WrapperBackgroundColor = styled.div`
   background-color: #11253A;
`;

export const WrapperBackgroundItem = styled.div`
   margin-top: 120px;
   max-width: 1440px;
   height: 2250px;
`;

export const WrapperForm = styled.div`
   margin-top: 120px;
   max-width: 1240px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   gap: 50px;
`;

export const Span = styled.span`
   margin-top: 90px;
   display: block;
   width: 1170px;
   height: 5px;
   background: #FFFFFF;
   mix-blend-mode: normal;
   opacity: 0.08;
`;

export const WrapperBlockMonth = styled.div`
   margin-top: 80px;
   display: flex;
   flex-direction: row;
   justify-content: center;
   max-width: 1170px;
   height: 560px;
   gap: 70px;    
`;

export const BlockMonth = styled.div`
   position: relative;
   display: flex;
   flex-direction: row;
   justify-content: center;
   max-width: 570px;
   height: 560px; 
   background-color: #FFFFFF;
   gap: 30px;
`;

export const BlockMonthText = styled.div`
   width: 570px;
   height: 224px; 
`;

export const CardPhoto = styled.div`
   margin: 210px 3px 3px 3px;
   position: absolute;
   display: flex;
   flex-direction: row;
   justify-content: center;
   width: 570px;
   height: 376px;
   border-radius: 100%;
   z-index: 1;
   img {
      width: 100%;
   }  
`;

export const BlockMonthPhoto = styled.div`
   margin: 27px 31px 9px -31px;
   width: 68px;
   height: 68px;
   img {
      width: 100%;
   }  
`;

export const TextForm = styled.div`
   display: inline-block;
   margin: 10px 20px 12px 15px;
   h3 {
   margin: 39px 24px 12px 16px;
   width: 270px;
   height: 48px;
   font-family: 'Lexend Zetta';
   font-style: normal;
   font-weight: 400;
   font-size: 40px;
   line-height: 48px;
   letter-spacing: 8px;
   color: #FFFFFF;
  }
  h4 {
   margin: 39px 24px 12px 16px;
   width: 419px;
   height: 32px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 32px;
   color: rgba(255, 255, 255, 0.502972);
  } 
`;

export const WrapperMapText = styled.div`
   margin-top: 150px;
   display: flex;
   flex-direction: row;
   justify-content: center;
   max-width: 1170px;
   height: 560px;
   gap: 70px;    
`;

export const Map = styled.div`
position: relative;
   max-width: 570px;
   height: 560px;
   img {
      width: 100%;
   }
`;

export const Text = styled.div`
   max-width: 570px;
   height: 560px;
`;

export const WrapperEmailText = styled.div`
   margin-top: 70px;
   max-width: 720px;
   height:  156px;   
`;

export const Phone = styled.div`
   padding: 10px 5px 7px 13px;
   box-sizing: border-box;
   border: 1px solid rgba(255, 255, 255, 0.295743);
   border-radius: 24px;
   width: 48px;
   height: 48px;
   margin: 3px 12px 7px 29px;
   img {
      width: 22px;
      height: 24px;
   }
`;

export const NumberPhone = styled.div`
   h4 {
   width: 396px;
   height: 25px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 24px;
   line-height: 50px;
   color: #FFFFFF;
   }  
`;

export const Email = styled.div`
   padding: 6px 3px 5px 10px;
   box-sizing: border-box;
   border: 1px solid rgba(255, 255, 255, 0.295743);
   border-radius: 24px;
   width: 48px;
   height: 48px;
   margin: 1px 12px 7px 29px;
   img {
      width: 22px;
      height: 35px;
   }
`;

export const EmailText = styled.div`
   h5 {
      width: 378px;
      height: 32px;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 53px;
      color: rgba(255, 255, 255, 0.502972);
   }
`;

export const EmailTextItem = styled.div`
   margin-top: 10px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   gap: 2px;    
`;

export const WhitSquare = styled.div`
   margin: 140px 14px 17px 179px;
   position: absolute;
   max-width: 270px;
   height: 144px;
   background-color: #FFFFFF;  
   z-index: 1;
   &::after {
      position: absolute;
      content: "";
      width: 0px;
      height: 0px;
      border-left: 24px solid transparent;
      border-right: 24px solid transparent;
      border-top: 16px solid #FFFFFF;
      margin: 60px 0px 0px 76px;             
   }
   h3 {
      padding: 27px 43px 41px 32px;
      width: 195px;
      height: 76px;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 32px;
      color: #333333;
   }   
`;

export const Marker = styled.div`
    margin: 312px 2px 7px 254px;
    position: absolute; 
    background-color: #FFFFFF;   
    max-width: 48px;
    height:  48px;
    z-index: 1;
    box-sizing: border-box;
    border-radius: 24px 24px;
    img {
      width: 100%;
      box-sizing: border-box;
      border-radius: 24px 24px;
    }
`;