import styled from 'styled-components';

export const WrapperBackgroundColor = styled.div`
   background-color: #11253A;
`;
export const WrapperBackgroundItem = styled.div`
   margin-top: 120px;
   background-color: #11253A;
   max-width: 1440px;
   height: 2000px;
`;

export const Span = styled.span`
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
  h3 {
   display: inline-block;
   margin: 206px 20px 12px 119px;
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
      margin: 7px 18px 8px 118px;
      width: 419px;
      height: 32px;
      left: 135px;
      top: 7018px;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 32px;
      color: rgba(255, 255, 255, 0.502972);
   }
`;




