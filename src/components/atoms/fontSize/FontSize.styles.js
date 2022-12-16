import styled from 'styled-components';

import { breakpoint } from '../../../theme/Breakpoints';

import { size } from '../../../theme/Breakpoints';

export const Title = styled.h1`
        width: 320px;
        font-size: 40px;
        margin-top: 15px;
        max-height: 100px;
        font-family: 'Lexend Zetta';
        font-style: normal;
        font-weight: 600;
        line-height: 78px;
        text-align: center; 
        color: #FFFFFF;
            ${breakpoint.md} {
            width: 680px;
            font-size: 64px;
            max-height: 100px;
            line-height: 64px;
            }
`;

export const PromoSubTitle = styled.h3`
    margin-top: 120px;
    max-width: 220px;
    max-height: 32px;
    left: 636px;
    top: 170px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    text-align: center;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #FFFFFF;
`;

export const PromoCountrySubTitle = styled.h3`
    width: 100px;
    height: 32px;
    text-align: center;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: #FFFFFF;;
`;

export const PromoCitySubTitle = styled.h3`
    width: 50px;
    height: 24px;
    text-align: center;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;
`;

export const CombinedAboutText = styled.h3`
    text-align: center;
    margin-top: 50px;
    max-width: 100px;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #333333;
        ${breakpoint.md} {  
        text-align: start;  
        margin: 40px 0px 55px 145px;
        max-width: 200px;
        font-size: 16px;
        color: rgba(51, 51, 51, 0.49833);
        }
        ${breakpoint.xl} {
        text-align: start; 
        margin: 40px 0px 55px 90px;
        max-width: 200px;
        height: 32px;
        }
`;

export const CombinedTitle = styled.h2`
    margin-top: 50px;
    text-align: center;
    max-width: 320px;
    font-family: 'Lexend Zetta';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 64px;
    color: #333333;
    letter-spacing: 9px;
        ${breakpoint.md} {
        margin: 0px 0px 20px 10px;
        max-width: 360px;
        font-size: 56px;
        line-height: 64px;
        }
        ${breakpoint.lg} {
        text-align: start;
        margin: 0px 0px 20px 90px;
        max-width: 487px;
        height: 128px;
        }
`;

export const CombinedDescription = styled.p`
    text-align: center;
    margin-top: 50px;
    max-width: 320px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #333333;
        ${breakpoint.md} {
        margin: 0px 0px 30px 0px;
        max-width: 350px;
        font-size: 20px;
        }
        ${breakpoint.lg} {
        text-align: start;
        margin: 0px 0px 30px 108px;
        max-width: 400px;
        }
        ${breakpoint.xl} {
        margin: 0px 0px 30px 90px;
        max-width: 470px;
        }
`;

export const CombinedSubTitle = styled.h3`
    text-align: center;
    margin-top: 50px;
    max-width: 170px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 32px;
    color: #333333;
        ${breakpoint.md} {
        text-align: center;
        max-width: 170px;
        font-size: 24px;
        }
        ${breakpoint.xl} {  
            text-align: start;
        margin: 0px 0px 10px 160px;
        max-width: 197px;
        }
`;

export const CombinedBookDescription = styled.h3`
    text-align: center;
    margin-top: 50px;
    max-width: 300px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #333333;
        ${breakpoint.md} {
        text-align: center;
        max-width: 300px;
        font-size: 16px;
        color: #333333;
        }
        ${breakpoint.xl} {
        margin: 0px 0px 0px 160px;
        max-width: 305px;
        color: rgba(51, 51, 51, 0.496405);
        }
`;

export const CombinedSubText = styled.p`
    margin: 1px 1px 15px 15px;
    padding: 41px 16px 3px 5px;
    width: 206px;
    font-family: 'Open Sans';
    left: 11.85%;
    right: 11.85%;
    top: 10%;
    bottom: 64.5%;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #FFFFFF;
        ${breakpoint.xl} {
        margin: 1px 1px 15px 15px;
        padding: 41px 16px 3px 5px;
        width: 206px;
    }
`;

export const CombinedName = styled.h3`
    margin: 4px 1px 6px 18px;
    width: 93px;
    font-family: 'Open Sans';
    height: 32px;
    left: 11.85%;
    right: 53.7%;
    top: calc(50% - 32px/2 - 30px);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: rgba(255, 255, 255, 0.502972);
`;

export const ExclusiveSubTitle = styled.h3`
    padding: 50px;
    margin-top: 450px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    text-align: center;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.500821);
    ${breakpoint.md} {
        margin-top: 150px;
        } 
`;

export const ExclusiveTitle = styled.h2`
    margin-top: 30px;
    padding: 10px;
    text-align: center;
    max-width: 320px;
    font-family: 'Lexend Zetta';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #000000;
    letter-spacing: 9px;
        ${breakpoint.md} {
        font-size: 56px;
        max-width: 573px;
        line-height: 64px;
        } 
        ${breakpoint.xl} {
        line-height: 64px;
        height: 128px;
        }
`;

export const ExclusiveCityTitle = styled.h2`
    padding: 10px;
    align-items: flex-start;
    height: 48px;
    font-family: 'Lexend Zetta';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 79px;
    letter-spacing: 10px;
    color: #000000;
`;

export const ExclusiveCountryTitle = styled.h3`
    margin: 14px 10px 9px 16px;
    height: 32px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 45px;
    color: rgba(51, 51, 51, 0.496405);
`;

