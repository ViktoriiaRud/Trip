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



