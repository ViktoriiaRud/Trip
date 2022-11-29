import React from 'react';

import { WrapperBackgroundColor, Span } from './MyBlog.styles';
import { OurBlogText, BlogTitle } from '../../atoms/fontSize/FontSize.styles';
import { ButtonBlogBlue } from './../../atoms/button/Button.styles';

import BoatImg from '../../../assets/img/Boat.png';
import Image4Img from '../../../assets/img/image4.png';
import GirlImg from '../../../assets/img/Girl.png';
import BoyImg from '../../../assets/img/Boy.png';

import { WrapperCardPhoto, CardPhoto, WrapperBlockMonth, BlockMonth, BlockMonthText, BlockMonthPhoto } from './MyBlog.styles';

import { MonthText, MonthTitle, MonthSubTitle } from '../../atoms/fontSize/FontSize.styles';
const MyBlog = () => {
    return <>
        <WrapperBackgroundColor>

            <OurBlogText>Our Blog</OurBlogText>
            <ButtonBlogBlue>See More</ButtonBlogBlue>
            <BlogTitle>Read Our Travel Articles</BlogTitle>
            <Span></Span>


            <WrapperBlockMonth>

                <BlockMonth>
                    <BlockMonthText>
                        <MonthText>15 May 2022</MonthText>
                        <MonthTitle>Attractions proved to be firm favorites with travelers</MonthTitle>
                        <MonthSubTitle>Torsten Paulsson</MonthSubTitle>
                    </BlockMonthText>
                    <BlockMonthPhoto>
                        <img src={GirlImg} alt="GirlImg" />
                    </BlockMonthPhoto>
                </BlockMonth>



                <BlockMonth>
                    <BlockMonthText>
                        <MonthText>15 May 2022</MonthText>
                        <MonthTitle>Best-preserved monuments of Ancient Rome</MonthTitle>
                        <MonthSubTitle>Isaac Hunt</MonthSubTitle>
                    </BlockMonthText>
                    <BlockMonthPhoto>
                        <img src={BoyImg} alt="BoyImg" />
                    </BlockMonthPhoto>
                </BlockMonth>

            </WrapperBlockMonth>


            <WrapperCardPhoto>
                <CardPhoto>
                    <img src={BoatImg} alt="Boat" />
                </CardPhoto>
                <CardPhoto>
                    <img src={Image4Img} alt="Image" />
                </CardPhoto>
            </WrapperCardPhoto>


        </WrapperBackgroundColor>

    </>
}

export default MyBlog;