export const ExclusiveDollar = styled.h2`
    text-align: center;
    width: 102px;
    height: 48px;
    font-family: 'Lexend Zetta';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 100px;
    letter-spacing: 9px;
    color: #FFFFFF;
`;

export const ExpeditionTitleYear = styled.h3`
    margin: 0px 0px 0px 37px;
    width: 100px;
    height: 24px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: rgba(51, 51, 51, 0.496405);
`;

export const ExpeditionSubTitle = styled.h3`
    margin: 0px 0px 35px 75px;
    text-align: center;
    width: 200px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #333333;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
        ${breakpoint.md} {
        margin: 150px 0px 55px 265px;
        width: 245px;
        height: 32px;
        color: rgba(51, 51, 51, 0.49833);
        }
        ${breakpoint.lg} {
            margin: 150px 0px 55px 114px;
            width: 205px;
            height: 32px;
        }
        ${breakpoint.xl} {
        margin: 150px 0px 55px 114px;
        width: 300px;
        height: 32px;
        }
`;

export const ExpeditionTitle = styled.h2`
    margin: 0px 0px 30px 11px;
    text-align: center;
    width: 280px;
    font-family: 'Lexend Zetta';
    font-style: normal;
    font-weight: 400;
    font-size: 38px;
    line-height: 64px;
    color: #333333;
    letter-spacing: 9px;
        ${breakpoint.md} {
        margin: 0px 0px 30px 114px;
        width: 620px;
        height: 128px;
        font-size: 56px;
        line-height: 64px;
        } 
`;

export const ExpeditionDollarTitle = styled.h2`
    margin: 0px 0px 0px 35px;
    text-align: center;
    width: 83px;
    height: 48px;
    font-family: 'Lexend Zetta';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 8px;
    color: #33333;
`;

export const ExpeditionCityTitle = styled.p`
    margin: 47px 0px 0px 35px;
    max-width: 470px;
    height: 54px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #333333;
`;

export const MirrorSubTitle = styled.h3`
    margin: 40px 0px 0px 65px;
    width: 100px;
    height: 32px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(51, 51, 51, 0.49833);
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
        ${breakpoint.xl} {
        margin: 40px 0px 0px 55px;
        }
`;

export const MirrorTitle = styled.h2`
    margin: 17px 0px 30px 65px;
    text-align: start;
    width: 300px;
    height: 128px;
    font-family: 'Lexend Zetta';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 64px;
    color: #333333;
    letter-spacing: 9px;
        ${breakpoint.md} {
        margin: 0px 0px 30px 114px;
        width: 520px;
        height: 128px;
        font-size: 56px;
        line-height: 64px;
        } 
        ${breakpoint.xl} {
        margin: 0px 0px 30px 59px;
        }
`;

export const MirrorDescription = styled.p`
    margin: 40px 0px 0px 65px;
    width: 408px;
    height: 64px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #333333;
`;

export const MirrorsList = styled.h3`
    margin: -1px 3px 13px 20px;
    width: 106px;
    height: 32px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #333333;
`;

export const TestimonialsSubTitle = styled.h3`
    width: 144px;
    height: 32px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    text-align: center;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(51, 51, 51, 0.49833);
`;

export const TestimonialsTitle = styled.h2`
    width: 300px;
    height: 128px;
    font-family: 'Lexend Zetta';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 64px;
    text-align: center;
    letter-spacing: 12px;
    color: #333333;
        ${breakpoint.md} {
        width: 576px;
        height: 128px;
        font-size: 56px;
        } 
`;

export const TestimonialsText = styled.p`
    padding: 22px 5px 0px 11px;
    width: 258px;
    height: 190px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: rgba(51, 51, 51, 0.496405);
`;

export const TestimonialsItemName = styled.h3`
    margin: -69px 0px 0px 174px;
    width: 141px;
    height: 32px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #333333;
`;

export const TestimonialsSpecialty = styled.h4`
    margin: 2px 0px 0px 174px;
    width: 68px;
    height: 24px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: rgba(51, 51, 51, 0.496405);
`;

export const OurBlogText = styled.h4`
    margin: 25px 0px 0px 75px;
    padding: 40px;
    width: 190px;
    height: 32px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.500821);
`;

export const BlogTitle = styled.h4`
    width: 300px;
    text-align: center;
    font-family: 'Lexend Zetta';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 64px;
    letter-spacing: 12px;
    color: #FFFFFF;
        ${breakpoint.md} {
        margin: 0px 0px 0px 104px;
        width: 520px;
        height: 128px;
        font-size: 56px;
        line-height: 64px;
        }
`;

export const MonthText = styled.h4`
    margin: 25px 0px 17px 54px;
    width: 127px;
    height: 32px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(51, 51, 51, 0.49833);
`;

export const MonthTitle = styled.h4`
    width: 370px;
    height: 64px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #333333;
    letter-spacing: 3px;
`;

export const MonthSubTitle = styled.h5`
    margin: 20px 0px 0px 59px;
    width: 130px;
    height: 32px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: rgba(51, 51, 51, 0.496405);
`;




export const TextContact = styled.h5`
    margin: 15px 0px 0px 37px;
    width: 91px;
    height: 32px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.500821);
`;


export const ContactTitle = styled.h5`
    margin: 25px 0px 0px 37px;
    width: 454px;
    height: 128px;
    font-family: 'Lexend Zetta';
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    line-height: 64px;
    letter-spacing: 12px;
    color: #FFFFFF;
`;

export const ContactSubTitle = styled.h5`
    margin: 35px 0px 0px 37px;
    width: 470px;
    height: 35px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #FFFFFF;
`;











