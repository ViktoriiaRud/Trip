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



export const WrapperTestimonials = styled.div`
max-width: 1440px;
margin-top: 20px;
`;

export const TestimonialsCards = styled.div`
    justify-content: space-between;
    display: flex;
    flex-direction: row;
`;

export const TestimonialsCard = styled.div`
    margin-top: 67px;
    width: 354px;
    height: 320px;
    background: #F5F6F8;
    gap: 20px;
`;

export const TestimonialsMarks = styled.div`
    margin: -13px 12px 7px 29px;
    width: 40px;
    height: 40px;
    img {
        width: 100%;
    }
`;

export const TestimonialsItems = styled.div`
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    height: 78px; 
`;

export const TestimonialsItem = styled.div`
    margin: 48px 227px 0px 0px;
    width: 215px;
    height: 78px;
`;

export const TestimonialsItemPhoto = styled.div`
    width: 78px;
    height: 78px; 
`;


