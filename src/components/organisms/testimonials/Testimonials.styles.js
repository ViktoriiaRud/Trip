import styled from 'styled-components';

import { breakpoint } from '../../../theme/Breakpoints';

import { size } from '../../../theme/Breakpoints';


export const WrapperTestimonials = styled.div`
max-width: 1440px;
margin-top: 20px;
`;

export const TestimonialsCards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${breakpoint.lg} {
    flex-direction: row;
    }
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
    img {
        width: 100%;
    }
`;

export const TestimonialsItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${breakpoint.lg} {
    flex-direction: row;
    }
`;

export const TestimonialsItem = styled.div`
    margin: 48px 227px 0px 0px;
    width: 215px;
`;

export const TestimonialsItemPhoto = styled.div`
    width: 78px;
`;


